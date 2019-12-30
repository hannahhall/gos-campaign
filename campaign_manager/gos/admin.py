from django.contrib import admin
from gos.models.npc_class import NPCClass
from gos.models.spell import Spell
from gos.models.spell_slot import SpellSlot
from gos.models.ability_score import AbilityScore
from gos.models.action import Action
from gos.models.feature import Feature
from gos.models.npc import NPC

# Register your models here.
admin.site.register(Spell)
admin.site.register(SpellSlot)
admin.site.register(AbilityScore)
admin.site.register(Action)
admin.site.register(Feature)
admin.site.register(NPCClass)
admin.site.register(NPC)
