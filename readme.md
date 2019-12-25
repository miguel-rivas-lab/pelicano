** Install Python 3 and related packages
$ sudo apt-get python3 python3-pip virtualenv

** Creating environtment
$ virtualenv -p python3 .

** Activate virtual environtment
$ source bin/activate

** Install Django
$ pip3 install django

** Start Project
$ django-admin startproject app

** move to the new app
$ cd app

** Set DB
$ python3 manage.py migrate

** Create users
$ python3 manage.py createsuperuser

** Create New Apps
$ python3 manage.py startapp app_drlogic

** Run server
$ python3 manage.py runserver

** URL
http://localhost:8000/