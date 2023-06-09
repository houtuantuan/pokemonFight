import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import './pagination.css'
import Searchbar from './Searchbar'
import {BASE_URL} from '../utils/Constants'

export default function Pokemon () {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)
  const [pokemon, setPokemon] = useState()
  const [searchContent, setSearchContent] = useState(null)
  const itemsPerPage = 21
  const fetchData = async offset => {
    try {
      const baseUrl = `${BASE_URL}?itemOffset=${offset}&endOffset=${offset + itemsPerPage}`
      const url = searchContent ? `${baseUrl}&pokemonName=${searchContent}` : baseUrl
      const getData = await fetch(url)
      if (!getData)
        throw new Error(`Request failes with a status of ${getData.status}`)
      const parseData = await getData.json()
      setPokemon(parseData)
      // console.log(parseData.current)
    } catch (error) {
      console.log(error.message)
    }}

  useEffect(() => {
    fetchData(itemOffset)
  }, [])

  useEffect(() => {
    fetchData(itemOffset)
  }, [searchContent])

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const pageCount = pokemon ? Math.ceil(pokemon.total / itemsPerPage) : 0
  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % pokemon.total
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    fetchData(newOffset)
    setItemOffset(newOffset)
  }
  return (
    <div className='maxScreen'>
      <div className='maxDesign'>
        <Searchbar
          setItemOffset={setItemOffset}
          setSearchContent={setSearchContent}
        />
        <div className='pmList'>
          {pokemon &&
            pokemon.current.map(el => (
              <Link to={`pokemon/${el.id}`} key={el.id}>
                <div className='pmCard'>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${el.id}.png`}
                  />
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${el.id}.png`}
                  />
                  {<h4>{el.name}</h4>}
                </div>
              </Link>
            ))}
        </div>
        <ReactPaginate
          className='react-paginate'
          breakLabel='...'
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='< previous'
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}