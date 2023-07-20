import { AppBar, Box, Link, Typography } from '@mui/material'
import React from 'react'
import { Base } from './Base'

export const Header = () => {
  return (

    <AppBar position='fixed' sx={{
      backgroundColor: 'transparent',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingX: 20,
      paddingY: 2,
      boxShadow: 'none'
    }}>
      <Box>
        <Typography variant='h6' sx={{paddingX: 2}}>
          비더원
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Typography variant='h6' sx={{paddingX: 2}}>
          Model S
        </Typography>
        <Typography variant='h6' sx={{paddingX: 2}}>
          Model 3
        </Typography>
        <Typography variant='h6' sx={{paddingX: 2}}>
          Model X
        </Typography>
        <Typography variant='h6' sx={{paddingX: 2}}>
          Model Y
        </Typography>
        <Typography variant='h6' sx={{paddingX: 2}}>
          Cybertruck
        </Typography>
        <Typography variant='h6' sx={{paddingX: 2}}>
          Powerwall
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Typography variant='h6' sx={{paddingX: 2}}>
          Shop
        </Typography>
        <Typography variant='h6' sx={{paddingX: 2}}>
          계정
        </Typography>
        <Typography variant='h6' sx={{paddingX: 2}}>
          메뉴
        </Typography>
      </Box>
    </AppBar>
  )
}
