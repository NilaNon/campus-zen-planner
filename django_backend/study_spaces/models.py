
from django.db import models
from django.conf import settings

class StudySpace(models.Model):
    """Model for campus study spaces"""
    
    # Basic information
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    
    # Space details
    TYPE_CHOICES = (
        ('individual', 'Individual'),
        ('group', 'Group'),
    )
    type = models.CharField(max_length=20, choices=TYPE_CHOICES, default='individual')
    capacity = models.PositiveIntegerField(default=1)
    current_occupancy = models.PositiveIntegerField(default=0)
    
    # Operating hours
    opening_time = models.TimeField()
    closing_time = models.TimeField()
    
    # Availability
    is_available = models.BooleanField(default=True)
    
    # Facilities and amenities (comma-separated list)
    facilities = models.TextField(blank=True, help_text="Comma-separated list of facilities")
    
    # Image of the space (optional)
    image = models.ImageField(upload_to='study_spaces/', null=True, blank=True)
    
    # Creation and update timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    @property
    def available(self):
        """Check if space is available based on occupancy and availability flag"""
        return self.is_available and self.current_occupancy < self.capacity
    
    @property
    def occupancy(self):
        """Return current occupancy"""
        return self.current_occupancy
    
    @property
    def open_until(self):
        """Return closing time in HH:MM format"""
        return self.closing_time.strftime('%H:%M')

class SpaceCheckIn(models.Model):
    """Model to track user check-ins to study spaces"""
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    study_space = models.ForeignKey(StudySpace, on_delete=models.CASCADE)
    check_in_time = models.DateTimeField(auto_now_add=True)
    check_out_time = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        verbose_name = "Study Space Check-in"
        verbose_name_plural = "Study Space Check-ins"
    
    def __str__(self):
        return f"{self.user.name} at {self.study_space.name}"
