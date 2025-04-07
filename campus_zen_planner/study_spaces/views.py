
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import StudySpace, SpaceCheckIn
from .serializers import StudySpaceSerializer, SpaceCheckInSerializer
from django.utils import timezone

class StudySpaceViewSet(viewsets.ModelViewSet):
    """API endpoint for study spaces"""
    queryset = StudySpace.objects.all()
    serializer_class = StudySpaceSerializer
    
    def get_permissions(self):
        """
        Allow anyone to list and retrieve, but require authentication for other actions
        """
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAuthenticated]
        return [permission() for permission in permission_classes]
    
    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def check_in(self, request, pk=None):
        """Check in to a study space"""
        study_space = self.get_object()
        
        # Check if already checked in
        existing_check_in = SpaceCheckIn.objects.filter(
            user=request.user,
            study_space=study_space,
            check_out_time__isnull=True
        ).first()
        
        if existing_check_in:
            return Response(
                {"error": "You are already checked in to this space"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Create check-in record
        check_in = SpaceCheckIn(user=request.user, study_space=study_space)
        check_in.save()
        
        # Update occupancy
        study_space.current_occupancy += 1
        study_space.save()
        
        return Response(
            {"message": f"Checked in to {study_space.name}"},
            status=status.HTTP_201_CREATED
        )
    
    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def check_out(self, request, pk=None):
        """Check out from a study space"""
        study_space = self.get_object()
        
        # Find active check-in
        check_in = SpaceCheckIn.objects.filter(
            user=request.user,
            study_space=study_space,
            check_out_time__isnull=True
        ).first()
        
        if not check_in:
            return Response(
                {"error": "No active check-in found for this space"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Update check-out time
        check_in.check_out_time = timezone.now()
        check_in.save()
        
        # Update occupancy
        study_space.current_occupancy = max(0, study_space.current_occupancy - 1)
        study_space.save()
        
        return Response(
            {"message": f"Checked out from {study_space.name}"},
            status=status.HTTP_200_OK
        )
