python manage.py makemigrations
pause
python manage.py migrate
python manage.py createsuperuser

python manage.py dumpdata > dupm.json
python manage.py loaddata dupm.json
