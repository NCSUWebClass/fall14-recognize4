from django.conf.urls import patterns, url

from recognize_albums import views

urlpatterns = patterns("",
    url(r"^$", views.all_albums, name="all_albums")
)
