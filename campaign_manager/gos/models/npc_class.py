from django.db import models
from gos.models.ability_score import AbilityScore
from gos.models.feature import Feature

class NPCClass(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    armor_class = models.IntegerField()
    max_hit_points = models.IntegerField()
    speed = models.CharField(max_length=30)
    str = models.ForeignKey(AbilityScore, related_name='str', on_delete=models.PROTECT)
    dex = models.ForeignKey(AbilityScore, related_name='dex', on_delete=models.PROTECT)
    con = models.ForeignKey(AbilityScore, related_name='con', on_delete=models.PROTECT)   
    int = models.ForeignKey(AbilityScore, related_name='int', on_delete=models.PROTECT)
    wis = models.ForeignKey(AbilityScore, related_name='wis', on_delete=models.PROTECT)
    cha = models.ForeignKey(AbilityScore, related_name='cha', on_delete=models.PROTECT)
    saving_throws = models.CharField(max_length=255, blank=True, null=True)
    damage_resistance = models.CharField(max_length=255, blank=True, null=True)
    damage_immunities = models.CharField(max_length=255, blank=True, null=True)
    condition_immunities = models.CharField(max_length=255, blank=True, null=True)
    senses = models.CharField(max_length=255, blank=True, null=True)
    languages = models.CharField(max_length=255, blank=True, null=True)
    challenge = models.IntegerField(blank=True, null=True)
    features = models.ManyToManyField(Feature, blank=True)

    def __str__(self):
        return self.name

