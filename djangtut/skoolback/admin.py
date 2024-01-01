from django.contrib import admin

# Register your models here.
from .models import Student, FlashDecks, FlashCard

admin.site.register(Student)
admin.site.register(FlashDecks)
admin.site.register(FlashCard)