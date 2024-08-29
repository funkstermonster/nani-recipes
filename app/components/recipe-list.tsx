"use client"

import { RecipeData } from "../model/recipeData"
import recipeData from "../data/recipes.json"
import { Recipe } from "../model/recipe"
import { isValidRecipe } from "../utils/recipeTypeGuards"
import RecipeModal from "./recipe-modal"
import RecipeCard from "./recipe-card"
import { useState } from "react"
import RecipeSearch from "./recipe-search"


export default function RecipeList() {
  const parsedData: RecipeData = recipeData as RecipeData;

  const validRecipes: Recipe[] = parsedData.recipes.filter(isValidRecipe);

  const [searchQuery, setSearchQuery] = useState("");


  const filteredRecipes = validRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <div className="p-4">
      <RecipeSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex flex-row gap-4 flex-wrap">
        {filteredRecipes.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <RecipeModal />
    </div>
  )
}