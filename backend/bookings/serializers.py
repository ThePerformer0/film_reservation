from rest_framework import serializers
from .models import Booking
from screenings.serializers import ScreeningSerializer
from screenings.models import Screening
from users.serializers import UserSerializer

class BookingSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)  # Affiche les détails de l'utilisateur
    screening = ScreeningSerializer(read_only=True)  # Affiche les détails de la séance
    screening_id = serializers.PrimaryKeyRelatedField(queryset=Screening.objects.all(), source='screening', write_only=True)

    class Meta:
        model = Booking
        fields = ['id', 'user', 'screening', 'screening_id', 'seats_booked']

    def validate(self, data):
        """
        Valide que le nombre de sièges réservés ne dépasse pas la capacité de la salle.
        """
        screening = data['screening']
        seats_booked = data.get('seats_booked')

        if seats_booked > screening.room_capacity:
            raise serializers.ValidationError("Le nombre de sièges réservés dépasse la capacité de la salle.")

        return data