from gos.models.reaction import Reaction
from rest_framework import viewsets

from gos.serializers.action import ActionSerializer
from campaign_manager.gos.serializers.reaction import ReactionSerializer


class ActionViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Reaction.objects.all()
    serializer_class = ReactionSerializer