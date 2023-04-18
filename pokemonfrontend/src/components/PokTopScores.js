import React, { useEffect, useState } from 'react'
import { GiCrownedExplosion } from "react-icons/gi";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function PokTopScores () {

	const [ pokScoresArr, SetPokScoresArr] = useState([])
	// const [onePokemon, SetOnePokemon] = useState()
	// const { index } = useParams()

	// console.log('onePokemon id:', index )
	// console.log(onePokemon)

	const fetchData = async () => {
		try {
			const getData = await fetch(`http://localhost:4000/pokemon/scores`);
			
			if (!getData)
				throw new Error(`Request failes with a status of ${getData.status}`);

			console.log('---------------- getData', getData);
			const parseData = await getData.json();		// Array of objects 
			console.log('++++++++++++++++ parseData', parseData);

			SetPokScoresArr(parseData);

		} catch (error) {
				console.log(error.message);
		}
	}

	useEffect((parseData) => {
		fetchData(parseData)
	}, [])


  return (
	<div className='maxScreen'>
		
		<div>
			<ul>
				{ pokScoresArr && pokScoresArr.map((el, index) => {
						return ( 
							<li className='pokCardScore' key={index}> 
								<img className='pokImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${el.pok_id}.png`} />
								<span>{el.pok_name}</span> <GiCrownedExplosion /> <span>{el.pok_score}</span>
							</li> 
						)
					})
				}
			</ul>
		</div>
	</div>
  )
}
