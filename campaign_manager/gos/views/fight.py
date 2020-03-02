from rest_framework import viewsets

from gos.models.fight import Fight
from gos.serializers.fight import FightSerializer


class FightViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Fight.objects.all()
    serializer_class = FightSerializer
