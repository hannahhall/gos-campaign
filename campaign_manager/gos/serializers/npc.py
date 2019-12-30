from gos.models.npc_class import NPCClass
from rest_framework import serializers

class NPCSerializer(serializers.ModelSerializer):
    class Meta:
        model = NPCClass
        fields = ['__all__']