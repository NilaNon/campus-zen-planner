
from django.urls import path
from . import views

app_name = 'wireframe'

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('reminders/', views.ReminderListView.as_view(), name='reminder_list'),
    path('reminders/new/', views.ReminderCreateView.as_view(), name='create_reminder'),
]
