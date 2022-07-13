import React from "react"
import NextLink from "next/link"

interface Props {
  slug: string
  title: string
}

const RecipeItem = ({ slug, title }: Props) => (
  <div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <NextLink as={`/recipe/${slug}`} href="/recipe/[slug]">
        <a href="/recipe">{title}</a>
      </NextLink>
    </div>
  </div>
)

export default RecipeItem
