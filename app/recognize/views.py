from django.shortcuts import render
from recognize_albums.models import Album, Image

def index(request):
    albums = []

    for album_entry in Album.objects.all():
        images = []

        for image_entry in Image.objects.filter(album__title=album_entry.title):
            images.append(image_entry.image.url)

        albums.append({
            "title": album_entry.title,
            "images": images
        })

    return render(request, "game/home.html", {"albums": albums})

def game(request):
    return render(request, "game/recog.html")

def test(request):
    return render(request, "game/test.html")
