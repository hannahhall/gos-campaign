from rest_framework import viewsets

from gos.models.spell import Spell
from gos.serializers.spell import SpellSerializer


class SpellViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Spell.objects.all()
    serializer_class = SpellSerializer
