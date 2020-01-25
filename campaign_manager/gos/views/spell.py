from rest_framework import viewsets

from gos.models.spell import Spell
from gos.serializers.spell import SpellListSerializer, SpellDetailSerializer
from gos.utils import MultiSerializerViewSet



class SpellViewSet(MultiSerializerViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Spell.objects.all()
    serializers = {
        'list': SpellListSerializer,
        'default': SpellDetailSerializer
    }
