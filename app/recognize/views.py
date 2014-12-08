from django.shortcuts import render

def index(request):
    return render(request, "game/home.html")

def game(request):
    return render(request, "game/recog.html")

def test(request):
    return render(request, "game/test.html")
