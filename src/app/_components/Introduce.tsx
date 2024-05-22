'use client';

import theme from '@/theme/theme'
import { Box, Button, ThemeProvider, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { PrimaryButton } from './PrimaryButton';



export const Introduce = () => {
    const isTabletUp = useMediaQuery(theme.breakpoints.up('tablet'));
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    // width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    [theme.breakpoints.down('tablet')]: {
                        alignItems: 'center'
                    },
                    [theme.breakpoints.up('tablet')]: {
                        alignItems: 'start'
                    },
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                <Typography
                    variant='h3'
                    component='div'
                    sx={{
                        fontSize: '1.2rem',
                        [theme.breakpoints.up('tablet')]: {
                            fontSize: '1.7rem'
                        },
                        [theme.breakpoints.up('laptop')]: {
                            fontSize: '2.2rem'
                        },
                        [theme.breakpoints.up('desktop')]: {
                            fontSize: '2.7rem'
                        }
                    }}>
                    부착형 무선 데이터 서버<br />All New DNC
                </Typography>
                <Typography
                    variant='h3'
                    component='div'
                    sx={{
                        fontSize: '0.7rem',
                        [theme.breakpoints.up('tablet')]: {
                            fontSize: '0.9rem'
                        },
                        [theme.breakpoints.up('laptop')]: {
                            fontSize: '1rem'
                        },
                        [theme.breakpoints.up('desktop')]: {
                            fontSize: '1.2rem'
                        }
                    }}
                >
                    {isTabletUp ? (
                        <>
                            {`더 이상 유선 케이블과 이동식 저장장치의 사용을 하지 않습니다.`}
                        </>
                    ) : (
                        <>
                            {'더 이상 유선 케이블과'}
                            <br />
                            {'이동식 저장장치의 사용을 하지 않습니다.'}
                        </>
                    )}
                    <br />
                    {isTabletUp ? (
                        <>
                            {`다양한 공작기계에 사용이 가능하며 간단한 부착으로 즉시 적용 가능합니다.`}
                        </>
                    ) : (
                        <>
                            {'다양한 공작기계에 사용이 가능하며'}
                            <br />
                            {'간단한 부착으로 즉시 적용 가능합니다.'}
                        </>
                    )}
                </Typography>
                <PrimaryButton title={'제품 상세보기'} />
            </Box>
        </ThemeProvider>
    )
}
