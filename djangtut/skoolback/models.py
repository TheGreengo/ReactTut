from django.db import models

# So for this I'm thinking that we have:

# Students (f_name=string(100), l_name=string(100))
class Student(models.Model):
    f_name = models.CharField(max_length = 100)
    l_name = models.CharField(max_length = 100)

# Flashcard decks (student_id=ForeignKey)
class FlashDecks(models.Model):
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)

# Flashcards (last=integer, front=string(1000), back=string(1000), starred=bool, deck_id=ForeignKey)
class FlashCard(models.Model):
    front = models.CharField(max_length=1000)
    back = models.CharField(max_length=1000)
    last = models.DateTimeField()
    starred = models.BooleanField(default=False)
    deck_id = models.ForeignKey(FlashDecks, on_delete=models.CASCADE)

# Lessons ()
# Course ()
# Assignments (weight=float, grade=float, student_id=string)
# Students (f_name=string(100), l_name=string(100))