import React from "react"
import NextLink from "next/link"
import { Recipe } from "../types/recipe"

interface Props {
  recipe: Recipe
}

const RecipeItem = ({ recipe }: Props) => (
  <div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <NextLink as={`/blog/${recipe.slug}`} href="/recipe/[slug]">
        <a href="/recipe">{recipe.title}</a>
      </NextLink>
    </div>
  </div>
)

export default RecipeItem
