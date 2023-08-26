import { AppBar, Box, Button, Drawer, IconButton, Link, Typography } from '@mui/material'
import { Base } from './Base'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export const Header = () => {

  const HeaderMenu = (
    <Box sx={{
      // display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
      marginLeft: 'auto',
      marginRight: '20px',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 'auto'
    }}>
      <Button sx={{marginRight: '38px'}}> ABOUT US</Button>
      <Button sx={{marginRight: '38px'}}> 제품 소개</Button>
      <Button sx={{marginRight: '38px'}}> 사용 기업</Button>
      <Button sx={{marginRight: '38px'}}> CONTACT</Button>
      <Button sx={{marginRight: '38px'}}> 회사 소개서</Button>
      <Button sx={{marginRight: '38px'}}> Q&A</Button>
      {/* <Typography variant='subtitle1' sx={{ paddingX: 2 }}>
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
      </Typography> */}
    </Box>
  )

  const HeaderRightMenu = (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: 'auto'
        }}>
        <IconButton sx={{ backgroundColor: 'white', color: 'black', ":hover": {backgroundColor: '#D5D5D5'}, marginRight: '33px' }}>
          <InstagramIcon fontSize='inherit' />
        </IconButton>
        <IconButton sx={{ backgroundColor: 'white', color: 'black', ":hover": {backgroundColor: '#D5D5D5'} }}>
          <FacebookRoundedIcon fontSize='inherit' />
        </IconButton>
      </Box>
      {/* <Box sx={{
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
      </Box> */}
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
      backgroundColor: '#282828',
      // color: '#282828',
      position: 'fixed',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingX: '20px',
      paddingY: '20px',
      boxShadow: 'none'
    }}>
      <Box>
        <img src="/images/logo_symbol.png" alt="비더원 로고" width="180rem" height="auto" />
        {/* <Typography variant='h6' sx={{paddingX: 2}}>
          비더원
        </Typography> */}
      </Box>
      {HeaderMenu}
      {HeaderRightMenu}
    </AppBar>
  )
}
