from rest_framework import serializers

from gos.models.npc_class import NPCClass
from gos.serializers.feature import FeatureSerializer


class NPCClassSerializer(serializers.ModelSerializer):
    features = FeatureSerializer(many=True)
    class Meta:
        model = NPCClass
        fields = [
            'id',
            'name',
            'description',
            'armor_class',
            'max_hit_points',
            'speed',
            'str',
            'dex',
            'con',
            'wis',
            'cha',
            'saving_throws',
            'damage_resistance',
            'damage_immunities',
            'condition_immunities',
            'senses',
            'languages',
            'challenge',
            'features',
            'actions'
        ]

    def create(self, validated_data):
        features_data = validated_data.pop('spells')
        npc_class = NPCClass.objects.create(**validated_data)
        return npc_class
