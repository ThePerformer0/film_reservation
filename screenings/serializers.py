from rest_framework import serializers
from .models import Screening
from movies.serializers import MovieSerializer

class ScreeningSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True)

    class Meta:
        model = Screening
        fields = ['id', 'movie', 'start_time', 'end_time', 'room_capacity']