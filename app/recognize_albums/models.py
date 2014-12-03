from django.db import models

class Album(models.Model):
    title = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.title

class Image(models.Model):
    album = models.ForeignKey(Album)
    image = models.ImageField(upload_to="images")

    def thumbnail(self):
        return u"<img src=\"%s\" style=\"max-height: 100px;\" />" % self.image.url

    thumbnail.short_description = "Thumbnail"
    thumbnail.allow_tags = True

    def __str__(self):
        return "Uploaded Image (%s)" % self.image.url
