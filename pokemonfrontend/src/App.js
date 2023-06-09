import { useEffect, useState } from 'react'
import './App.css'
import * as React from 'react'
import Pokemon from './components/Pokemon'
import { Routes, Route } from 'react-router-dom'
import SinglePokemon from './components/SinglePokemon'
import DetailedPokemon from "./components/DetailedPokemon"
import Navbar from './components/Navbar'

function App () {
 
  return (
    <>
      <div className='App'></div>
      <Navbar/>
      <Routes>
        <Route path='/pokemonFight' element={<Pokemon/>}></Route>
        <Route path="/pokemonFight/pokemon/:id" element={<SinglePokemon/>}></Route>
        <Route path="/pokemonFight/pokemon/:id/:info" element={<DetailedPokemon/>}></Route>
      </Routes>
    </>
  )
}

export default App
