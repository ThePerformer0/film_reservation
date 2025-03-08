from django.db import models
from movies.models import Movie
from datetime import timedelta

class Screening(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    duration = models.DurationField(default=timedelta(hours=2))
    room_capacity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.movie.title} - {self.start_time}"