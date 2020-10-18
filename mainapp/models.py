from django.db import models
from django.contrib.postgres.fields import ArrayField


# Create your models here.

class Category(models.Model):
    name = models.CharField(verbose_name='имя', max_length=64, unique=True)
    description = models.TextField(verbose_name='описание', blank=True)
    parentId = models.IntegerField(verbose_name='родительская категория', blank=True, null=True)
    url = models.CharField(verbose_name='ссылка', max_length=128, unique=False, blank=True)
    in_Menu = models.BooleanField(verbose_name='в меню', default=True)

    def __str__(self):
        return self.name + " ( '" + self.url + "' )"

    class Meta():
        verbose_name_plural = 'Категории'
        verbose_name = 'Категория'


class Size(models.Model):
    value = models.CharField(verbose_name='размер', max_length=64, unique=True, null=False)

    def __str__(self):
        return self.value

    class Meta():
        verbose_name = 'Размер'
        verbose_name_plural = 'Размеры'


class Small_texts(models.Model):
    property = models.ForeignKey('Product', related_name='sm_texts', verbose_name='Текстовый буллет', null=True, on_delete=models.SET_NULL)
    text = models.CharField(verbose_name='буллет', null=True, max_length=256)

    def __str__(self):
        return self.text

    class Meta():
        verbose_name = 'Буллет'
        verbose_name_plural = 'Буллеты'


class Product(models.Model):
    name = models.CharField(verbose_name='название', max_length=128, unique=False, null=False)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE)
    price = models.DecimalField(verbose_name='цена', max_digits=8, decimal_places=2, default=0)
    banner = models.ImageField(verbose_name='верхний баннер', upload_to='product_image', blank=True)
    logo = models.ImageField(verbose_name='логотип', upload_to='product_image', blank=True)

    def __str__(self):
        return self.category.name + '/' + self.name

    class Meta():
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'


class ProductImage(models.Model):
    property = models.ForeignKey(to='Product', related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(verbose_name='рисунок галереи', upload_to='product_image', blank=True)

    class Meta():
        verbose_name = 'Рисунок'
        verbose_name_plural = 'Рисунки для галереи'


class SizeAndPrice(models.Model):
    property = models.ForeignKey('Product', related_name='sizes', null=True, on_delete=models.SET_NULL)
    value = models.ForeignKey('Size', verbose_name='Размер', on_delete=models.CASCADE)
    price = models.DecimalField(verbose_name='Цена размера', max_digits=8, decimal_places=2, default=0)

    class Meta():
        verbose_name_plural = 'Размеры и цены'
        verbose_name = 'Размер и цена'
