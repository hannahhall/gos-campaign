from django.db import models
from gos.models.npc_class import NPCClass

class Monster(models.Model):
    name = models.CharField(max_length=100)
    npc_class = models.ForeignKey(NPCClass, on_delete=models.PROTECT)
    current_hp = models.IntegerField()
