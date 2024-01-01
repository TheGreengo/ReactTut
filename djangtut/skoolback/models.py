from django.db import models

# So for this I'm thinking that we have:

# Students (f_name=string(100), l_name=string(100))
class Student(models.Model):
    f_name = models.CharField(max_length = 100)
    l_name = models.CharField(max_length = 100)

    def __str__(self):
        return self.f_name + " " + self.l_name

# Flashcard decks (student_id=ForeignKey)
class FlashDeck(models.Model):
    name = models.CharField(max_length = 100)
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

# Flashcards (last=integer, front=string(1000), back=string(1000), starred=bool, deck_id=ForeignKey)
class FlashCard(models.Model):
    front = models.CharField(max_length=1000)
    back = models.CharField(max_length=1000)
    last = models.DateTimeField()
    starred = models.BooleanField(default=False)
    deck_id = models.ForeignKey(FlashDeck, on_delete=models.CASCADE)

    def __str__(self):
        return self.front

# Lessons ()
# Course ()
# Assignments (weight=float, grade=float, student_id=string)
# Students (f_name=string(100), l_name=string(100))