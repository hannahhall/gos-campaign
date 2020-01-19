from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    description = models.TextField()
    type = models.CharField(max_length=30, default="character")

    def __str__(self):
        return self.title