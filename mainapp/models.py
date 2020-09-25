from django.db import models


# Create your models here.

class Menu(models.Model):
    name = models.CharField(verbose_name='имя', max_length=64, unique=True)
    description = models.TextField(verbose_name='описание', blank=True)
    parentId = models.IntegerField(verbose_name='родительская категория')

    def __str__(self):
        return self.name