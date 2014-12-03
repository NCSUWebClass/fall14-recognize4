from django.conf import settings
from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.contrib import admin

from recognize import views

admin.autodiscover()

urlpatterns = patterns("",
    url(r"^json/albums/", include("recognize_albums.urls")),
    url(r"^admin/", include(admin.site.urls)),
    url(r"^game/", views.game, name="game"),
    url(r"^$", views.index, name="index"),
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
