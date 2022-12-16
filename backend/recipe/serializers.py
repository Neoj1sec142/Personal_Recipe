from rest_framework import serializers
from .models import Recipe, Ingredient, Step


class RecipeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Recipe
        fields = '__all__'
        extra_fields = ('ingredients', 'steps')
        ordering = ('-date_created')
        
class IngredientSerializer(serializers.ModelSerializer):
    
    recipe = serializers.PrimaryKeyRelatedField(
        queryset=Recipe.objects.all(),
    )
    class Meta:
        model = Ingredient
        fields = '__all__'
        read_only_fields = ('recipe',)
        ordering = ('date_created')
        
class StepSerializer(serializers.ModelSerializer):
    
    recipe = serializers.PrimaryKeyRelatedField(
        queryset=Recipe.objects.all(),
    )
    class Meta:
        model = Step
        fields = '__all__'
        read_only_fields = ('recipe',)
        ordering = ('date_created')