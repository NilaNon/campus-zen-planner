
from django import forms
from .models import StudyReminder

class StudyReminderForm(forms.ModelForm):
    """Form for creating study reminders"""
    class Meta:
        model = StudyReminder
        fields = ['title', 'description', 'due_date']
        widgets = {
            'due_date': forms.DateTimeInput(attrs={'type': 'datetime-local'}),
            'description': forms.Textarea(attrs={'rows': 4}),
        }
