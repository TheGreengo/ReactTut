from django.db import models

# So for this I'm thinking that we have:
# Flashcards (last=integer, id=string, front=string(1000), back=string(1000), starred=bool, deck_id=float)
# Flashcard decks (id=string, student_id=string)
# Lessons ()
# Course ()
# Assignments (id=string, weight=float, grade=float, student_id=string)
# Students (id=string, f_name=string(100), l_name=string(100))