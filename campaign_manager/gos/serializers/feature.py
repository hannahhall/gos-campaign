from gos.models.feature import Feature
from rest_framework import serializers

class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = '__all__'