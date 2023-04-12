import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DetailedPokemon ({ pokemon }) {
  const { info } = useParams()
  const { index } = useParams()

  const onePokemon = pokemon[index]

  const rows = []
  if (onePokemon) {
    switch (info) {
      case 'base':
        for (const attr in onePokemon.base) {
          rows.push(
            <li>
              {attr}: {JSON.stringify(onePokemon.base[attr])}
            </li>
          )
        }
        break
      case 'type':
        rows.push(onePokemon.type.map(el =><li> {el}</li>))
        break
    }
  }

  return (
    <>
      <div>{onePokemon && onePokemon.name.english}</div>
      <div> {onePokemon && <ul>{rows}</ul>}</div>
    </>
  )
}
