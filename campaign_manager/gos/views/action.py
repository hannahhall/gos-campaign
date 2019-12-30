from rest_framework import viewsets

from gos.models.action import Action
from gos.serializers.action import ActionSerializer


class ActionViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Action.objects.all()
    serializer_class = ActionSerializer