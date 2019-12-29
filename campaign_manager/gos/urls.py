from django.urls import path, include
from rest_framework.routers import DefaultRouter
from gos.views.spell import SpellViewSet
from gos.views.spell_slot import SpellSlotViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'spells', SpellViewSet)
router.register(r'spell-slots', SpellSlotViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]