from gos.models.spell_slot import NPC
from gos.serializers.spell_slot import SpellSlotSerializer
from rest_framework import serializers

class NPCSerializer(serializers.ModelSerializer):
    spell_slots = SpellSlotSerializer(many=True)
    class Meta:
        model = NPC
        fields = ['__all__', 'spell_slots']