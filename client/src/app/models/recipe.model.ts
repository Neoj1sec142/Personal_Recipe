import { FoodStyle } from "./food-style.model";
import { Ingredient } from "./ingredient.model";
import { Instruction } from "./instruction.model";

export interface Recipe{
    id?: number;
    name: string;
    description?: string;
    instructions?: Instruction[];
    ingredients?: Ingredient[];
    style: FoodStyle;
    created?: Date;
    updated?: Date;
}