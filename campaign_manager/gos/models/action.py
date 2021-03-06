from django.db import models
from gos.models.npc_class import NPCClass

class Action(models.Model):
    name = models.CharField(max_length=255)
    attack_type = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    npc_class = models.ForeignKey(NPCClass, related_name='actions', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name
