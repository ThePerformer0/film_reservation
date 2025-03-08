from rest_framework import viewsets
from .models import Screening
from .serializers import ScreeningSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import action
from rest_framework.response import Response

class ScreeningViewSet(viewsets.ModelViewSet):
    queryset = Screening.objects.all()
    serializer_class = ScreeningSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    @action(detail=False, methods=['get'])
    def by_movie(self, request):
        movie_id = request.query_params.get('movie')
        if movie_id is not None:
            screenings = Screening.objects.filter(movie_id=movie_id)
            serializer = ScreeningSerializer(screenings, many=True)
            return Response(serializer.data)
        return Response({"error": "movie parameter is required"}, status=400)