from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response

from blog.models import Student, Course


# def course_all(request):
#     courses = Course.objects.all()
#     content = {'courses': courses}
#     return render(request, 'courses.html', content)


# def course_add(request):
#     if request.method == 'GET':
#         student = Student.objects.all()
#         content = {'students': student}
#         return render(request, 'courses_add.html', content)
#     elif request.method == 'POST':
#         title = request.POST.get("title")
#         duration = request.POST.get("duration")
#         students = request.POST.getlist('students[]')
#         crs = Course.objects.create(title=title, duration=duration)
#         for std in students:
#             crs.students.add(Student.objects.get(id=std))
#         return redirect("course_all")


def course_edit(request):
    if request.method == 'GET':
        id = request.GET.get("id")
        course = Course.objects.get(id=id)
        students = Student.objects.all()
        selected_student = course.students.all()
        stds = []
        for st in selected_student:
            stds.append(st.id)
        content = {'courses': course, 'students': students, 'joined': stds}
        return render(request, 'courses_add_edit.html', content)

    elif request.method == 'POST':
        id = request.POST.get("id")
        title = request.POST.get("title")
        duration = request.POST.get("duration")
        crs = Course.objects.get(id=id)
        crs.title = title
        crs.duration = duration
        crs.save()
        crs.students.clear()
        students = request.POST.getlist('students[]')
        for std in students:
            crs.students.add(Student.objects.get(id=std))
        return redirect('course_all')


def course_delete(request):
    id = request.GET.get("id")
    crs = Course.objects.get(id=id)
    crs.students.clear()
    crs.delete()
    return redirect("course_all")


@api_view(['GET'])
def course_all(request):
    course = Course.objects.all()
    crs = []
    for cr in course:
        crs.append({'id': cr.id, 'title': cr.title, 'duration': cr.duration})
    content = {
        'error': False,
        'message': "",
        'data': {'courses': crs}
    }
    return Response(content)


@api_view(['GET'])
def course_add(request):
    title = request.data["title"]
    duration = request.data["duration"]
    students = request.data['students[]']
    all_student = Student.objects.all()
    crs = Course.objects.create(title=title, duration=duration)
    for std in students:
        crs.students.add(Student.objects.get(id=std))
    courses = Course.objects.all()
    c = []
    stds = []
    for i in courses:
        c.append({'id': i.id, 'title': i.title, 'duration': i.duration})
    for stu in all_student:
        stds.append({'id': stu.id, 'name': stu.name, 'family': stu.family})
        print("HERE -------------------------------------------------------------------------------->")
        print(stds)
        print(c)
    content = {
        'error': False,
        'message': "",
        'data': {
            'courses': c,
            'students': stds
        }
    }
    return Response(content)
