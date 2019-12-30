from rest_framework import serializers

from gos.models.npc_class import NPCClass
from gos.serializers.feature import FeatureSerializer


class NPCClassSerializer(serializers.ModelSerializer):
    features = FeatureSerializer(many=True)
    class Meta:
        model = NPCClass
        fields = ['__all__', 'features']

    def create(self, validated_data):
        features_data = validated_data.pop('spells')
        npc_class = NPCClass.objects.create(**validated_data)
        return npc_class
