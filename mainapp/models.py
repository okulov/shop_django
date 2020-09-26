from django.db import models


# Create your models here.

class Category(models.Model):
    name = models.CharField(verbose_name='имя', max_length=64, unique=True)
    description = models.TextField(verbose_name='описание', blank=True)
    parentId = models.IntegerField(verbose_name='родительская категория', blank=True, null=True)
    url = models.CharField(verbose_name='ссылка', max_length=128, unique=False, blank=True)
    in_Menu = models.BooleanField(verbose_name='в меню', default=True)

    def __str__(self):
        return self.name + " ( '" + self.url + "' )"


class Product(models.Model):
    name = models.CharField(verbose_name='название', max_length=128, unique=False, null=False)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE)
    price = models.DecimalField(verbose_name='цена', max_digits=8, decimal_places=2, default=0)
    image_main = models.ImageField(verbose_name='рисунок', upload_to='product_image', blank=True)

    def __str__(self):
        return self.category.name + '/' + self.name
