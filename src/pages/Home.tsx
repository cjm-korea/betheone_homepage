import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../layout/Header'
import { Body } from '../layout/Body'
import { Box, Button, Typography } from '@mui/material'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Main_mp4 from '../components/Main_mp4';
import Main_solution from '../components/Main_solution';
import Main_benefit from '../components/Main_benefit';
import Main_using from '../components/Main_using';
import Main_contact from '../components/Main_contact';

export const Home = () => {
  // const swiper = (
  //   <>
  //     {/* Desktop */}
  //     <Box sx={{
  //       display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' }
  //     }}>
  //       <Swiper
  //         style={{ height: 'calc(100vh)', width: '100%', margin: 0, padding: 0 }}
  //         pagination
  //         // pagination={true, {
  //         //   clickable: true,
  //         //   type: 'bullets'
  //         // }}
  //         modules={[Pagination]}
  //         spaceBetween={30}
  //       >
  //         <SwiperSlide style={{ height: '100%', width: 'auto' }}>
  //           <img src="/images/product_1.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
  //         </SwiperSlide>
  //         <SwiperSlide style={{ height: '100%', width: 'auto' }}>
  //           <img src="/images/product_2.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
  //         </SwiperSlide>
  //         <SwiperSlide style={{ height: '100%', width: 'auto' }}>
  //           <img src="/images/product_3.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
  //         </SwiperSlide>
  //       </Swiper>
  //     </Box>
  //     {/* Tablet */}
  //     <Box sx={{
  //       display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'none' }
  //     }}>
  //       <Swiper
  //         style={{ height: 'calc(100vh/2)', width: '100%', margin: 0, padding: 0 }}
  //         pagination
  //         // pagination={true, {
  //         //   clickable: true,
  //         //   type: 'bullets'
  //         // }}
  //         modules={[Pagination]}
  //         spaceBetween={30}
  //       >
  //         <SwiperSlide style={{ height: '100%', width: 'auto' }}>
  //           <img src="/images/product_1.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
  //         </SwiperSlide>
  //         <SwiperSlide style={{ height: '100%', width: 'auto' }}>
  //           <img src="/images/product_2.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
  //         </SwiperSlide>
  //         <SwiperSlide style={{ height: '100%', width: 'auto' }}>
  //           <img src="/images/product_3.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
  //         </SwiperSlide>
  //       </Swiper>
  //     </Box>
  //     {/* Mobile */}
  //     <Box sx={{
  //       display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }
  //     }}>
  //       <Swiper
  //         style={{ height: 'calc(94vh)', width: '100%', margin: 0, padding: 0 }}
  //         pagination
  //         modules={[Pagination]}
  //         spaceBetween={30}
  //       >
  //         <SwiperSlide style={{ height: '100%', width: 'auto' }}>
  //           <img src="/images/product_1_mobile.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
  //         </SwiperSlide>
  //         <SwiperSlide style={{ height: '100%', width: 'auto' }}>
  //           <img src="/images/product_2_mobile.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
  //         </SwiperSlide>
  //         <SwiperSlide style={{ height: '100%', width: 'auto' }}>
  //           <img src="/images/product_3_mobile.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
  //         </SwiperSlide>
  //       </Swiper>
  //     </Box>
  //   </>
  // )

  return (
    <>
      <Header />

      <Main_mp4 />

      <Main_solution />

      <Main_benefit />

      <Main_using />

      <Main_contact />

      
      {/* Desktop */}
      {/* <Box sx={{
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' },
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
          ":hover": { backgroundColor: '#D5D5D5' }
        }}>
          문의글 작성하기
        </Button>
      </Box> */}
      {/* Tablet */}
      {/* <Box sx={{
        display: { xs: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'none' },
        backgroundSize: 'contain',
        position: 'relative',
        height: 'calc(100vh/2)',
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
          ":hover": { backgroundColor: '#D5D5D5' }
        }}>
          문의글 작성하기
        </Button>
      </Box> */}
      {/* Mobile */}
      {/* <Box sx={{
        display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
        position: 'relative',
        height: 'calc(50vh)',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: "url('images/contact_mobile.png')",
        backgroundColor: '#122138'
      }}>
        <Button sx={{
          position: 'absolute',
          backgroundColor: 'white',
          color: 'black',
          textAlign: 'center',
          size: 'large',
          borderRadius: 15,
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          ":hover": { backgroundColor: '#D5D5D5' }
        }}>
          문의글 작성하기
        </Button>
      </Box> */}
      {/* <Body/> */}
    </>
  )
}
