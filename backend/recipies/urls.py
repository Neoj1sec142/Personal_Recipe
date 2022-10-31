from django.urls import path
from .views import *

urlpatterns = [
    path('', RecipieList.as_view()),
    path('<int:pk>', RecipieDetail.as_view()),
    path('ingredients/', IngredientList.as_view()),
    path('<int:post_pk>/ingredients/<int:pk>', IngredientDetail.as_view()),
    path('steps/', StepList.as_view()),
    path('<int:recipie_pk>/steps/<int:pk>', StepDetail.as_view()),
]