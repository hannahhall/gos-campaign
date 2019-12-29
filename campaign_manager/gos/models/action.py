from django.db import models
from gos.models.npc_class import NPCClass

class Action(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    reach = models.CharField(max_length=20, blank=True, null=True)
    attack_bonus = models.IntegerField(default=0, blank=True, null=True)
    hit = models.CharField(max_length=20, blank=True, null=True)
    damage_type = models.CharField(max_length=50, blank=True, null=True)
    npc_class = models.ForeignKey(NPCClass, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name
