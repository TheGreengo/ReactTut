from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the skoolback index.")

def card(request, card_id):
    return HttpResponse("Card: %s" % card_id)

def deck(request, deck_id):
    return HttpResponse("Deck: %s" % deck_id)

def student(request, student_id):
    return HttpResponse("Student: %s" % student_id)