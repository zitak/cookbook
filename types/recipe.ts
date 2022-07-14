export interface Recipe {
  key: string
  title: string
  originUrl?: string
  imageUrl?: string
  servings?: number
  ingredients: IngredientJson
  directions: DirectionJson
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

export type DirectionJson =
  | {
      type: 1
      data: string[]
    }
  | {
      type: 2
      data: DirectionList[]
    }

export interface DirectionList {
  name: string
  directions: string[]
}
