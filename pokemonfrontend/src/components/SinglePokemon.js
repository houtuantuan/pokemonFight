import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function SinglePokemon ({ pokemon }) {

	// const [onePokemon, SetOnePokemon] = useState()
	const [ onePokemon, SetOnePokemon] = useState([])
	const { index } = useParams()

	// console.log('onePokemon id:', index )
	// console.log(onePokemon)

	const fetchData = async () => {
	try {
	  const getData = await fetch(
			`http://localhost:4000/pokemon/${index}`
	  )
	if (!getData)
			throw new Error(`Request failes with a status of ${getData.status}`)

		console.log('---------------- getData', getData)
		const parseData = await getData.json()
		console.log('++++++++++++++++ parseData', parseData);
		// const [id, name, type, base] = onePokemon;
		// console.log('================ onePokemon', id, name, type, base);

		SetOnePokemon(parseData)

	} catch (error) {
			console.log(error.message)
	}
 }

	useEffect((parseData) => {
		fetchData(parseData)
	}, [])

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
			{onePokemon.name && onePokemon.name.english}
		</Link>
		<div>
			<Link to='type'><h3>Type</h3></Link>
			{onePokemon.type && onePokemon.type.map((el, index) => {
					return ( <li key={index}> {el} </li> )
				})}
		</div>
		<div>
			<Link to="base"><h3>Base</h3></Link>
			{/* {onePokemon && <ul>{rows}</ul>} */}
		</div>
		<div className='pmCard' style={{maxWidth: "10rem"}}>
                  <img alt='onePokemon'
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${onePokemon.id}.png`}
                  />
                  <img alt='onePokemon'
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${onePokemon.id}.png`}
                  />
        </div>
	</div>
  )
}
