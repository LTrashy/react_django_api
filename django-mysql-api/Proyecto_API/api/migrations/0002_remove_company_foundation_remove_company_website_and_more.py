# Generated by Django 4.0.2 on 2022-05-19 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='company',
            name='foundation',
        ),
        migrations.RemoveField(
            model_name='company',
            name='website',
        ),
        migrations.AddField(
            model_name='company',
            name='direccion',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='company',
            name='nit',
            field=models.PositiveBigIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='company',
            name='telefono',
            field=models.PositiveBigIntegerField(default=0),
        ),
    ]
