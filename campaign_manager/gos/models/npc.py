from django.db import models
from enum import Enum
from gos.models.npc_class import NPCClass

class AlignmentType(Enum):  
    LG = "Lawful Good"
    NG = "Neutral Good"
    CG = "Chaotic Good"
    LN = "Lawful Neutral"
    NN = "Neutral"
    CN = "Chaotic Neutral"
    LE = "Lawful Evil"
    NE = "Neutral Evil"
    CE = "Chaotic Evil"

class NPC(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    race = models.CharField(max_length=20)
    alignment = models.CharField(
        max_length=5,
        choices=[(alignment, alignment.value) for alignment in AlignmentType]
    )
    personality_traits = models.TextField(blank=True, null=True)
    ideals = models.TextField(blank=True, null=True)
    bonds = models.TextField(blank=True, null=True)
    flaws = models.TextField(blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    secrets = models.TextField(blank=True, null=True)
    npc_class = models.ForeignKey(NPCClass, on_delete=models.PROTECT)
    current_hp = models.IntegerField()

    def __str__(self):
        return f'{self.name}: {self.race} {npc_class.name}'
