from rest_framework import serializers
from .models import Booking
from screenings.serializers import ScreeningSerializer
from users.serializers import UserSerializer

class BookingSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    screening = ScreeningSerializer(read_only=True)

    class Meta:
        model = Booking
        fields = ['id', 'user', 'screening', 'seats_booked']