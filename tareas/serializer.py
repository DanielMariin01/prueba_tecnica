from rest_framework import serializers
from .models import Tareas

class TareasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tareas
        fields = ('id', 'nombre',  'email', 'fecha_Nacimiento', 'fecha_creacion')