from gos.models.npc import NPC
from gos.serializers.npc_class import NPCClassSerializer
from gos.serializers.spell_slot import SpellSlotSerializer
from rest_framework import serializers

class NpcDetailSerializer(serializers.ModelSerializer):
    spell_slots = SpellSlotSerializer(many=True)
    npc_class = NPCClassSerializer()

    class Meta:
        model = NPC
        fields = [
            'id',
            'name',
            'bio',
            'race',
            'alignment',
            'personality_traits',
            'ideals',
            'bonds',
            'flaws',
            'notes',
            'secrets',
            'npc_class',
            'current_hp',
            'spell_slots'
        ]

class NpcListSerializer(serializers.ModelSerializer):
    class Meta:
        model = NPC
        fields = ['id', 'name']
