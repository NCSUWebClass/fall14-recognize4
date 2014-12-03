from django.contrib import admin

from recognize_albums.models import Album, Image

class ImageInline(admin.TabularInline):
    model = Image
    extra = 1
    fields = ['thumbnail','image',]
    readonly_fields = ['thumbnail',]

class AlbumAdmin(admin.ModelAdmin):
    inlines = [ImageInline]

admin.site.register(Album, AlbumAdmin)
