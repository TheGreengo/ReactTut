from django.shortcuts import render
from django.http import HttpResponse
from .models import FlashCard


def index(request):
    return HttpResponse("Hello, world. You're at the skoolback index.")

def card(request, card_id):
    kyard = FlashCard.objects.get(id=card_id)
    return HttpResponse("Front: %s \nBack: %s" % (kyard.front, kyard.back))

def deck(request, deck_id):
    return HttpResponse("Deck: %s" % deck_id)

def student(request, student_id):
    return HttpResponse("Student: %s" % student_id)