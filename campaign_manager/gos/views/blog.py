from gos.models.blog import Blog
from gos.serializers.blog import BlogListSerializer, BlogDetailSerializer
from gos.utils import MultiSerializerViewSet


class BlogViewSet(MultiSerializerViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Blog.objects.all()
    serializers = {
        'list': BlogListSerializer,
        'default': BlogDetailSerializer
        # etc.
    }
