
# Setting up MySQL for Campus Zen Planner

This guide provides instructions for setting up MySQL for the Campus Zen Planner Django application.

## Prerequisites

1. Install MySQL Server and MySQL Workbench
2. Python with pip installed

## Setup Steps

1. **Install the MySQL client for Python**:
   ```bash
   pip install mysqlclient
   ```
   
   This package is already included in the requirements.txt file.

2. **Create a MySQL database**:
   - Open MySQL Workbench
   - Connect to your MySQL server
   - Create a new schema (database):
   ```sql
   CREATE DATABASE campus_zen_planner;
   ```

3. **Configure Django**:
   - The settings.py file is already configured to use MySQL
   - Update the database credentials in settings.py if needed:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'campus_zen_planner',
           'USER': 'root',          # Update with your MySQL username
           'PASSWORD': '',          # Update with your MySQL password
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```

4. **Run Migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a Superuser**:
   ```bash
   python manage.py createsuperuser
   ```

6. **Start the Django Server**:
   ```bash
   python manage.py runserver
   ```

## Troubleshooting

- If you encounter an error related to the MySQLClient, ensure you have the proper MySQL development libraries installed:
  - **Windows**: Make sure you installed MySQL with the "Developer Default" or "Full" option
  - **Ubuntu/Debian**: `sudo apt-get install python3-dev default-libmysqlclient-dev build-essential`
  - **macOS**: `brew install mysql-client`

- If you encounter connection errors, verify:
  - MySQL service is running
  - Credentials are correct
  - Database name is correct
  - MySQL server is accepting connections from localhost
