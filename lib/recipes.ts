import fs from "fs"
import { join } from "path"
import { Recipe } from "../types/recipe"

const recipesDirectory = join(process.cwd(), "resources/recipes")

function getAllRecipeFileNames(): string[] {
  return fs.readdirSync(recipesDirectory)
}

export function getAllRecipes(): Recipe[] {
  return getAllRecipeFileNames().map((fileName) =>
    getRecipe(fileName.replace(".json", ""))
  )
}

export function getRecipe(key: string): Recipe {
  const fullPath = join(recipesDirectory, `${key}.json`)
  return { key: key, ...JSON.parse(fs.readFileSync(fullPath, "utf-8")) }
}
