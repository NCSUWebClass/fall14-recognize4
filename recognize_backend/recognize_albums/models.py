from django.db import models

from filer.fields.image import FilerImageField

# Create your models here.

class Album(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Image(models.Model):
    album = models.ForeignKey(Album)
    image = FilerImageField(null=False, blank=False)

    def __str__(self):
        return "Uploaded Image"
