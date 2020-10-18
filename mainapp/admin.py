from django.contrib import admin
from .models import Category, Product, ProductImage, Size, SizeAndPrice, Small_texts

# Register your models here.

admin.site.register(Category)
admin.site.register(Size)


# admin.site.register(Product)


class SizeAdmin(admin.ModelAdmin):
    list_display = ('value',)


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class SizeAndPriceInline(admin.TabularInline):
    model = SizeAndPrice
    extra = 1


class Small_textsInline(admin.TabularInline):
    model = Small_texts
    extra = 3


def dublicate_Product(modeladmin, request, queryset):
    # клонирование выбранных Product
    for ad in queryset:
        ad.pk = None
        ad.save()


dublicate_Product.short_description = "Дублировать объект"


# @admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [Small_textsInline, ProductImageInline, SizeAndPriceInline, ]
    actions = [dublicate_Product]
    list_display = ('name', 'category', 'price')
    list_display_links = ('name', 'price')


admin.site.register(Product, ProductAdmin)
