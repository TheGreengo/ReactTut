from rest_framework import serializers
from .models import FlashCard, FlashDeck, Student

class FlashCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashCard
        fields = ('id', 'front', 'back', 'last', 'starred', 'deck_id')

class FlashDeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashDeck
        fields = ('id', 'name', 'student_id')

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'f_name', 'l_name')