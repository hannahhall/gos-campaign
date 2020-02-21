from django.db import models

from gos.models.spell import Spell
from gos.models.npc import NPC

class SpellSlot(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    level = models.CharField(max_length=30)
    max = models.IntegerField(blank=True, null=True)
    used = models.IntegerField(blank=True, null=True)
    spells = models.ManyToManyField(Spell)
    npc = models.ForeignKey(NPC, related_name='spell_slots', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f'{self.level} level spell slot for {self.npc.name}'
