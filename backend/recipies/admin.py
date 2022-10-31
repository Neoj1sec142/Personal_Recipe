from django.contrib import admin
from .models import Recipie, Ingredient, Step

admin.site.register(Recipie)
admin.site.register(Ingredient)
admin.site.register(Step)
