from django.urls import path

from blog import views

urlpatterns = [
    path('courses', views.course_all, name='course_all'),
    path('courses/add', views.course_add, name='course_add'),
    path('courses/edit', views.course_edit, name='course_edit'),
    path('courses/delete', views.course_delete, name='course_delete'),

]
