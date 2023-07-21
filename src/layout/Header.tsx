import { AppBar, Box, Drawer, Link, Typography } from '@mui/material'
import { Base } from './Base'

export const Header = () => {

  const HeaderCenterMenu = (
    <Box sx={{
      display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
      <Typography variant='subtitle1' sx={{ paddingX: 2 }}>
        Model S
      </Typography>
      <Typography variant='subtitle1' sx={{ paddingX: 2 }}>
        Model 3
      </Typography>
      <Typography variant='subtitle1' sx={{ paddingX: 2 }}>
        Model X
      </Typography>
      <Typography variant='subtitle1' sx={{ paddingX: 2 }}>
        Model Y
      </Typography>
      <Typography variant='subtitle1' sx={{ paddingX: 2 }}>
        Cybertruck
      </Typography>
      <Typography variant='subtitle1' sx={{ paddingX: 2 }}>
        Powerwall
      </Typography>
    </Box>
  )

  const HeaderRightMenu = (
    <>
      <Box sx={{
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Typography variant='h6' sx={{ paddingX: 2 }}>
          Shop
        </Typography>
        <Typography variant='h6' sx={{ paddingX: 2 }}>
          계정
        </Typography>
        <Typography variant='h6' sx={{ paddingX: 2 }}>
          메뉴
        </Typography>
      </Box>
      <Box sx={{
        display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' },
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Typography variant='h6' sx={{ paddingX: 2 }}>
          메뉴
        </Typography>
      </Box>
    </>
  )

  const ToggleDrawer = (
    <Drawer
      anchor={'right'}
      
    >

    </Drawer>
  )

  return (

    <AppBar position='fixed' sx={{
      backgroundColor: 'transparent',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingX: 10,
      paddingY: 2,
      boxShadow: 'none'
    }}>
      <Box>
        <img src="/images/logo_symbol.png" alt="비더원 로고" width="180rem" height="auto" />
        {/* <Typography variant='h6' sx={{paddingX: 2}}>
          비더원
        </Typography> */}
      </Box>
      {HeaderCenterMenu}
      {HeaderRightMenu}
    </AppBar>
  )
}
