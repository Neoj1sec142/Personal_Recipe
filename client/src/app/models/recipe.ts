import { Ingredient } from "./ingredient";

export interface Recipe {
    recipeId?: number;
    title: string;
    description: string;
    instructions: string;
    preparationTime: string; // Change to appropriate type for TimeSpan, e.g., string or number
    ingredients?: Ingredient[];
  }