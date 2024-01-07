from rest_framework import generics
from .models import Ingredient, Instruction, FoodStyle, Recipe
from .serializers import IngredientSerializer, InstructionSerializer, FoodStyleSerializer, RecipeSerializer

# Ingredient Views
class IngredientList(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class IngredientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

# Instruction Views
class InstructionList(generics.ListCreateAPIView):
    queryset = Instruction.objects.all()
    serializer_class = InstructionSerializer

class InstructionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Instruction.objects.all()
    serializer_class = InstructionSerializer

# FoodStyle Views
class FoodStyleList(generics.ListCreateAPIView):
    queryset = FoodStyle.objects.all()
    serializer_class = FoodStyleSerializer

class FoodStyleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FoodStyle.objects.all()
    serializer_class = FoodStyleSerializer

# Recipe Views
class RecipeList(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    