from django.db import models

class Spell(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, default='')
    description = models.TextField()
    level = models.IntegerField()
    casting_time = models.CharField(max_length=20)
    range = models.CharField(max_length=20)
    components = models.CharField(max_length=20, blank=True)
    duration = models.CharField(max_length=30)
    school = models.CharField(max_length=50)
    attack_save = models.CharField(max_length=100)
    damage_effect = models.CharField(max_length=100)
    higher_levels = models.CharField(max_length=255, blank=True)
    
    class Meta:
        ordering = ['name']