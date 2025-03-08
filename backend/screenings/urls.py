from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ScreeningViewSet

router = DefaultRouter()
router.register(r'screenings', ScreeningViewSet, basename='screening')

urlpatterns = [
    path('', include(router.urls)),
    path('screenings/by_movie/', ScreeningViewSet.as_view({'get': 'by_movie'}), name='screenings-by-movie'),
]