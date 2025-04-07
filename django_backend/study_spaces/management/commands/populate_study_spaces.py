
from django.core.management.base import BaseCommand
from study_spaces.models import StudySpace
from django.utils import timezone
import datetime

class Command(BaseCommand):
    help = 'Populates the database with sample study spaces'

    def handle(self, *args, **options):
        # Clear existing spaces
        StudySpace.objects.all().delete()
        
        # Define sample study spaces
        sample_spaces = [
            {
                'name': 'Library Quiet Zone',
                'location': 'Main Library, 2nd Floor',
                'description': 'Silent study area with individual desks',
                'type': 'individual',
                'capacity': 30,
                'current_occupancy': 12,
                'opening_time': datetime.time(8, 0),  # 8:00 AM
                'closing_time': datetime.time(20, 0),  # 8:00 PM
                'is_available': True,
                'facilities': 'Power outlets, Wi-Fi, Desk lamps',
            },
            {
                'name': 'Humanities Study Room',
                'location': 'Humanities Building, Room 105',
                'description': 'Group study room with whiteboard and projector',
                'type': 'group',
                'capacity': 8,
                'current_occupancy': 3,
                'opening_time': datetime.time(9, 0),  # 9:00 AM
                'closing_time': datetime.time(18, 0),  # 6:00 PM
                'is_available': True,
                'facilities': 'Whiteboard, Projector, Wi-Fi',
            },
            {
                'name': 'Science Building Carrels',
                'location': 'Science Building, 3rd Floor',
                'description': 'Individual study carrels in a quiet area',
                'type': 'individual',
                'capacity': 20,
                'current_occupancy': 18,
                'opening_time': datetime.time(7, 0),  # 7:00 AM
                'closing_time': datetime.time(22, 0),  # 10:00 PM
                'is_available': True,
                'facilities': 'Power outlets, Wi-Fi, Desk lamps',
            },
            {
                'name': 'Student Center Meeting Room',
                'location': 'Student Center, 1st Floor',
                'description': 'Large meeting room for group study sessions',
                'type': 'group',
                'capacity': 10,
                'current_occupancy': 10,  # Full
                'opening_time': datetime.time(8, 0),  # 8:00 AM
                'closing_time': datetime.time(21, 0),  # 9:00 PM
                'is_available': False,  # Not available
                'facilities': 'Whiteboard, TV Screen, Wi-Fi, Refreshments nearby',
            },
            {
                'name': 'Law Building Study Lounge',
                'location': 'Law Building, Ground Floor',
                'description': 'Comfortable lounge area for relaxed studying',
                'type': 'individual',
                'capacity': 15,
                'current_occupancy': 5,
                'opening_time': datetime.time(8, 30),  # 8:30 AM
                'closing_time': datetime.time(19, 0),  # 7:00 PM
                'is_available': True,
                'facilities': 'Power outlets, Wi-Fi, Comfortable seating',
            },
            {
                'name': 'Engineering Group Lab',
                'location': 'Engineering Building, Room 203',
                'description': 'Lab space available for engineering group projects',
                'type': 'group',
                'capacity': 12,
                'current_occupancy': 4,
                'opening_time': datetime.time(9, 0),  # 9:00 AM
                'closing_time': datetime.time(21, 0),  # 9:00 PM
                'is_available': True,
                'facilities': 'Computers, Whiteboards, Wi-Fi, Technical equipment',
            },
        ]
        
        # Create study spaces
        for space_data in sample_spaces:
            StudySpace.objects.create(**space_data)
            
        self.stdout.write(self.style.SUCCESS(f'Successfully created {len(sample_spaces)} study spaces'))
