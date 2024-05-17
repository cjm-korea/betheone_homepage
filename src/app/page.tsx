'use client'

import styles from "./page.module.css";
import { PrimaryButton } from "./_components/PrimaryButton";
import { Box, Button, styled, Typography } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`

export default function Home() {
  return (
    <main className={styles.main}>
      <Box sx={{
        width: '100%',
        height: '288px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Image
          src='/main_1.jpg'
          alt="메인 이미지"
          layout="fill"
          objectFit="cover"
        />
        <Box sx={{
          position: 'absolute',
          color: 'white',
          zIndex: 2,
          
        }}>
          <Typography
            variant="h4"
            component={'h2'}
            fontWeight={500}
            sx={{
              fontSize: '1.5rem',
              [theme.breakpoints.up('tablet')]: {
                fontSize: '2rem'
              },
              [theme.breakpoints.up('laptop')]: {
                fontSize: '2.5rem'
              },
              [theme.breakpoints.up('desktop')]: {
                fontSize: '3rem'
              }
            }}
            pb={4}
          >
            제조 산업의 문제점을 해결합니다.
          </Typography>
          <Typography
            variant="subtitle2"
            component={'h2'}
            fontWeight={500}
            letterSpacing={0.9}
            sx={{
              fontSize: '0.6rem',
              [theme.breakpoints.up('tablet')]: {
                fontSize: '0.9rem'
              },
              [theme.breakpoints.up('laptop')]: {
                fontSize: '1rem'
              },
              [theme.breakpoints.up('desktop')]: {
                fontSize: '1.3rem'
              }
            }}
            pb={4}
          >
            CNC/MCT 공작기계의 혁신적인 부착형 무선 데이터 서버를 소개합니다.
          </Typography>
          <PrimaryButton title={'알아보기'}/>
        </Box>
      </Box>
      <Box sx={{ height: 200 }}>
        asd
      </Box>
      <Box sx={{ height: 200 }}>
        asd
      </Box>
      <Box sx={{ height: 200 }}>
        asd
      </Box>
      <Box sx={{ height: 200 }}>
        asd
      </Box>
      <Box sx={{ height: 200 }}>
        asd
      </Box>
      <Box sx={{ height: 200 }}>
        asd
      </Box>
      <Box sx={{ height: 200 }}>
        asd
      </Box>
      <Box sx={{ height: 200 }}>
        asd
      </Box>
      <Box sx={{ height: 200 }}>
        asd
      </Box>
    </main>
  );
}
