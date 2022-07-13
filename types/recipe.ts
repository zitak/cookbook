export interface Recipe {
  slug: string
  title: string
}

export interface RecipeType {
  [key: string]: string | Array<string>
}
