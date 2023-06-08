from rest_framework import generics
from .models import Ingredient, Instruction, Recipe
from .serializers import IngredientSerializer, InstructionSerializer, RecipeSerializer

class IngredientList(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class IngredientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class InstructionList(generics.ListCreateAPIView):
    queryset = Instruction.objects.all()
    serializer_class = InstructionSerializer

class InstructionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Instruction.objects.all()
    serializer_class = InstructionSerializer

class RecipeList(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
