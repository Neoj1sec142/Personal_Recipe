from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now
# Create your models here.
class Recipie(models.Model):
    class MealType(models.TextChoices):
        BREAKFAST = 'BREAKFAST'
        LUNCH = 'LUNCH'
        DINNER = 'DINNER'
        SNACK = 'SNACK'
        DRINK = 'DRINK'
    title = models.CharField(max_length=100)
    from_kitch_of = models.CharField(max_length=50, blank=True, null=True)
    prep_time = models.CharField(max_length=50, blank=True, null=True)
    cook_time = models.CharField(max_length=50)
    meal_type = models.CharField(max_length=50, choices=MealType.choices, default=MealType.LUNCH)
    description = models.TextField()
    chef = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    posted_at = models.DateTimeField(default=now, blank=True)
    def __str__(self):
        return self.title
    
class Ingredient(models.Model):
    recipie = models.ForeignKey(Recipie, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    amount = models.CharField(max_length=100, null=True, blank=True)
    posted_at = models.DateTimeField(default=now, blank=True)
    def __str__(self):
        return self.title
    
class Step(models.Model):
    recipie = models.ForeignKey(Recipie, on_delete=models.CASCADE)
    step_number = models.IntegerField()
    ingredients_used = models.TextField()
    directions = models.TextField()
    posted_at = models.DateTimeField(default=now, blank=True)
    def __str__(self):
        return self.step_number
    