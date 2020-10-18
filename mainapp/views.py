from django.shortcuts import render
from .models import Category, Product

# Create your views here.
ideas = range(4)
rec = range(3)
skus = range(8)
time_credit = 12

menu = Category.objects.all()
sku = Product.objects.all()


def main(request):
    context = {
        'ideas': ideas,
        'menu': menu
    }
    return render(request, 'mainapp/index.html', context=context)


def catalog(request, cat=''):
    if cat:
        sku = Product.objects.filter(category__url=cat)
    else:
        sku = Product.objects.all()
    context = {
        'products': sku,
        'time_credit': time_credit,
        'skus': skus,
        'ideas': ideas,
        'menu': menu
    }
    return render(request, 'mainapp/catalogm.html', context=context)


def product(request, pk=None):
    print(pk)
    product = Product.objects.get(pk=pk)
    context = {
        'pk': pk,
        'product': product,
        'ideas': ideas,
        'rec': rec,
        'comments': ideas,
        'menu': menu

    }
    return render(request, 'mainapp/product.html', context=context)
