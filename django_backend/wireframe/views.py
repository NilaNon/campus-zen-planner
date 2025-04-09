
from django.shortcuts import render, redirect
from django.views.generic import ListView, CreateView
from django.urls import reverse_lazy
from .models import StudyReminder
from .forms import StudyReminderForm

def homepage(request):
    """Simple homepage view"""
    return render(request, 'wireframe/homepage.html')

class ReminderListView(ListView):
    """List all study reminders"""
    model = StudyReminder
    template_name = 'wireframe/reminder_list.html'
    context_object_name = 'reminders'
    
class ReminderCreateView(CreateView):
    """Create a new study reminder"""
    model = StudyReminder
    form_class = StudyReminderForm
    template_name = 'wireframe/reminder_form.html'
    success_url = reverse_lazy('wireframe:reminder_list')
