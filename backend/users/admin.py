from django.contrib import admin
from .models import User

@admin.register(User)
class MovieAdmin(admin.ModelAdmin):
    list_display = ('username', 'role')