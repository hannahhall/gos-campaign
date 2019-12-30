from rest_framework import viewsets

from gos.models.ability_score import AbilityScore
from gos.serializers.ability_score import AbilityScoreSerializer


class AbilityScoreViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = AbilityScore.objects.all()
    serializer_class = AbilityScoreSerializer
