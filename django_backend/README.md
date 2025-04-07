
# Django Backend for Campus Zen Planner

This folder contains the Django backend for the Campus Zen Planner application.

## Setup Instructions

1. **Create a virtual environment:**
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

2. **Install Django and required packages:**
```bash
pip install django djangorestframework django-cors-headers
```

3. **Create a new Django project:**
```bash
django-admin startproject campus_zen_planner .
```

4. **Create apps for different features:**
```bash
python manage.py startapp accounts
python manage.py startapp study_spaces
python manage.py startapp study_groups
python manage.py startapp resources
python manage.py startapp planner
```

5. **Configure settings.py:**
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'accounts',
    'study_spaces',
    'study_groups',
    'resources',
    'planner',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',  # Add this line
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# CORS settings
CORS_ALLOWED_ORIGINS = [
    "http://localhost:8080",
    "http://127.0.0.1:8080",
]

# REST Framework settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
}
```

6. **Create models:**
Each app should contain models for its respective domain.

7. **Create API views and serializers:**
Implement REST API endpoints using Django REST Framework.

8. **Set up URLs:**
Configure URL patterns for each app.

9. **Run migrations:**
```bash
python manage.py makemigrations
python manage.py migrate
```

10. **Create a superuser:**
```bash
python manage.py createsuperuser
```

11. **Run the development server:**
```bash
python manage.py runserver
```

## API Endpoints

### Authentication
- `POST /api/auth/register/` - Register a new user
- `POST /api/auth/login/` - Log in a user
- `POST /api/auth/logout/` - Log out a user

### Study Spaces
- `GET /api/study-spaces/` - List all study spaces
- `GET /api/study-spaces/<id>/` - Get a specific study space
- `POST /api/study-spaces/` - Create a new study space (auth required)

### Study Groups
- `GET /api/study-groups/` - List all study groups
- `GET /api/study-groups/<id>/` - Get a specific study group
- `POST /api/study-groups/` - Create a new study group (auth required)
- `POST /api/study-groups/<id>/join/` - Join a study group (auth required)

### Resources
- `GET /api/resources/` - List all resources
- `GET /api/resources/<id>/` - Get a specific resource
- `POST /api/resources/` - Add a new resource (auth required)

### Planner
- `GET /api/events/` - List all events for the current user (auth required)
- `POST /api/events/` - Create a new event (auth required)
- `PUT /api/events/<id>/` - Update an event (auth required)
- `DELETE /api/events/<id>/` - Delete an event (auth required)
