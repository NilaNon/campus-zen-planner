
from rest_framework import serializers
from .models import StudySpace, SpaceCheckIn

class StudySpaceSerializer(serializers.ModelSerializer):
    available = serializers.BooleanField(read_only=True)
    occupancy = serializers.IntegerField(read_only=True)
    open_until = serializers.CharField(read_only=True)
    
    class Meta:
        model = StudySpace
        fields = [
            'id', 'name', 'location', 'description', 'type', 
            'capacity', 'occupancy', 'available', 'open_until',
            'facilities', 'image'
        ]

class SpaceCheckInSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpaceCheckIn
        fields = ['id', 'user', 'study_space', 'check_in_time', 'check_out_time']
        read_only_fields = ['check_in_time']
