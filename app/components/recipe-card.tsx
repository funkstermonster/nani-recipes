"use client"

import { Card, CardFooter } from "@nextui-org/card"
import { RecipeData } from "../model/recipeData"
import recipeData from "../data/recipes.json"
import { Recipe } from "../model/recipe"
import { isValidRecipe } from "../utils/recipeTypeGuards"
import {Image} from "@nextui-org/image";
import RecipeModal from "./recipe-modal"
import { useModal } from "../stores/modal-store"


export default function recipeCard() {
  const parsedData: RecipeData = recipeData as RecipeData;

  const validRecipes: Recipe[] = parsedData.recipes.filter(isValidRecipe);

  const {onModalOpen} = useModal();

  const handleImageClick = (recipe: Recipe) => {
    onModalOpen("recipe-modal", recipe);
  };

  return (
    <div className="flex flex-row gap-4 flex-wrap">
      {validRecipes.map((recipe: Recipe) => (
        <Card
          key={recipe.id}
          isFooterBlurred
          radius="lg"
          className="border-none w-60"
        >
          <Image
            isZoomed
            alt={recipe.name}
            className="object-cover w-full h-40 cursor-pointer"
            height={160}
            src={recipe.image}
            width={240}
            onClick={() => handleImageClick(recipe)}
            
          />
          <CardFooter className="justify-center bg-black/20 border-white/20 border-t overflow-hidden py-1">
            <h3 className="text-black uppercase font-bold text-xs">
              {recipe.name}
            </h3>
          </CardFooter>
        </Card>
      ))}
        <RecipeModal
        />
    </div>
  );
}