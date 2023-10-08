import { AppBar, Box, Button, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const FAQURL = process.env.REACT_APP_QAURL

interface headerProps {
  scrollToComponent: () => void
}

export const Header = ({ scrollToComponent }: headerProps) => {
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
        display: { mobile: 'none', tablet: 'none', laptop: 'flex', desktop: 'flex' },
        marginLeft: 'auto',
        marginRight: '20px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto'
      }}>
        <Button sx={{ marginRight: '38px' }}> ABOUT US</Button>
        <Button sx={{ marginRight: '38px' }}> 제품 소개</Button>
        <Button sx={{ marginRight: '38px' }} onClick={scrollToComponent}> 사용 기업</Button>
        <Button sx={{ marginRight: '38px' }}> CONTACT</Button>
        <Button sx={{ marginRight: '38px' }}> 회사 소개서</Button>
        <Button sx={{ marginRight: '38px' }} onClick={() => { window.open(FAQURL) }}> Q&A</Button>
      </Box>
    </>

  )

  const HeaderRightMenu = (
    <>
      <Box sx={{
        display: { mobile: 'none', tablet: 'none', laptop: 'none', desktop: 'flex' },
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
      width: '100vw',
      position: 'fixed',
      display: 'flex',
      left: 0,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingX: '20px',
      paddingY: '20px',
      boxShadow: 'none'
    }}>
      {/* Desktop */}
      <Box sx={{
        display: { mobile: 'none', tablet: 'none', laptop: 'flex', desktop: 'flex' },
      }}>
        <img src="/images/logo_symbol.png" alt="비더원 로고" width="180rem" height="auto" />
      </Box>
      {/* Tablet */}
      <Box sx={{
        display: { mobile: 'none', tablet: 'flex', laptop: 'none', desktop: 'none' },
      }}>
        <img src="/images/logo_symbol.png" alt="비더원 로고" width="160rem" height="auto" />
      </Box>
      {/* Mobile */}
      <Box sx={{
        display: { mobile: 'flex', tablet: 'none', laptop: 'none', desktop: 'none' },
      }}>
        <img src="/images/logo_symbol.png" alt="비더원 로고" width="120rem" height="auto" />
      </Box>
      {/* Desktop */}
      {HeaderMenu}
      {HeaderRightMenu}
      {/* Mobile, Tablet */}
      <Box sx={{
        display: { mobile: 'flex', tablet: 'flex', laptop: 'none', desktop: 'none' },
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
