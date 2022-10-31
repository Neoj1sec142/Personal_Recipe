from rest_framework import generics, permissions
from .models import Recipie, Ingredient, Step
from .serializers import RecipieSerializer, IngredientSerializer, StepSerializer

class RecipieList(generics.ListCreateAPIView):
    queryset = Recipie.objects.all()
    serializer_class = RecipieSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Recipie
        fields = ('__all__')
        ordering = ('-posted_at')
        
class RecipieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipie.objects.all()
    serializer_class = RecipieSerializer


class IngredientList(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Ingredient
        fields = ('__all__')
        ordering = ('-posted_at')
        
class IngredientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class StepList(generics.ListCreateAPIView):
    queryset = Step.objects.all()
    serializer_class = StepSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Step
        fields = ('__all__')
        ordering = ('-posted_at')
        
class StepDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Step.objects.all()
    serializer_class = StepSerializer
