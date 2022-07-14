import { DirectionJson } from "../types/recipe"

interface DirectionBoxProps {
  directions: DirectionJson
}

export const DirectionBox = ({ directions }: DirectionBoxProps) => {
  return (
    <div>
      <h3>Directions</h3>
      {directions.type === 1 ? (
        <DirectionList list={directions.data} />
      ) : (
        directions.data.map((item) => {
          return (
            <DirectionList
              key={item.name}
              list={item.directions}
              name={item.name}
            />
          )
        })
      )}
    </div>
  )
}

interface DirectionListProps {
  list: string[]
  name?: string
}

const DirectionList = ({ list, name }: DirectionListProps) => {
  return (
    <div>
      {name && <h5>{name}</h5>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
