
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudySpaceViewSet

router = DefaultRouter()
router.register(r'study-spaces', StudySpaceViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # Add a direct path for testing
    path('study-spaces-list/', StudySpaceViewSet.as_view({'get': 'list'}), name='study-spaces-list'),
]
