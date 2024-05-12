import { Chef } from "./chef.model";
import { Ingredient } from "./ingredient.model";
import { Instruction } from "./instruction.model";


export interface Recipe{
    id?: number;
    title: string;
    description?: string;
    instructions?: Instruction[];
    ingredients?: Ingredient[];
    chefId?: number;
    chef?: Chef;
    dateAdded: string;
    lastModified: string;
}

export interface QuickRecipe{
    title: string;
    description: string;
    instructions?: Instruction[];
    ingredients?: Ingredient[];
    chefId?: number;
    chefName?: string;
}