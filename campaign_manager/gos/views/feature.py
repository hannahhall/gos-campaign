from rest_framework import viewsets

from gos.models.feature import Feature
from gos.serializers.feature import FeatureSerializer


class FeatureViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer