export interface Recipe {
  key: string
  title: string
  origin?: string
  image?: string
  servings?: number
  ingredients: IngredientJson
  directions: string[] | DirectionList[]
}

export type IngredientJson =
  | {
      type: 1
      data: Ingredient[]
    }
  | {
      type: 2
      data: IngredientList[]
    }

export interface IngredientList {
  name: string
  ingredients: Ingredient[]
}

export interface Ingredient {
  amount?: number
  unit?: string
  name: string
}

export interface DirectionList {
  name: string
  directions: string[]
}
