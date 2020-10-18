from django.urls import path

import mainapp.views as mainapp

app_name = 'category'

urlpatterns = [
    path('', mainapp.catalog),
    path('<str:cat>/', mainapp.catalog)
]
