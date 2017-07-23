from django.db import models
class Activity(models.Model): 
    title = models.CharField(max_length = 255)
    location = models.CharField(max_length = 255, blank=True)
    category = models.CharField(max_length = 255)
    priority = models.CharField(max_length = 255, blank=True)
    notes = models.CharField(max_length = 255, blank=True)
    image = models.ImageField(upload_to='images/', blank=True)
    user = models.CharField(max_length = 255, blank=True)
    def __str__(self):
        return self.activity
