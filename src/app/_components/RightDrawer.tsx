'use client';

import { Box, Drawer, IconButton, List, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'

import { styled, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import ChatIcon from '@mui/icons-material/Chat';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export const RightDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setIsOpen(open);
    };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));

    const handleDrawerOpen = () => {
        setIsOpen(true);
    };

    const handleDrawerClose = () => {
        setIsOpen(false);
    };


    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>

            <Box>
                <IconButton
                    aria-label="open drawer"
                    edge="end"
                    onClick={toggleDrawer(true)}
                    sx={{
                        ...(isOpen && { display: 'none' }),
                        bgcolor: 'primary.light',
                        color: 'black'
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer anchor='right' open={isOpen} onClose={toggleDrawer(false)} sx={{ zIndex: 9999 }}>
                    <DrawerHeader>
                        <IconButton
                            onClick={handleDrawerClose}
                            sx={{
                                bgcolor: 'primary.light',
                                color: 'black'
                            }}
                        >
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />

                    <List>
                        <ListItem sx={{ color: 'primary.contrastText', bgcolor: 'primary.light' }}>
                            <ListItemIcon>
                                <LightbulbIcon sx={{ color: 'primary.contrastText' }} />
                            </ListItemIcon>
                            <ListItemText primary={'회사소개'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem sx={{ color: 'primary.contrastText', bgcolor: 'primary.light' }}>
                            <ListItemIcon>
                                <SelectAllIcon sx={{ color: 'primary.contrastText' }} />
                            </ListItemIcon>
                            <ListItemText primary={'핵심기술'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem sx={{ color: 'primary.contrastText', bgcolor: 'primary.light' }}>
                            <ListItemIcon>
                                <ChatIcon sx={{ color: 'primary.contrastText' }} />
                            </ListItemIcon>
                            <ListItemText primary={'적용사례'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem sx={{ color: 'primary.contrastText', bgcolor: 'primary.light' }}>
                            <ListItemIcon>
                                <PhoneInTalkIcon sx={{ color: 'primary.contrastText' }} />
                            </ListItemIcon>
                            <ListItemText primary={'고객센터'} />
                        </ListItem>
                    </List>
                </Drawer>
            </Box>
        </ThemeProvider>

    )
}
