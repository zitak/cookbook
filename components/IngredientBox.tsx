import { Ingredient, IngredientJson } from "../types/recipe"

interface IngredientBoxProps {
  ingredients: IngredientJson
}

export const IngredientBox = ({ ingredients }: IngredientBoxProps) => {
  return (
    <div>
      <h3>Ingredients</h3>
      {ingredients.type === 1 ? (
        <IngredientList list={ingredients.data} />
      ) : (
        ingredients.data.map((item) => {
          return (
            <IngredientList
              key={item.name}
              list={item.ingredients}
              name={item.name}
            />
          )
        })
      )}
    </div>
  )
}

interface IngredientListProps {
  list: Ingredient[]
  name?: string
}

const IngredientList = ({ list, name }: IngredientListProps) => {
  return (
    <div>
      {name && <h5>{name}</h5>}
      <ul>
        {list.map((item) => (
          <li key={item.name}>{`${item.amount ?? ""} ${item.unit ?? ""} ${
            item.name
          }`}</li>
        ))}
      </ul>
    </div>
  )
}
