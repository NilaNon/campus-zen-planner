
# Django Backend Setup Guide for Campus Zen Planner

This document outlines the steps to set up the Django backend with MySQL database connection.

## 1. Django Setup

```bash
# Install Django and MySQL connector
pip install django mysqlclient

# Create Django project
django-admin startproject campus_zen_backend

# Navigate to project
cd campus_zen_backend

# Create app for study spaces
python manage.py startapp study_spaces

# Create app for study groups
python manage.py startapp study_groups

# Create app for planner
python manage.py startapp planner

# Create app for resources
python manage.py startapp resources
```

## 2. MySQL Database Configuration

Add the following to `settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'campus_zen_db',
        'USER': 'your_mysql_username',
        'PASSWORD': 'your_mysql_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

## 3. Model Examples

### Study Spaces App (study_spaces/models.py)

```python
from django.db import models

class StudySpace(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    type = models.CharField(max_length=50, choices=[('individual', 'Individual'), ('group', 'Group')])
    capacity = models.IntegerField()
    occupancy = models.IntegerField(default=0)
    available = models.BooleanField(default=True)
    open_time = models.TimeField()
    close_time = models.TimeField()
    facilities = models.TextField(blank=True, null=True)  # Comma-separated facilities
    
    def __str__(self):
        return self.name
```

## 4. API Setup with Django REST Framework

```bash
# Install Django REST Framework
pip install djangorestframework
```

Add to `settings.py`:

```python
INSTALLED_APPS = [
    # ...
    'rest_framework',
    'study_spaces',
    'study_groups',
    'planner',
    'resources',
]
```

## 5. Example API Views

```python
# study_spaces/views.py
from rest_framework import viewsets
from .models import StudySpace
from .serializers import StudySpaceSerializer

class StudySpaceViewSet(viewsets.ModelViewSet):
    queryset = StudySpace.objects.all()
    serializer_class = StudySpaceSerializer
```

## 6. Run Migrations and Start Server

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

## 7. Connecting from React Frontend

Create an API service in the React app to connect to the Django backend:

```javascript
// Example API service in React
const API_URL = 'http://localhost:8000/api';

export const fetchStudySpaces = async () => {
  const response = await fetch(`${API_URL}/study-spaces/`);
  if (!response.ok) {
    throw new Error('Failed to fetch study spaces');
  }
  return response.json();
};
```
