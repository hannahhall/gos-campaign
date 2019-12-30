from django.db import models

class AbilityScore(models.Model):
    score = models.IntegerField(null=True)
    modifier = models.IntegerField(null=True)

    def __str__(self):
        positive = ''
        if self.modifier > 0:
            positive = '+'

        return f'{self.score} ({positive}{self.modifier})'

    class Meta:
        ordering =['score'] 