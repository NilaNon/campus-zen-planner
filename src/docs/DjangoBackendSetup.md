
# Django Backend Setup for Campus Zen Planner

This document provides instructions for setting up the Django backend for the Campus Zen Planner application with MySQL database integration.

## Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- MySQL Server
- MySQL Workbench (for database management)

## Step 1: Set Up Python Environment

```bash
# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

# Install required packages
pip install django djangorestframework django-cors-headers mysqlclient python-dotenv
```

## Step 2: Create Django Project

```bash
# Create a new Django project
django-admin startproject campus_zen_backend

# Navigate to project directory
cd campus_zen_backend

# Create apps for different features
python manage.py startapp resources
python manage.py startapp study_spaces
python manage.py startapp study_groups
python manage.py startapp planner
python manage.py startapp users
```

## Step 3: Configure MySQL Database

1. Create a new MySQL database using MySQL Workbench:
   - Name: campus_zen_db
   - Character Set: utf8mb4
   - Collation: utf8mb4_unicode_ci

2. Configure Django to use MySQL in `settings.py`:

```python
# settings.py
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Database configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.getenv('DB_NAME', 'campus_zen_db'),
        'USER': os.getenv('DB_USER', 'root'),
        'PASSWORD': os.getenv('DB_PASSWORD', ''),
        'HOST': os.getenv('DB_HOST', 'localhost'),
        'PORT': os.getenv('DB_PORT', '3306'),
        'OPTIONS': {
            'charset': 'utf8mb4',
        },
    }
}
```

3. Create a `.env` file in your project root:

```
DB_NAME=campus_zen_db
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_PORT=3306
SECRET_KEY=your-secret-key
DEBUG=True
```

## Step 4: Configure Django Settings

Update `settings.py` with the following configurations:

```python
# Add installed apps
INSTALLED_APPS = [
    # Django built-in apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # Third-party apps
    'rest_framework',
    'corsheaders',
    
    # Project apps
    'resources',
    'study_spaces',
    'study_groups',
    'planner',
    'users',
]

# Add CORS middleware
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    # ... other middleware
]

# CORS settings (for development)
CORS_ALLOW_ALL_ORIGINS = True  # In production, specify exact origins

# REST Framework settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
}
```

## Step 5: Create Models

Example model for the `resources` app (`resources/models.py`):

```python
from django.db import models

class ResourceCategory(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    
    def __str__(self):
        return self.name

class Resource(models.Model):
    RESOURCE_TYPES = (
        ('PDF', 'PDF Document'),
        ('DOCX', 'Word Document'),
        ('URL', 'External URL'),
    )
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(ResourceCategory, on_delete=models.CASCADE, related_name='resources')
    resource_type = models.CharField(max_length=10, choices=RESOURCE_TYPES)
    file = models.FileField(upload_to='resources/', blank=True, null=True)
    external_url = models.URLField(blank=True, null=True)
    size = models.CharField(max_length=50, blank=True)
    downloads = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
```

Create similar models for other apps (study_spaces, study_groups, planner, users).

## Step 6: Create API Views and Serializers

Example for `resources` app:

1. Create serializers (`resources/serializers.py`):

```python
from rest_framework import serializers
from .models import ResourceCategory, Resource

class ResourceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ResourceCategory
        fields = '__all__'

class ResourceSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    
    class Meta:
        model = Resource
        fields = '__all__'
```

2. Create views (`resources/views.py`):

```python
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import ResourceCategory, Resource
from .serializers import ResourceCategorySerializer, ResourceSerializer

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    
    @action(detail=False, methods=['get'])
    def academic(self, request):
        academic_resources = Resource.objects.filter(category__name='Academic')
        serializer = self.get_serializer(academic_resources, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def wellness(self, request):
        wellness_resources = Resource.objects.filter(category__name='Wellness')
        serializer = self.get_serializer(wellness_resources, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def community(self, request):
        community_resources = Resource.objects.filter(category__name='Community')
        serializer = self.get_serializer(community_resources, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def download(self, request, pk=None):
        resource = self.get_object()
        resource.downloads += 1
        resource.save()
        return Response({'status': 'download counted'})
```

## Step 7: Configure URLs

1. Create app URLs (`resources/urls.py`):

```python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ResourceViewSet

router = DefaultRouter()
router.register(r'resources', ResourceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
```

2. Include app URLs in main `urls.py`:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('resources.urls')),
    path('api/', include('study_spaces.urls')),
    path('api/', include('study_groups.urls')),
    path('api/', include('planner.urls')),
    path('api/', include('users.urls')),
]
```

## Step 8: Run Migrations and Create Admin User

```bash
# Create and apply migrations
python manage.py makemigrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Run development server
python manage.py runserver
```

## Step 9: Test API Endpoints

Use tools like Postman or curl to test your API endpoints:

```bash
# Example: Get all resources
curl http://localhost:8000/api/resources/

# Example: Get academic resources
curl http://localhost:8000/api/resources/academic/
```

## Step 10: Connect React Frontend

Make sure your React frontend is configured to connect to the Django backend using the API endpoints.

## Additional Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework Documentation](https://www.django-rest-framework.org/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
