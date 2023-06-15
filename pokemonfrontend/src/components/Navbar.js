import React from 'react'
import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <>
      <AppBar
        position='static'
        color='primary'
        enableColorOnDark
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Typography
          variant='h4'
          component='h2'
          sx={{
            display: 'flex',
            justifyContent: 'center'

          }}
        >
          <Link to='/pokemonFight' style={{ textDecoration: 'none',color:"white" }}>
            Pokemon
          </Link>
        </Typography>
      </AppBar>
    </>
  )
}
