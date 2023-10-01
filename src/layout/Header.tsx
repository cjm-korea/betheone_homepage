import { AppBar, Box, Button, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Base } from './Base'
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

export const Header = () => {
  type Anchor = 'right';

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#282828',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{
        backgroundColor: '#282828',
        color: 'white',
      }}>
        <ListItem>
          {/* <ListItemButton> */}
            <ListItemIcon sx={{ color: 'white' }}>
              <InstagramIcon fontSize='large' sx={{ marginRight: 2 }} />
              <FacebookRoundedIcon fontSize='large' />
            </ListItemIcon>
            <Box sx={{ marginX: 'auto' }} />
            <CloseIcon sx={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'end',
              color: 'white'
            }} />
          {/* </ListItemButton> */}
        </ListItem>
        {['ABOUT US', '제품 소개', '사용 기업', 'CONTACT', '회사 소개서', 'Q&A'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const HeaderMenu = (
    <>
      <Box sx={{
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' },
        marginLeft: 'auto',
        marginRight: '20px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto'
      }}>
        <Button sx={{ marginRight: '38px' }}> ABOUT US</Button>
        <Button sx={{ marginRight: '38px' }}> 제품 소개</Button>
        <Button sx={{ marginRight: '38px' }}> 사용 기업</Button>
        <Button sx={{ marginRight: '38px' }}> CONTACT</Button>
        <Button sx={{ marginRight: '38px' }}> 회사 소개서</Button>
        <Button sx={{ marginRight: '38px' }}> Q&A</Button>
      </Box>
    </>

  )

  const HeaderRightMenu = (
    <>
      <Box sx={{
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' },
        justifyContent: 'space-between',
        width: 'auto'
      }}>
        <IconButton sx={{ backgroundColor: 'white', color: 'black', ":hover": { backgroundColor: '#D5D5D5' }, marginRight: '33px' }}>
          <InstagramIcon fontSize='inherit' />
        </IconButton>
        <IconButton sx={{ backgroundColor: 'white', color: 'black', ":hover": { backgroundColor: '#D5D5D5' } }}>
          <FacebookRoundedIcon fontSize='inherit' />
        </IconButton>
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
      {/* Desktop */}
      <Box sx={{
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' },
      }}>
        <img src="/images/logo_symbol.png" alt="비더원 로고" width="180rem" height="auto" />
      </Box>
      {/* Tablet */}
      <Box sx={{
        display: { xs: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'none' },
      }}>
        <img src="/images/logo_symbol.png" alt="비더원 로고" width="160rem" height="auto" />
      </Box>
      {/* Mobile */}
      <Box sx={{
        display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
      }}>
        <img src="/images/logo_symbol.png" alt="비더원 로고" width="120rem" height="auto" />
      </Box>
      {/* Desktop */}
      {HeaderMenu}
      {HeaderRightMenu}
      {/* Mobile, Tablet */}
      <Box sx={{
        display: { xs: 'block', sm: 'block', md: 'block', lg: 'block', xl: 'none' },
      }}>
        <Button>
          <div>
            {(['right'] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon sx={{
                    color: 'white'
                  }} />
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </Button>
      </Box>
    </AppBar>
  )
}
