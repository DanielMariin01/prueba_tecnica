from django.db import models

# Create your models here.
class Tareas(models.Model):
    nombre = models.CharField(max_length=100)

    email = models.EmailField()
    fecha_Nacimiento = models.DateField()
    fecha_creacion = models.DateField()
    def __str__(self) -> str:
        return self.nombre