
from django.db import models
from django.contrib.auth.models import User

class StudyReminder(models.Model):
    """A simple model for study reminders"""
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    due_date = models.DateTimeField()
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
