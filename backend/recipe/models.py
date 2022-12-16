from django.db import models

class Recipe(models.Model):
    class MealType(models.TextChoices):
        BREAKFAST = 'Breakfast'
        LUNCH = 'Lunch'
        DINNER = 'Dinner'
        SNACK = 'Snack'
        DRINK = 'Drink'
        ALCOHOL = 'Alcohol'
    title = models.CharField(max_length=100, null=True)
    description = models.TextField(default='')
    oven_preheat = models.CharField(max_length=150, default='')
    meal_type = models.CharField(max_length=50, choices=MealType.choices, default=MealType.DINNER)
    time_cook = models.IntegerField(default=0)
    serves = models.IntegerField(default=2)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.title
    
class Ingredient(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, default='')
    description = models.TextField(default='')
    amount = models.CharField(max_length=150, default='')
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    class Meta:
        ordering = ('date_created',)
    def __str__(self):
        return self.name
    
class Step(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    label = models.CharField(max_length=100, default='')
    description = models.TextField(default='')
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    class Meta:
        ordering = ('date_created',)
    def __str__(self):
        return self.label
