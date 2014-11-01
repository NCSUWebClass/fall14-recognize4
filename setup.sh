#!/bin/bash

# Configuration ###############################################################

VIRTUALENV_VERSION="1.11.6"
VIRTUALENV_URL="https://pypi.python.org/packages/source/v/virtualenv/virtualenv-${VIRTUALENV_VERSION}.tar.gz"

COLOR_BLUE="\033[1;34m"
COLOR_RESET="\033[0m"

# Main Execution ##############################################################

cd `dirname "${0}"`

echo -e "\n${COLOR_BLUE}[[ Fetching Virtual Environment Scripts ]]${COLOR_RESET}"

curl -O "${VIRTUALENV_URL}"
tar xvzf "virtualenv-${VIRTUALENV_VERSION}.tar.gz"
mv "virtualenv-${VIRTUALENV_VERSION}" "virtualenv"
rm -f "virtualenv-${VIRTUALENV_VERSION}.tar.gz"

echo -e "\n${COLOR_BLUE}[[ Creating Virtual Environment ]]${COLOR_RESET}"

./virtualenv/virtualenv.py --python="python3" .

echo -e "\n${COLOR_BLUE}[[ Installing Dependencies ]]${COLOR_RESET}\n"

./bin/python3 -m pip install "django==1.6" "django-filer==0.9.7"

echo -e "\n${COLOR_BLUE}[[ Initializing Database ]]${COLOR_RESET}\n"

./bin/python3 recognize_backend/manage.py syncdb
