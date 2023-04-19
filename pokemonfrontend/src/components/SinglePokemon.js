import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {BASE_URL} from '../utils/Constants'

export default function SinglePokemon () {

  const { id } = useParams()
  const [pokemon, setPokemon] = useState()
  const fetchData = async () => {
    try {
      const getData = await fetch(
      `${BASE_URL}/${id}`
      )
      if (!getData)
        throw new Error(`Request failes with a status of ${getData.status}`)
      const parseData = await getData.json()
      setPokemon(parseData)
      console.log(parseData)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
       <h3>Name</h3>
      <h3 >
        {pokemon && pokemon.name.english}
      </h3>
      <div>
        <Link to='type'><h3>Type</h3></Link>

      </div>
      <div>
      <Link to="base"><h3>Base</h3></Link>

   
        {/* {onePokemon && <ul>{rows}</ul>} */}
      </div>
    </div>
  )
}