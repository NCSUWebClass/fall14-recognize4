from django.shortcuts import render

def index(request):
    return render(request, "game/index.html")

def game(request):
    return render(request, "game/recog.html")
