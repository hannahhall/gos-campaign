from rest_framework import viewsets

from gos.models.npc_class import NPCClass
from gos.serializers.npc_class import NPCClassSerializer


class NPCClassViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = NPCClass.objects.all()
    serializer_class = NPCClassSerializer