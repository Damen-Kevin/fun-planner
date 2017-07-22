from django.db import models
class Activity(models.Model): 
    title = models.CharField(max_length = 255)
    location = models.CharField(max_length = 255, blank=True)
    category = models.CharField(max_length = 255, blank=True)
    def __str__(self):
        return self.activity