'use client'

import theme from '@/theme/theme'
import { Box, ThemeProvider } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RightDrawer } from './RightDrawer'

export const Header = () => {


    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    position: 'fixed',
                    flexDirection: 'row',
                    minHeight: '4rem',
                    bgcolor: 'primary.light',
                    px: 8,
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9998,
                    alignItems: 'center',
                }}>
                <Image
                    src={"/Logo.png"}
                    width={129}
                    height={60}
                    alt='비더원 로고'
                    priority
                />
                <Box sx={{
                    display: {
                        mobile: 'flex',
                        tablet: 'none',
                        laptop: 'none',
                        desktop: 'none',
                    },
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'flex-end',
                }}>
                    <RightDrawer />
                </Box>
                <Box sx={{
                    display: {
                        mobile: 'none',
                        tablet: 'flex',
                        laptop: 'flex',
                        desktop: 'flex',
                    },
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'flex-end',
                    fontSize: '1.2rem',
                    "& > :not(:last-child)": {
                        marginRight: '2rem'
                    }
                }}>
                    <Link href={'#'}>회사소개</Link>
                    <Link href={'#'}>핵심기술</Link>
                    <Link href={'#'}>적용사례</Link>
                    <Link href={'#'}>고객센터</Link>
                </Box>

            </Box >
        </ThemeProvider>
    )
}
