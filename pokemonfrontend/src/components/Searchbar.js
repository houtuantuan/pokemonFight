import React from 'react'
// import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {
  Button,
  IconButton,
  TextField,
  Typography,
  Container
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import './searchBar.css'

export default function Searchbar ({ setItemOffset, setSearchContent }) {
 

  //here is the search function
  function handleSubmit (e) {
    e.preventDefault()
    setItemOffset(0)
    setSearchContent(e.target.searchInput.value)
  }
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant='h4'
          
          component='div'
          sx={{
            flexGrow: 1,

            textAlign: 'center',
            color: 'white',
            marginTop: '2em',
            marginBottom: '1em'
          }}
        >
          Choose your Pokemon or find one!
        </Typography>
      </Container>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: '1em'
        }}
      >
      

        <form className='searchContainer' onSubmit={handleSubmit}>
          <TextField className='searchField' name='searchInput' type='text' />
          <button className='searchButton'>Search</button>
        </form>
      </Container>
    </>
  )
}
