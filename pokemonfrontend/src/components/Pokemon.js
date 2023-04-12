import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Pokemon ({ pokemon }) {
  return (
    <>
      <h2>the names of pokemons</h2>
      <div>
        {pokemon &&
          pokemon.map((el, index) => (
            <Link to={`pokemon/${index}`} key={index}>
              {<li>{el.name.english}</li>}
            </Link>
          ))}
      </div>
    </>
  )
}
