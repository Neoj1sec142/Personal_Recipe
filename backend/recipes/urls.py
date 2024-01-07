from django.urls import path
from .views import (IngredientList, IngredientDetail, InstructionList, InstructionDetail,
                    FoodStyleList, FoodStyleDetail, RecipeList, RecipeDetail)

urlpatterns = [
    path('ingredients/', IngredientList.as_view(), name='ingredient-list'),
    path('ingredients/<int:pk>/', IngredientDetail.as_view(), name='ingredient-detail'),
    path('instructions/', InstructionList.as_view(), name='instruction-list'),
    path('instructions/<int:pk>/', InstructionDetail.as_view(), name='instruction-detail'),
    path('foodstyles/', FoodStyleList.as_view(), name='foodstyle-list'),
    path('foodstyles/<int:pk>/', FoodStyleDetail.as_view(), name='foodstyle-detail'),
    path('recipes/', RecipeList.as_view(), name='recipe-list'),
    path('recipes/<int:pk>/', RecipeDetail.as_view(), name='recipe-detail'),
]