from django.contrib import admin
from gos.models.spell import Spell
from gos.models.spell_slot import SpellSlot

# Register your models here.
admin.site.register(Spell)
admin.site.register(SpellSlot)