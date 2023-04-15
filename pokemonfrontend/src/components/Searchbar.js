import React from 'react'
// import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Button, IconButton, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

export default function Searchbar ({setItemOffset,setSearchContent}) {
   

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch'
        }
      }
    }
  }))

  //here is the search function
  function handleSubmit (e) {
    e.preventDefault();
    setItemOffset(0);
    setSearchContent(e.target.searchInput.value)
  }
  return (
    <>
      <Typography variant='h5' sx={{ color: 'white' }}>
        Choose your Pokemon or search for one!
      </Typography>
      ;{/* <Search> */}
      {/* <SearchIconWrapper>
          <ManageSearchOutlinedIcon />
        </SearchIconWrapper> */}
      <form onSubmit={handleSubmit}>
        
        <input
          name="searchInput"
          type="text"
        />
        <button >Search</button>
      </form>
      {/* </Search> */}
     
    </>
  )
}
