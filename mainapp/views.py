from django.shortcuts import render
from .models import Category, Product

# Create your views here.
ideas = range(4)
rec = range(3)
skus = range(8)
menu = [
    {
        "text": "Все товары",
        "id": "1",
        "url": "catalog"
    },
    {
        "id": "2",
        "text": "Матрасы",
        "url": "catalog",
        "sub": [{
            "text": "Двуспальные",
            "url": "catalog",
            "id": "10"
        }, {
            "text": "Детские",
            "url": "catalog",
            "id": "11"
        }]
    },
    {
        "id": "3",
        "sub": [{
            "text": "Столы",
            "id": "8"
        }, {
            "text": "Стулья",
            "id": "9"
        }],
        "text": "Шкафы"
    },
    {
        "id": "4",
        "text": "Постельное белье"
    },
    {
        "id": "5",
        "text": "Ароматы"
    },
    {
        "id": "6",
        "text": "Акции"
    }
]

menu = Category.objects.all()
sku = Product.objects.all()

def main(request):
    context = {
        'ideas': ideas,
        'menu': menu
    }
    return render(request, 'mainapp/index.html', context=context)


def catalog(request):
    context = {
        'skus': skus,
        'ideas': ideas,
        'menu': menu
    }
    return render(request, 'mainapp/catalogm.html', context=context)


def product(request):
    context = {
        'ideas': ideas,
        'rec': rec,
        'comments': ideas,
        'menu': menu

    }
    return render(request, 'mainapp/product.html', context=context)
