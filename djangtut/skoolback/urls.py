from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("thing/", views.thing, name="thing"),
    path("card/<int:card_id>/", views.card, name="card"),
    path("deck/<int:deck_id>/", views.deck, name="deck"),
    path("student/<int:student_id>/", views.student, name="student"),
]