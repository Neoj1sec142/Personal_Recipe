import { Recipe } from "./recipe";

export interface Ingredient {
    ingredientId: number;
    name: string;
    quantity: number;
    unit: string;
    recipeId: number;
    recipe: Recipe;
  }