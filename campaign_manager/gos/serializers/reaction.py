from gos.models.reaction import Reaction
from rest_framework import serializers

class ReactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reaction
        fields = '__all__'