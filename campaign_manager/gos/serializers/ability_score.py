from gos.models.ability_score import AbilityScore
from rest_framework import serializers

class AbilityScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbilityScore
        fields = ['score', 'modifier']