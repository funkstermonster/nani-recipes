import { Ingredient } from "./ingredient";

export interface Part {
    partName: string;
    ingredients: Ingredient[];
    preparation: string;
    otherPreparation: string;
}