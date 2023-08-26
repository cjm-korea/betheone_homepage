import React from 'react'
import { Header } from '../layout/Header'
import { Body } from '../layout/Body'
import { Box, Button, Typography } from '@mui/material'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

export const Home = () => {
  const swiper = (
    <Swiper
      style={{ height: 'calc(100vh)', width: '100%', margin: 0, padding: 0 }}
      // pagination={true}
      // pagination={true, {
      //   clickable: true,
      //   type: 'bullets'
      // }}
      modules={[Pagination]}
      spaceBetween={30}
    >
      <SwiperSlide  style={{ height: '100%', width: 'auto' }}>
        <img src="/images/product_1.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
      </SwiperSlide>
      <SwiperSlide style={{ height: '100%', width: 'auto' }}>
        <img src="/images/product_2.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
      </SwiperSlide>
      <SwiperSlide style={{ height: '100%', width: 'auto' }}>
        <img src="/images/product_3.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
      </SwiperSlide>
    </Swiper>
  )

  return (
    <>
      <Header />
      <Box sx={{
        backgroundImage: 'url("images/bg_intro.png")',
        backgroundSize: 'cover',
        position: 'relative',
        height: '100vh',
        width: '100%',
        backgroundPosition: 'center',
        objectFit: 'cover'
      }}>
        <Typography variant='h3' sx={{
          position: 'absolute',
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white'
        }}>
          모든 공장의 스마트팩토리화,
          <p />
          <b>비더원</b>이라면 가능합니다.
        </Typography>
        {/* <img src="images/bg_intro.png"/> */}
      </Box>
      <Box sx={{
        height: 'auto',
        width: '100%',
        backgroundColor: '#000A1C'
      }}>
        <img src='images/About_us.png' width={'100%'} height={'auto'} />
      </Box>
      <Box sx={{
        height: 'calc(60vh)/3',
        width: '100%',
        margin: 0,
        padding: 0
      }}>
        {swiper}
      </Box>
      <Box sx={{
        height: 'auto',
        width: '100%',
        backgroundColor: '#122138',
        margin: 0,
        padding: 0
      }}>
        <img src='images/using_company.png' width={'100%'} height={'auto'} />
      </Box>
      <Box sx={{
        backgroundSize: 'contain',
        position: 'relative',
        height: 'calc(100vh/3)',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: "url('images/contact.png')",
        backgroundColor: '#122138',
        margin: 0,
        padding: 0
      }}>
        <Button sx={{
          position: 'absolute',
          backgroundColor: 'white',
          color: 'black',
          textAlign: 'center',
          size: 'large',
          borderRadius: 15,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          ":hover": {backgroundColor: '#D5D5D5'}
        }}>
          문의글 작성하기
        </Button>
      </Box>
      {/* <Body/> */}
    </>
  )
}
