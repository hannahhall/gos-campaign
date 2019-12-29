from rest_framework import viewsets

from gos.models.spell_slot import SpellSlot
from gos.serializers.spell_slot import SpellSlotSerializer


class SpellSlotViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = SpellSlot.objects.all()
    serializer_class = SpellSlotSerializer