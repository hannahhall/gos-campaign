from rest_framework import serializers

from gos.models.monster import Monster
from gos.serializers.npc_class import NPCClassSerializer
from gos.serializers.spell_slot import SpellSlotSerializer


class MonsterDetailSerializer(serializers.ModelSerializer):
    spell_slots = SpellSlotSerializer(many=True, required=False)
    npc_class = NPCClassSerializer(required=False)

    class Meta:
        model = Monster
        fields = [
            'id',
            'name',
            'npc_class',
            'current_hp',
            'spell_slots'
        ]

class MonsterListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monster
        fields = ['id', 'name', 'current_hp']
