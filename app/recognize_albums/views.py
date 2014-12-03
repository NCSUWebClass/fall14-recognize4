import json

from django.http import HttpResponse
from django.shortcuts import render

from recognize_albums.models import Album, Image

def all_albums(request):
    albums = []

    for album_entry in Album.objects.all():
        images = []

        for image_entry in Image.objects.filter(album__title=album_entry.title):
            images.append(image_entry.image.url)

        albums.append({
            "title": album_entry.title,
            "images": images
        })

    return HttpResponse(json.dumps({"albums": albums}, indent=4), content_type="application/json")
