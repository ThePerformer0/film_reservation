# Generated by Django 4.2.17 on 2025-03-06 08:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0002_alter_movie_poster_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='duration',
            field=models.DurationField(default=datetime.timedelta(seconds=7200)),
        ),
        migrations.AddField(
            model_name='movie',
            name='release_date',
            field=models.DateField(default='2021-01-01'),
        ),
        migrations.AddField(
            model_name='movie',
            name='trailer_url',
            field=models.URLField(default='https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
        ),
    ]
