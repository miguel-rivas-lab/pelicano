------------------------------------------------
# Setting the app for the first time
------------------------------------------------

#### Install Python 3 and related packages
`sudo apt-get python3 python3-pip virtualenv`

------------------------------------------------
# Creating the project
------------------------------------------------
#### Creating virtual environment
`virtualenv -p python3 .`

#### Activate virtual environment
`source bin/activate`

#### Install Django
`pip install django`

#### Start new project
`django-admin startproject app`

#### Move to the new app folder
`cd app`

#### Set database
`python3 manage.py migrate`

#### Create user
`python3 manage.py createsuperuser`

#### Create new app
`python3 manage.py startapp app_drlogic`

------------------------------------------------
# Installing webpack
------------------------------------------------

#### Install webpack and webpack command line
npm i webpack webpack-cli

#### Create package.json
npm init -y

#### Installing dev server
npm i -D webpack-dev-server

npm start

npm i -D nodemon

------------------------------------------------
# Daily tasks
------------------------------------------------

#### Run server
`python3 manage.py runserver`

#### URL
`http://localhost:8000/`