from rest_framework import serializers

from gos.models.spell import Spell

class SpellDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Spell
        fields = '__all__'

class SpellListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spell
        fields = ['id', 'name']