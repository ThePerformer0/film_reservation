from django.contrib import admin
from .models import Screening

@admin.register(Screening)
class MovieAdmin(admin.ModelAdmin):
    list_display = ('movie', 'start_time', 'end_time', 'room_capacity')