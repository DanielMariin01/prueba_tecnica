from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TareasSerializer
from .models import Tareas
class TareaVista(viewsets.ModelViewSet):
   serializer_class = TareasSerializer
   queryset = Tareas.objects.all()
