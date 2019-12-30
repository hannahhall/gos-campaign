from rest_framework import viewsets

from gos.models.blog import Blog
from gos.serializers.blog import BlogSerializer


class BlogViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
