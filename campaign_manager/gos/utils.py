from django.core import serializers
from django.http import JsonResponse

from gos.serializers.user import UserSerializer
from rest_framework import viewsets


def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user).data
    }

class MultiSerializerViewSet(viewsets.ModelViewSet):
    serializers = { 
        'default': None,
    }
    def get_serializer_class(self):
            return self.serializers.get(self.action,
                        self.serializers['default'])