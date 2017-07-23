# fun-planner
Collaborative implementation of Fun Planner

Installation Instructions
- Pre-reqs: Python2.7, Node, NPM, virtualenv

- git clone https://github.com/Damen-Kevin/fun-planner.git
- cd fun-planner
- virtualenv fun_planner_env
- source ./fun_planner_env/bin/activate
- pip install -r requirements.txt
- npm install
- python manage.py makemigrations
- python manage.py migrate
- ./node_modules/.bin/webpack --config webpack.config.js

- python manage.py runserver
