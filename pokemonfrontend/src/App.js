import { useEffect, useState } from 'react'
import './App.css'
import * as React from 'react'
import Pokemon from './components/Pokemon'
import { Routes, Route } from 'react-router-dom'
import SinglePokemon from './components/SinglePokemon'
import DetailedPokemon from "./components/DetailedPokemon"

function App () {
 
  return (
    <>
      <div className='App'></div>
      <Routes>
        <Route path='/' element={<Pokemon/>}></Route>
        <Route path="/pokemon/:index" element={<SinglePokemon/>}></Route>
        <Route path="/pokemon/:index/:info" element={<DetailedPokemon/>}></Route>
      </Routes>
    </>
  )
}

export default App
