
# Django Backend Setup Guide

This guide explains how to set up the Django backend for the Campus Zen Planner application.

## Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- virtualenv (recommended)

## Setting Up the Project

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install Django and other dependencies:
   ```bash
   pip install django djangorestframework django-cors-headers
   ```

3. Create a new Django project:
   ```bash
   django-admin startproject campus_zen_backend
   cd campus_zen_backend
   ```

4. Create the main application:
   ```bash
   python manage.py startapp planner
   ```

## Database Configuration

1. Configure the database in `settings.py`:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.sqlite3',
           'NAME': BASE_DIR / 'db.sqlite3',
       }
   }
   ```

2. For production, consider using PostgreSQL:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': 'campus_zen_db',
           'USER': 'username',
           'PASSWORD': 'password',
           'HOST': 'localhost',
           'PORT': '5432',
       }
   }
   ```

## Setting Up CORS

1. Add CORS configuration to `settings.py`:
   ```python
   INSTALLED_APPS = [
       # ... other apps
       'corsheaders',
       'rest_framework',
       'planner',
   ]

   MIDDLEWARE = [
       'corsheaders.middleware.CorsMiddleware',
       # ... other middleware
   ]

   CORS_ALLOWED_ORIGINS = [
       "http://localhost:3000",
       "http://localhost:5173",
   ]
   ```

## Creating Models

Here are some example models for the Campus Zen Planner:

```python
# planner/models.py
from django.db import models
from django.contrib.auth.models import User

class StudySpace(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    type = models.CharField(max_length=50, choices=[
        ('individual', 'Individual'), 
        ('group', 'Group')
    ])
    capacity = models.IntegerField()
    occupancy = models.IntegerField(default=0)
    open_until = models.TimeField()
    
    def is_available(self):
        return self.occupancy < self.capacity

class Resource(models.Model):
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=50, choices=[
        ('document', 'Document'),
        ('link', 'Link'),
        ('event', 'Event'),
    ])
    category = models.CharField(max_length=50, choices=[
        ('academic', 'Academic'),
        ('wellness', 'Wellness'),
        ('community', 'Community'),
    ])
    location = models.CharField(max_length=255)
    file = models.FileField(upload_to='resources/', null=True, blank=True)
    url = models.URLField(null=True, blank=True)

class Event(models.Model):
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=50, choices=[
        ('group', 'Group'),
        ('deadline', 'Deadline'),
        ('personal', 'Personal'),
    ])
    date = models.DateField()
    start_time = models.TimeField(null=True, blank=True)
    end_time = models.TimeField(null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    course = models.CharField(max_length=100, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='events')
    
class WellnessCheck(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='wellness_checks')
    stress_level = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
    timestamp = models.DateTimeField(auto_now_add=True)
```

## Creating API Views

Here's an example of API views for the application:

```python
# planner/views.py
from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import StudySpace, Resource, Event, WellnessCheck
from .serializers import StudySpaceSerializer, ResourceSerializer, EventSerializer, WellnessCheckSerializer

class StudySpaceViewSet(viewsets.ModelViewSet):
    queryset = StudySpace.objects.all()
    serializer_class = StudySpaceSerializer
    
    @action(detail=True, methods=['post'])
    def check_in(self, request, pk=None):
        study_space = self.get_object()
        if study_space.is_available():
            study_space.occupancy += 1
            study_space.save()
            return Response({'status': 'checked in'})
        return Response({'error': 'Space is full'}, status=status.HTTP_400_BAD_REQUEST)

class ResourceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    
    def get_queryset(self):
        category = self.request.query_params.get('category')
        if category:
            return Resource.objects.filter(category=category)
        return Resource.objects.all()
    
    @action(detail=True, methods=['get'])
    def download(self, request, pk=None):
        resource = self.get_object()
        # Logic to handle downloads
        return Response({'status': 'download initiated'})

class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    
    def get_queryset(self):
        return Event.objects.filter(user=self.request.user)

class WellnessCheckCreate(generics.CreateAPIView):
    serializer_class = WellnessCheckSerializer
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
```

## Setting Up URLs

Configure your URLs to expose the API endpoints:

```python
# planner/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudySpaceViewSet, ResourceViewSet, EventViewSet, WellnessCheckCreate

router = DefaultRouter()
router.register(r'study-spaces', StudySpaceViewSet)
router.register(r'resources', ResourceViewSet)
router.register(r'events', EventViewSet, basename='event')

urlpatterns = [
    path('', include(router.urls)),
    path('users/wellness-check/', WellnessCheckCreate.as_view(), name='wellness-check'),
]

# campus_zen_backend/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('planner.urls')),
]
```

## Running Migrations

Run the following commands to apply the database migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

## Creating a Superuser

Create an admin user to manage the application:

```bash
python manage.py createsuperuser
```

## Running the Server

Start the Django development server:

```bash
python manage.py runserver
```

The API should now be accessible at http://localhost:8000/api/

## Connecting with the Frontend

The frontend React application is configured to connect to this Django backend through the API service. Make sure CORS is properly configured to allow the frontend to communicate with the backend.
