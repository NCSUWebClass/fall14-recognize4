#!/bin/bash

# create virtual environment
python3 -m venv .

# install dependencies
./bin/python3 -m pip install "django==1.6" "django-filer==0.9.7"

# initialize database
./recognize_backend/manage.py syncdb
