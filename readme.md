# Настройка VS code
- Создание файла *.env* с переменной **PYTHONPATH**
    *PYTHONPATH=./my_project;./env*
    - или
    *first_project/;env/;* **надо разобраться**
- Копировать в корень папку *.vscode* с настройками
  - Папки *.vscode/* и *env/* будут **скрыты**
- Копировать в корень *.editorconfig*

# Создание виртуального окружения

    python -m venv env
Затем выбрать созданное окружение, потом **терминал -> создать терминал** (автоматически запускается скрипт активации venv) или *env\scripts\activate*

# Django

    pip install django (или pip install -r requirements.txt)
    pip freeze > requirements.txt

## Создание проекта
команда *django-admin startproject my_project .* предполагает (используя . в конце), что текущая папка является папкой вашего проекта

    django-admin startproject my_project


## Создание суперпользователя

    python manage.py createsuperuser

без вызова диалога:

    python manage.py createsuperuser --username=<username> --email=<email>

## Запуск сервера

    python manage.py runserver (python manage.py runserver 5000)

## Создание приложения

    python manage.py startapp hello

## Структура каталогов в приложении
    templates/<название приложения>
    static/css
    static/js
    static/img

## Регистрация в админке (admin.py)

    from .models import <model>
    admin.site.register(<model>)

## Make changes to the models in your models.py file
Run *python manage.py makemigrations* to generate scripts in the migrations folder that migrate the database from its current state to the new state.
Run *python manage.py* migrate to apply the scripts to the actual database

    python manage.py makemigrations
    python manage.py migrate

SQL код того, что будет сделано (<приложение> <номер миграции>)

    python manage.py sqlmigrate <app> <xxxx>

### Вызов консоли python из проекта Django (зачем???)
    python manage.py shell
    quit()

## Поддержка статических страниц

    python manage.py collectstatic

# GIT

    git init

Конфигурация, глобальная (только в первый раз)

    git config --global user.name "ddergunov"
    git config --global user.email ddergunov@yandex.ru

Конфигурация, локальная (если необходимо, для папки)

    git config --local user.name "ddergunov"
    git config --local user.email ddergunov@yandex.ru

Добавить *.gitignore* сформированный на сайте http://gitignore.io

    git add . && git commit -m 'Initial commit'

Загнать на github (сначала создать на гитхабе)

    git remote add origin https://github.com/ddergunov/udemy.git
    git push -u origin master

В дальнейшем -

    git push
    git pull

Команды

    git status
    git log
    git clone [путь откуда](https://github.com/ddergunov/udemy.git) [папка куда]


# MySQL

    net start mysql80 (запуск сервера)
    mysql -u root -p (подключение)
    show databases;
    create database name_database;
    use name_database;

# HTML

    <html lang="ru">


# GULP
Скопировать содержимое папки **Стартовый шаблон**

    npm i
    gulp

иногда еще и *npm i -g gulp-cli*

для обновления package.json

    npx npm-check-updates -u

Run *npm install* to install new versions.
