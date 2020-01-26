from gos.serializers.action import ActionSerializer
from rest_framework import serializers

from gos.models.npc_class import NPCClass
from gos.serializers.feature import FeatureSerializer
from gos.serializers.reaction import ReactionSerializer


class NPCClassSerializer(serializers.ModelSerializer):
    features = FeatureSerializer(many=True)
    str = serializers.StringRelatedField()
    dex = serializers.StringRelatedField()
    con = serializers.StringRelatedField()
    wis = serializers.StringRelatedField()
    cha = serializers.StringRelatedField()
    int = serializers.StringRelatedField()
    actions = ActionSerializer(many=True)
    reactions = ReactionSerializer(many=True)

    class Meta:
        model = NPCClass
        fields = [
            'id',
            'name',
            'description',
            'short_description',
            'skills',
            'armor_class',
            'max_hit_points',
            'speed',
            'str',
            'dex',
            'con',
            'wis',
            'cha',
            'int',
            'saving_throws',
            'damage_resistance',
            'damage_immunities',
            'condition_immunities',
            'senses',
            'languages',
            'challenge',
            'features',
            'actions',
            'reactions',
        ]

    def create(self, validated_data):
        features_data = validated_data.pop('spells')
        npc_class = NPCClass.objects.create(**validated_data)
        return npc_class
