from rest_framework import serializers
from .models import Screening
from movies.serializers import MovieSerializer
from movies.models import Movie

class ScreeningSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True)
    movie_id = serializers.PrimaryKeyRelatedField(queryset=Movie.objects.all(), source='movie', write_only=True)

    class Meta:
        model = Screening
        fields = ['id', 'movie', 'movie_id', 'start_time', 'end_time', 'room_capacity']