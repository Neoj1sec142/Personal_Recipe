from django.db import models

class Ingredient(models.Model):
    name = models.TextField()
    description = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return self.name

class Instruction(models.Model):
    step = models.TextField()
    def __str__(self):
        return self.step

class FoodStyle(models.Model):
    name = models.CharField(max_length=75)
    description = models.TextField(null=True, blank=True)
    def __str__(self):
        return self.name
    
class Recipe(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField(null=True, blank=True)
    instuctions = models.ManyToManyField(Instruction, null=True, blank=True, related_name='recipe_instructions')
    ingredients = models.ManyToManyField(Ingredient, null=True, blank=True, related_name='recipe_ingredients')
    style = models.ForeignKey(FoodStyle, on_delete=models.CASCADE)
    created = models.DateField(auto_now=True)
    updated = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.name
