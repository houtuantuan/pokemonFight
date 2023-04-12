import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Pokemon ({ pokemon }) {
  return (
    <div className="maxScreen">
      <div className="maxDesign">
        <div className="pmList">
        {pokemon &&
          pokemon.map((el) => (
            <Link to={`pokemon/${el.id}`} key={el.id}>
              <div className="pmCard">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${el.id}.png`} /> 
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${el.id}.png`} />
                {<h4>{el.name.english}</h4>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
