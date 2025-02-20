from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class MovieAdmin(admin.ModelAdmin):
    list_display = ('user', 'screening')