from django.db import models
from gos.models.monster import Monster

class Fight(models.Model):
    name = models.CharField(max_length=255)
    challenge_rating = models.IntegerField()
