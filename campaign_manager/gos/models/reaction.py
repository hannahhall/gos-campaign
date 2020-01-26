from django.db import models
from gos.models.npc_class import NPCClass

class Reaction(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    npc_class = models.ForeignKey(NPCClass, related_name='reactions', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name
