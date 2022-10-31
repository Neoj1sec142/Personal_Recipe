from rest_framework import serializers
from .models import Recipie, Ingredient, Step
from django.contrib.auth.models import User

class RecipieSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user',
    )
    class Meta:
        model = Recipie
        fields = '__all__'

    
class IngredientSerializer(serializers.ModelSerializer):
    recipie_id = serializers.PrimaryKeyRelatedField(
        queryset=Recipie.objects.all(),
        source='recipie',
    )
    class Meta:
        model = Ingredient
        fields = '__all__'

        
class StepSerializer(serializers.ModelSerializer):
    recipie_id = serializers.PrimaryKeyRelatedField(
        queryset=Recipie.objects.all(),
        source='recipie',
    )
    class Meta:
        model = Step
        fields = '__all__'
