from rest_framework import serializers

from gos.models.spell import Spell

class SpellSerializer(serializers.ModelSerializer):

    class Meta:
        model = Spell
        fields = [
            'id',
            'created',
            'name',
            'description',
            'level',
            'casting_time',
            'range',
            'components',
            'duration',
            'school',
            'attack_save',
            'damage_effect',
            'higher_levels'
        ]