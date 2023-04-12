import { useEffect, useState } from 'react'
import './App.css'
import * as React from 'react'
import Pokemon from './components/Pokemon'
import { Routes, Route } from 'react-router-dom'
import SinglePokemon from './components/SinglePokemon'
import DetailedPokemon from "./components/DetailedPokemon"

function App () {
  const [pokemon, setPokemon] = useState([])

  const fetchData = async () => {
    try {
      const getData = await fetch('http://localhost:4000/pokemon')
      if (!getData)
        throw new Error(`Request failes with a status of ${getData.status}`)
      const parseData = await getData.json()
      setPokemon(parseData)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className='App'>pokemon</div>
      <Routes>
        <Route path='/' element={<Pokemon pokemon={pokemon} />}></Route>
        <Route path="/pokemon/:index" element={<SinglePokemon pokemon={pokemon} />}></Route>
        <Route path="/pokemon/:index/:info" element={<DetailedPokemon pokemon={pokemon} />}></Route>
      </Routes>
    </>
  )
}

export default App
