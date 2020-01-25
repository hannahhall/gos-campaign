from gos.utils import MultiSerializerViewSet
from rest_framework import viewsets

from gos.models.npc import NPC
from gos.serializers.npc import NpcListSerializer, NpcDetailSerializer


class NPCViewSet(MultiSerializerViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = NPC.objects.all()
    serializers = {
        'list': NpcListSerializer,
        'default': NpcDetailSerializer
    }