import theme from '@/theme/theme'
import { Box, Card, CardContent, CardMedia, Grid, ThemeProvider, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

type CardProps = {
    id: number;
    mainText: string;
    subText: string[];
    imageUrl: string;
}

const cards: CardProps[] = [
    { id: 1, mainText: "유선 케이블 및 USB, CF카드를 제거", subText: ["· 현장은 깔끔해지고, 데이터 전송은 빨라집니다.", "· USB, CF카드의 연결부 고장을 방지합니다."], imageUrl: "/whyuse1.png" },
    { id: 2, mainText: "구형 공작기계에서 DNC 가공 및 용량 증가", subText: ["· 업그레이드가 불가능한 공작기계에서 DNC(Direct Numerical Control) 가공 및 용량 증가가 가능합니다."], imageUrl: "/whyuse2.png" },
    { id: 2, mainText: "안정적인 연결 및 DNC 가공", subText: ["· 연결망이 별도로 구성되어 노이즈의 취약점이 없습니다.", "· 메쉬 연결망이 아닌 별도의 네트워크, 구성으로 12시간 이상 DNC 가공이 가능합니다."], imageUrl: "/whyuse3.png" },
    { id: 2, mainText: "유선 케이블 및 USB, CF카드를 제거", subText: ["· 부착만으로 설치가 끝납니다.", "· 기계 이동 및 이사 시 인프라 구성이 쉽고 깔끔해집니다."], imageUrl: "/whyuse4.png" },
];

export const Whyuse = () => {
    const isLaptopUp = useMediaQuery(theme.breakpoints.up('laptop'));

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                    px: 8,
                    py: 6
                }}
            >
                <Typography textAlign='center'
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
                        },
                        pb: 4
                    }}>
                    왜 부착형 데이터 서버를<br /> 사용해야 하나요?
                </Typography>
                <Grid container spacing={2} justifyContent="center" alignItems='stretch'>
                    {cards.map((card) => (
                        <Grid
                            item
                            mobile={12}
                            tablet={6}
                            laptop={6}
                            desktop={3}
                            key={card.id}
                        >
                            <Card
                                sx={{
                                    width: '100%',
                                    minHeight: 350,
                                    // height: '80%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s', // 부드러운 전환 효과
                                    '&:hover': {
                                        transform: 'translateY(-7px)', // 호버 시 위로 10px 이동
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={card.imageUrl}
                                    alt={`Card ${card.id}`}
                                    sx={{ objectFit: 'contain' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" textAlign='center' color='primary.main'>
                                        {card.mainText}
                                    </Typography>
                                    {card.subText.map((text, index) => (
                                        <Typography variant="body2" key={index}>
                                            {text}
                                        </Typography>
                                    ))}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </ThemeProvider>
    )
}
