
from django.contrib import admin
from .models import StudySpace, SpaceCheckIn

@admin.register(StudySpace)
class StudySpaceAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'type', 'capacity', 'current_occupancy', 'is_available', 'opening_time', 'closing_time')
    list_filter = ('type', 'is_available')
    search_fields = ('name', 'location')

@admin.register(SpaceCheckIn)
class SpaceCheckInAdmin(admin.ModelAdmin):
    list_display = ('user', 'study_space', 'check_in_time', 'check_out_time')
    list_filter = ('study_space',)
    search_fields = ('user__name', 'study_space__name')
