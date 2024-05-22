import theme from '@/theme/theme';
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import React from 'react'

type ImageBoxProps = {
    imagePath: string;
    mainText: string;
    subText: string;
}

export const ImageBox = ({ imagePath, mainText, subText }: ImageBoxProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    textAlign: 'left',
                    backgroundColor: 'primary.light',
                    // width: '100%'
                }}
            >
                <Box
                    component="img"
                    src={imagePath}
                    alt={mainText}
                    sx={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        p: 2,
                        pt: 4,
                        bgcolor: grey[300]
                    }}
                />
                <Typography
                    variant="body2"
                    component='div'
                    sx={{
                        fontSize: '0.875rem',
                        [theme.breakpoints.up('tablet')]: {
                            fontSize: '0.9rem'
                        },
                        [theme.breakpoints.up('laptop')]: {
                            fontSize: '1.1rem'
                        },
                        [theme.breakpoints.up('desktop')]: {
                            fontSize: '1.3rem'
                        },
                        px: 2
                    }}>
                    {subText}
                </Typography>
                <Typography
                    variant="h6"
                    component='div'
                    gutterBottom
                    sx={{
                        fontSize: '0.95rem',
                        [theme.breakpoints.up('tablet')]: {
                            fontSize: '0.975rem'
                        },
                        [theme.breakpoints.up('laptop')]: {
                            fontSize: '1.175rem'
                        },
                        [theme.breakpoints.up('desktop')]: {
                            fontSize: '1.375rem'
                        },
                        px: 2,
                        pt: 0.5,
                        fontWeight: '600'
                    }}>
                    {mainText}
                </Typography>
            </Box>
        </ThemeProvider>
    )
}
