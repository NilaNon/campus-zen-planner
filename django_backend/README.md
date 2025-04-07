
# Campus Zen Planner - Django Backend

This is the Django backend for the Campus Zen Planner application. It's designed to work with MySQL as the database.

## Getting Started

1. **Set up the MySQL database**:
   - Follow the instructions in `mysql_setup.md`

2. **Install requirements**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. **Create a superuser** (for admin access):
   ```bash
   python manage.py createsuperuser
   ```

5. **Start the development server**:
   ```bash
   python manage.py runserver
   ```

6. **Access the admin panel**:
   - Go to http://127.0.0.1:8000/admin/
   - Log in with the superuser credentials you created

## Main Features

- **User Authentication**: Sign up, login, and user profile management
- **Study Spaces**: Find and check in to available study spaces on campus
- **Study Groups**: Create and join study groups with peers
- **Resource Sharing**: Access and share academic resources
- **Planner**: Schedule and manage your study sessions

## API Endpoints

The main API endpoints include:

- `/api/auth/`: Authentication endpoints (register, login, logout)
- `/api/study-spaces/`: Study space listing and management
- `/api/study-groups/`: Study group creation and management
- `/api/resources/`: Academic resource sharing
- `/api/events/`: Calendar and event planning

## Populating Sample Data

To add some initial study spaces, you can:

1. Log in to the admin panel
2. Go to the Study Spaces section
3. Add new study spaces with their details

Or, you can use the following management command (after creating it):

```bash
python manage.py populate_study_spaces
```

## Running Tests

```bash
python manage.py test
```
