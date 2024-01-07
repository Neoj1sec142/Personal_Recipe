from django.contrib import admin
from .models import Ingredient, Instruction, FoodStyle, Recipe

admin.site.register(Instruction)
admin.site.register(Ingredient)
admin.site.register(FoodStyle)
admin.site.register(Recipe)
