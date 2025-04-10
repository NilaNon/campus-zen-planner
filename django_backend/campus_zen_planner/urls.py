
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/', include('study_spaces.urls')),
    path('api/', include('study_groups.urls')),
    path('api/', include('resources.urls')),
    path('api/', include('planner.urls')),
    # Add wireframe app URL patterns
    path('wireframe/', include('wireframe.urls')),
    # Add a redirect from root URL to wireframe homepage
    path('', RedirectView.as_view(url='/wireframe/', permanent=False)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
