from django.db import models

from gos.models.spell import Spell
from gos.models.npc import NPC

class SpellSlot(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    level = models.IntegerField()
    max = models.IntegerField()
    used = models.IntegerField()
    spells = models.ManyToManyField(Spell)
    npc = models.ForeignKey(NPC, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f'{npc.name} level {level} spell slot'
