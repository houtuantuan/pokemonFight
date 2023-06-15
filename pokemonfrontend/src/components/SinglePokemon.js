import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../utils/Constants'
import './singlePokemon.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import InfoIcon from '@mui/icons-material/Info'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

export default function SinglePokemon () {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState()
  // const [pokemonId, setPokemonId] = useState()
  const fetchData = async () => {
    try {
      const getData = await fetch(`${BASE_URL}/${id}`)
      if (!getData)
        throw new Error(`Request failes with a status of ${getData.status}`)
      const parseData = await getData.json()
      setPokemon(parseData)
      // setPokemonId(parseData.id)
      console.log(parseData)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    pokemon && (
    <div className='maxScreen'>
        <Link
          to={`/pokemonFight/pokemon/${id - 1}`}
        >
          <ArrowBackIosNewIcon sx={{ color: 'white' ,marginTop:"50vh"}} />
        </Link>
        <Card sx={{ width: 455, height: '50%', marginTop: '5%' }}>
          {pokemon && (
            <CardActionArea>
              <CardMedia
                component='img'
                height='340'
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon.id}.png`}
                alt={pokemon.name.english}
                sx={{ padding: '1em 1em 0 1em', objectFit: 'contain' }}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {pokemon.name.english}
                </Typography>

                {/* type */}
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary='Type' />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    {pokemon &&
                      pokemon.type.map(el => (
                        <ListItemButton sx={{ pl: 4 }} key={el}>
                          <ListItemIcon>
                            <InfoIcon />
                          </ListItemIcon>
                          <ListItemText primary={el} />
                        </ListItemButton>
                      ))}
                  </List>
                </Collapse>
                {/* base */}
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary='Base' />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText primary={`HP:${pokemon.base.HP}`} />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText primary={`Attack:${pokemon.base.Attack}`} />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={`Defense:${pokemon.base.Defense}`}
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={`Sp Attack:${pokemon.base['Sp. Attack']}`}
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={`Sp Defense:${pokemon.base['Sp. Defense']}`}
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText primary={`Speed:${pokemon.base.Speed}`} />
                    </ListItemButton>
                  </List>
                </Collapse>
              </CardContent>
            </CardActionArea>
          )}
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
          </CardActions>
        </Card>
        <Link to={`/pokemonFight/pokemon/${Number(id) + 1}`}>
          <ArrowForwardIosIcon sx={{ color: 'white',marginTop:"50vh" }} />
        </Link>
       
      
     </div>
    )
  )
}
