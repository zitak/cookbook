import fs from "fs"
import matter from "gray-matter"
import { join } from "path"
import { Recipe, RecipeType } from "../types/recipe"

const recipesDirectory = join(process.cwd(), "resources/recipes")

function getRawRecipeBySlug(slug: string): matter.GrayMatterFile<string> {
  const fullPath = join(recipesDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  return matter(fileContents)
}

function getAllSlugs(): Array<string> {
  return fs.readdirSync(recipesDirectory)
}

function getRecipeBySlug(slug: string, fields: string[] = []): RecipeType {
  const realSlug = slug.replace(/\.mdx$/, "")
  const { data, content } = getRawRecipeBySlug(realSlug)
  const items: RecipeType = {}

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })
  return items
}

export function getAllRecipes(fields: string[] = []): Array<RecipeType> {
  return getAllSlugs().map((slug) => getRecipeBySlug(slug, fields))
}
