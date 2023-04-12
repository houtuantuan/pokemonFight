import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function SinglePokemon ({ pokemon }) {
    
  const { index } = useParams()
  const { info } = useParams()

  const onePokemon = pokemon[index]
  console.log(onePokemon)
//   const baseInfo=onePokemon[info];

//   const rows = []
//   for (const attr in onePokemon.base) {
//     rows.push(
//       <li>
//         {attr}: {JSON.stringify(onePokemon.base[attr])}
//       </li>
//     )
//   }

  return (
    <div>
       <h3>Name</h3>
      <Link >
        {onePokemon && onePokemon.name.english}
      </Link>
      <div>
        <Link to='type'><h3>Type</h3></Link>
        {onePokemon &&
          onePokemon.type.map((el, index) => {
            return (
              <>
                <li key={index}>
                  <>{el}</>
                </li>
              </>
            )
          })}
      </div>
      <div>
      <Link to="base"><h3>Base</h3></Link>
        {/* {onePokemon && <ul>{rows}</ul>} */}
      </div>
    </div>
  )
}
