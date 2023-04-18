import { useEffect, useState } from 'react'
import './App.css'
import * as React from 'react'
import Pokemon from './components/Pokemon'
import { Routes, Route } from 'react-router-dom'
import SinglePokemon from './components/SinglePokemon'
import DetailedPokemon from "./components/DetailedPokemon"
import PokTopScores from './components/PokTopScores'

function App () {
 
  return (
    <>
      <div className='App'></div>
      <Routes>
        <Route path='/pokemonFight' element={<Pokemon/>}></Route>
        <Route path="/pokemonFight/pokemon/scores" element={<PokTopScores/>}></Route>
        <Route path="/pokemonFight/pokemon/:index" element={<SinglePokemon/>}></Route>
        <Route path="/pokemonFight/pokemon/:index/:info" element={<DetailedPokemon/>}></Route>
      </Routes>
    </>
  )
}

export default App
