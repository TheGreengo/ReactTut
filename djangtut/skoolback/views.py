from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import FlashCard, FlashDeck, Student
from .serializers import FlashCardSerializer, FlashDeckSerializer, StudentSerializer

'''
What all do we need for requests:
 - get card
 - set card starred
 - get deck
 - update card
 - update deck
 - add card 
 - add deck
 - login
 - get grades
'''

def index(request):
    return HttpResponse("Hello, world. You're at the skoolback index.")

def card(request, card_id):
    kyard = FlashCard.objects.get(id=card_id)
    ser = FlashCardSerializer(kyard, many=False)
    return JsonResponse(ser.data)

def deck(request, deck_id):
    deck = FlashDeck.objects.get(id=deck_id)
    ser = FlashDeckSerializer(deck, many=False)
    return JsonResponse(ser.data)

def student(request, student_id):
    student = Student.objects.get(id=student_id)
    ser = StudentSerializer(student, many=False)
    return JsonResponse(ser.data)