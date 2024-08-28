"use client"

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"
import { RecipeData } from "../model/recipeData"
import recipeData from "../data/recipes.json"
import { Recipe } from "../model/recipe"
import { Part } from "../model/part"
import { isValidRecipe } from "../utils/recipeTypeGuards"
import {Image} from "@nextui-org/image";


export default function recipeCard() {
  const parsedData: RecipeData = recipeData as RecipeData;

  const validRecipes: Recipe[] = parsedData.recipes.filter(isValidRecipe);

  return (
    <div className="flex flex-row gap-4">
      {validRecipes.map((recipe: Recipe) => (
         <Card key={recipe.id}
         isFooterBlurred
         radius="lg"
         className="border-none"
       >
         <Image
         isZoomed
           alt="Woman listing to music"
           className="object-cover"
           height={200}
           src="/recipe-photos/mese_almas.jpg"
           width={200}
         />
         <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
           <h3 className="text-tiny text-white">
             {recipe.name}
           </h3>
         </CardFooter>
       </Card>
      ))}
    </div>
  );
}