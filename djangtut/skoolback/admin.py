from django.contrib import admin

# Register your models here.
from .models import Student, FlashDeck, FlashCard

admin.site.register(Student)
admin.site.register(FlashDeck)
admin.site.register(FlashCard)