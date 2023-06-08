from django.db import models
    
class Ingredient(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(null=True, blank=True)
    def __str__(self):
        return self.title
    
class Instruction(models.Model):
    content = models.TextField()
    def __str__(self):
        return self.content[:20]
    
class Recipe(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(default="", null=True, blank=True)
    preparation_time = models.CharField(max_length=10)
    ingredients = models.ManyToManyField(Ingredient, null=True, blank=True)
    instructions = models.ManyToManyField(Instruction, null=True, blank=True)
    def __str__(self):
        return self.title
    