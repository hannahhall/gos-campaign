from rest_framework import viewsets

from gos.models.monster import Monster
from gos.serializers.monster import MonsterDetailSerializer, MonsterListSerializer
from gos.utils import MultiSerializerViewSet


class MonsterViewSet(MultiSerializerViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Monster.objects.all()
    serializers = {
        'list': MonsterListSerializer,
        'default': MonsterDetailSerializer
    }
