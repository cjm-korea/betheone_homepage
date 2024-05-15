import { Box, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import theme from '@/theme/theme';

export const Footer = () => {
    return (
        <ThemeProvider
            theme={theme}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: "#333333",
                minHeight: 'fit-content',
                paddingY: '1.3rem'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    px: 8,
                    justifyContent: 'flex-start',
                    // alignItems: 'center',
                    color: 'primary.light',
                    minHeight: 'fit-content'
                }}>
                    <Typography
                        variant='caption'
                        component='h3'
                    >
                        기업명 : 비더원
                    </Typography>
                    <Typography
                        variant='caption'
                        component='h3'
                    >
                        사업자등록번호 : 481-71-00586
                    </Typography>
                    <Typography
                        variant='caption'
                        component='h3'
                    >
                        주소 : 경기도 시흥시 마유로376, 410호
                    </Typography>
                    <Typography
                        variant='caption'
                        component='h3'
                    >
                        이메일 : sales@smart-betheone.com
                    </Typography>
                    <Typography
                        variant='caption'
                        component='h3'
                    >
                        연락처 : 010-6567-2785
                    </Typography>
                </Box>
                <Typography
                    variant='body2'
                    component='h3'
                    textAlign='center'
                    alignItems='center'
                    color='primary.light'
                    marginTop='1.3rem'
                >
                    COPYRIGHT© {new Date().getFullYear()} BeTheOne. ALL RIGHT RESERVED.
                </Typography>
            </Box>
        </ThemeProvider>
    )
}
