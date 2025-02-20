from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    poster_image = models.URLField()
    genre = models.CharField(max_length=100)

    def __str__(self):
        return self.title