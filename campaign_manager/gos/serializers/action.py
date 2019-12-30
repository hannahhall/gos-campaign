from gos.models.action import Action
from rest_framework import serializers

class ActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Action
        fields = ['__all__']