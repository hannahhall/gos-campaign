from django.urls import path, include
from rest_framework.routers import DefaultRouter
from gos.views.spell import SpellViewSet
from gos.views.spell_slot import SpellSlotViewSet
from gos.views.ability_score import AbilityScoreViewSet
from gos.views.action import ActionViewSet
from gos.views.feature import FeatureViewSet
from gos.views.npc import NPCViewSet
from gos.views.npc_class import NPCClassViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'spells', SpellViewSet)
router.register(r'spell-slots', SpellSlotViewSet)
router.register(r'ability-score', AbilityScoreViewSet)
router.register(r'actions', ActionViewSet)
router.register(r'feature', FeatureViewSet)
router.register(r'npc-class', NPCClassViewSet)
router.register(r'npc', NPCViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]