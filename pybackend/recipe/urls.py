# urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('', RecipeList.as_view(), name='recipe-list'),
    path('<int:pk>/', RecipeDetail.as_view(), name='recipe-detail'),
    path('ingredients/', IngredientList.as_view(), name='ingredient-list'),
    path('ingredients/<int:pk>/', IngredientDetail.as_view(), name='ingredient-detail'),
    path('instructions/', InstructionList.as_view(), name='instruction-list'),
    path('instructions/<int:pk>/', InstructionDetail.as_view(), name='instruction-detail'),
]