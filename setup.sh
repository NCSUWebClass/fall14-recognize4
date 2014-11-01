#!/bin/bash

COLOR_BLUE="\033[1;34m"
COLOR_RESET="\033[0m"

# create virtual environment
echo -e "\n${COLOR_BLUE}[[ Creating Virtual Environment ]]${COLOR_RESET}"
python3 -m venv .

# install dependencies
echo -e "\n${COLOR_BLUE}[[ Installing Dependencies ]]${COLOR_RESET}\n"
./bin/python3 -m pip install "django==1.6" "django-filer==0.9.7"

# initialize database
echo -e "\n${COLOR_BLUE}[[ Initializing Database ]]${COLOR_RESET}\n"
./bin/python3 recognize_backend/manage.py syncdb
