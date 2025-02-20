from rest_framework import viewsets
from .models import Booking
from .serializers import BookingSerializer
from rest_framework.permissions import IsAuthenticated

class BookingViewSet(viewsets.ModelViewSet):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]  # Seuls les utilisateurs authentifiés peuvent réserver

    def get_queryset(self):
        # Retourne uniquement les réservations de l'utilisateur connecté
        return Booking.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Associe l'utilisateur connecté à la réservation
        serializer.save(user=self.request.user)