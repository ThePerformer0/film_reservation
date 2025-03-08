from django.db import models
from datetime import timedelta

class Movie(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    poster_image = models.URLField()
    trailer_url = models.URLField(default='https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    duration = models.DurationField(default=timedelta(hours=2))
    release_date = models.DateField(default='2021-01-01')
    genre = models.CharField(max_length=100)

    def __str__(self):
        return self.title