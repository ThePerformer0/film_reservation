from django.db import models
from movies.models import Movie

class Screening(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    room_capacity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.movie.title} - {self.start_time}"