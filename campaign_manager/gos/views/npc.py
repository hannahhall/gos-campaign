from rest_framework import viewsets

from gos.models.npc import NPC
from gos.serializers.npc import NPCSerializer


class NPCViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = NPC.objects.all()
    serializer_class = NPCSerializer