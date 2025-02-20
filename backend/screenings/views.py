from rest_framework import viewsets
from .models import Screening
from .serializers import ScreeningSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class ScreeningViewSet(viewsets.ModelViewSet):
    queryset = Screening.objects.all()
    serializer_class = ScreeningSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]