import { Recipe } from "../model/recipe";

export const isValidRecipe = (recipe: any): recipe is Recipe => {
    return (
      typeof recipe.id === 'number' &&
      typeof recipe.name === 'string' &&
      Array.isArray(recipe.parts) &&
      recipe.parts.every(
        (part: any) =>
          typeof part.partName === 'string' &&
          Array.isArray(part.ingredients) &&
          part.ingredients.every(
            (ingredient: any) =>
              typeof ingredient.name === 'string' && typeof ingredient.quantity === 'string'
          ) &&
          typeof part.preparation === 'string'
      )
    );
  };