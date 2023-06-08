from rest_framework import serializers
from .models import Ingredient, Instruction, Recipe

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)
    instructions = InstructionSerializer(many=True, read_only=True)

    class Meta:
        model = Recipe
        fields = '__all__'
