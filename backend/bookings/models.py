from django.db import models
from users.models import User
from screenings.models import Screening

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    screening = models.ForeignKey(Screening, on_delete=models.CASCADE)
    seats_booked = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.user.username} - {self.screening.movie.title}"