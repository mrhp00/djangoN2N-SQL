from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=30)
    family = models.CharField(max_length=50)

    class Meta:
        db_table = 'students'


class Course(models.Model):
    title = models.CharField(max_length=50)
    duration = models.IntegerField()
    students = models.ManyToManyField(Student, db_table='course_student')

    class Meta:
        db_table = 'courses'
