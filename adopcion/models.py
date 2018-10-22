from django.db import models

# Create your models here.
class Interesado(models.Model):
    nombre = models.CharField(max_length=30)
    correo = models.EmailField(max_length=100)
    rut = models.CharField(max_length=10)
    fec_nacimiento = models.DateField()
    fono = models.CharField(max_length=8)
    region = models.CharField(max_length=100)
    comuna =  models.CharField(max_length=100)
    tipo_vivienda = models.CharField(max_length=100)

class Rescatado(models.Model):
    foto = models.ImageField(upload_to = 'img/')
    nombre = models.CharField(max_length=30)
    raza = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=100)
    estado = models.CharField(max_length=30)