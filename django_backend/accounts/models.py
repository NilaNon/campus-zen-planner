
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        return self.create_user(email, password, **extra_fields)

class User(AbstractUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    major = models.CharField(max_length=100, blank=True)
    bio = models.TextField(blank=True)
    
    # Make email the username field
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']
    
    objects = UserManager()
    
    def __str__(self):
        return self.email

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    avatar = models.ImageField(upload_to='profile_avatars/', null=True, blank=True)
    year_of_study = models.PositiveSmallIntegerField(null=True, blank=True)
    courses = models.TextField(blank=True, help_text="Comma-separated list of courses")
    
    def __str__(self):
        return f"{self.user.name}'s Profile"
