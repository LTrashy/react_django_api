from django.db import models

# Create your models here.

class Company(models.Model):
    name=models.CharField(max_length=50)
    direccion=models.CharField(max_length=100, default="")
    nit=models.PositiveBigIntegerField(default=0)
    telefono=models.PositiveBigIntegerField(default=0)
