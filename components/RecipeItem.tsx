import React from "react"
import NextLink from "next/link"

interface Props {
  name: string
  title: string
}

const RecipeItem = ({ name, title }: Props) => (
  <li key={name}>
    <NextLink as={`/recipe/${name}`} href="/recipe/[key]">
      <a href="/recipe">{title}</a>
    </NextLink>
  </li>
)

export default RecipeItem
