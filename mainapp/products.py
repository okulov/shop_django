from django.urls import path

import mainapp.views as mainapp

app_name = 'category'

urlpatterns = [
    path('', mainapp.product, name='index'),
    path('<int:pk>', mainapp.product, name='sku')
]
