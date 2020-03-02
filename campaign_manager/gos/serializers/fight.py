from rest_framework import serializers

from gos.models.fight import Fight
from gos.models.monster import Monster
from gos.serializers.fight_member import FightMemberSerializer


class FightSerializer(serializers.ModelSerializer):
    members = FightMemberSerializer(many=True)

    class Meta:
        model = Fight
        fields = [
            'id',
            'name',
            'members',
            'challenge_rating',
        ]
    
    def create(self, validated_data):
        members_data = validated_data.pop('members')
        fight = Fight.objects.create(**validated_data)
        for member in members_data:
            monster = Monster.objects.get(name=member['monster']['name'])
            fight.members.add(
                monster,
                through_defaults={'initiative_order': member['initiative_order']}
            )
        return fight
