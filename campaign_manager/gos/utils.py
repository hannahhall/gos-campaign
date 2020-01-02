from django.core import serializers
from django.http import JsonResponse

from gos.serializers.user import UserSerializer


def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user).data
    }
