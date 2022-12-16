from rest_framework import generics, permissions
from .models import Recipe, Ingredient, Step
from .serializers import RecipeSerializer, IngredientSerializer, StepSerializer


class RecipeList(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Recipe
        fields = ('__all__')
        lookup_field = 'pk'
        ordering = ('-date_created')
        
class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    
class StepListByRecipe(generics.ListCreateAPIView):
    serializer_class = StepSerializer
    model = serializer_class.Meta.model
    def get_queryset(self):
        recipe_id = self.kwargs['recipe_pk']
        queryset = self.model.objects.filter(recipe_id=recipe_id)
        return queryset
    
    class Meta:
        model = Step
        fields = ('__all__')
        lookup_field = 'recipe_pk'
        ordering = ('-date_created')
        
class StepDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Step.objects.all()
    serializer_class = StepSerializer
        
class IngredientListByRecipe(generics.ListCreateAPIView):
    serializer_class = IngredientSerializer
    model = serializer_class.Meta.model
    def get_queryset(self):
        recipe_id = self.kwargs['recipe_pk']
        queryset = self.model.objects.filter(recipe_id=recipe_id)
        return queryset
    
    class Meta:
        model = Ingredient
        fields = ('__all__')
        lookup_field = 'recipe_pk'
        ordering = ('-date_created')
        
class IngredientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer