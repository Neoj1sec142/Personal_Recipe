from .serializers import *
from django.urls import path
from .views import *


urlpatterns = [
    path('', RecipeList.as_view(), name='recipe_list'),
    path('<int:pk>/', RecipeDetail.as_view(), name='recipe_detail'),
    # path('steps/', AllStepList.as_view(), name='all_step_list'),
    path('<int:recipe_pk>/steps/', StepListByRecipe.as_view(), name='step_list_by_recipe'),
    path('steps/<int:pk>/', StepDetail.as_view(), name='step_detail'),
    path('<int:recipe_pk>/ingredients/', IngredientListByRecipe.as_view(), name='ingredient_list_by_recipe'),
    path('ingredients/<int:pk>/', IngredientDetail.as_view(), name='ingredient_detail'),
    
]