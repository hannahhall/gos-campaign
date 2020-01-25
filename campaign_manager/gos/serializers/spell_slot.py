from gos.models.spell import Spell
from gos.serializers.spell import SpellListSerializer
from rest_framework import serializers

from gos.models.spell_slot import SpellSlot

class SpellSlotSerializer(serializers.ModelSerializer):
    spells = SpellListSerializer(many=True)

    class Meta:
        model = SpellSlot
        fields = [
            'id',
            'created',
            'spells',
            'level',
            'max',
            'used',
        ]
    
    def create(self, validated_data):
        spells_data = validated_data.pop('spells')
        spell_slot = SpellSlot.objects.create(**validated_data)
        return spell_slot