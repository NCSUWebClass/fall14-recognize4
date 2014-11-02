from django.contrib import admin

from recognize_albums.models import Album, Image

class ImageInline(admin.StackedInline):
    model = Image
    extra = 1

class AlbumAdmin(admin.ModelAdmin):
    inlines = [ImageInline]

admin.site.register(Album, AlbumAdmin)
