from django.urls import path, include
from rest_framework.routers import DefaultRouter
from gos.views.spell import SpellViewSet
from gos.views.spell_slot import SpellSlotViewSet
from gos.views.ability_score import AbilityScoreViewSet
from gos.views.action import ActionViewSet
from gos.views.feature import FeatureViewSet
from gos.views.npc import NPCViewSet
from gos.views.npc_class import NPCClassViewSet
from gos.views.blog import BlogViewSet
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'spells', SpellViewSet)
router.register(r'spell-slots', SpellSlotViewSet)
router.register(r'ability-score', AbilityScoreViewSet)
router.register(r'actions', ActionViewSet)
router.register(r'features', FeatureViewSet)
router.register(r'npc-classes', NPCClassViewSet)
router.register(r'npcs', NPCViewSet)
router.register(r'blogs', BlogViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
    path(r'api-token-auth/', obtain_jwt_token),
    path(r'api-token-refresh/', refresh_jwt_token),
]