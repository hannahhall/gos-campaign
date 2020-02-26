from django.db import models
from gos.models.fight import Fight
from gos.models.monster import Monster

class FightMember(models.Model):
    monster = models.ForeignKey(Monster, on_delete=models.CASCADE)
    fight = models.ForeignKey(Fight, on_delete=models.CASCADE)
    initiative_order = models.IntegerField(null=True, blank=True)
