from rest_framework import serializers

from gos.models.fight_member import FightMember
from gos.serializers.monster import MonsterDetailSerializer, MonsterListSerializer


class FightMemberSerializer(serializers.ModelSerializer):
    monster = MonsterDetailSerializer()

    class Meta:
        model = FightMember
        fields = ['id', 'monster', 'initiative_order']
