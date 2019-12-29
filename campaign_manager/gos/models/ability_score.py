from django.db import models

class AbilityScore(models.Model):
    score = models.IntegerField(null=True)
    modifier = models.IntegerField(null=True)

    def __str__(self):
        return f'{self.score} (+{self.modifier})'