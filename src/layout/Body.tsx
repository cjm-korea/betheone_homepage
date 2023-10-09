import { Box, Typography, keyframes } from '@mui/material'
import { Base } from './Base'

const typographyAnimation = keyframes(
  `0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`)

const BodyTopTypography = (
  <>
    <Box sx={{
      display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none' },
      position: 'absolute',
      top: '18%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Typography sx={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white',
        animation: `${typographyAnimation} 1s ease`,
      }}>
        비더원 경험하기
      </Typography>
      <Typography variant='subtitle2' sx={{
        color: 'white',
        opacity: 0,
        animation: `${typographyAnimation} ease 1s forwards`,
        animationDelay: '1s'
      }}>
        지금 상담 신청하기
      </Typography>
    </Box>

    <Box sx={{
      display: { xs: 'none', sm: 'flex', md: 'none', lg: 'none' },
      position: 'absolute',
      top: '18%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Typography sx={{
        fontSize: '2.2rem',
        fontWeight: 'bold',
        color: 'white',
        animation: `${typographyAnimation} 1s ease`,
      }}>
        비더원 경험하기
      </Typography>
      <Typography variant='subtitle2' sx={{
        color: 'white',
        opacity: 0,
        animation: `${typographyAnimation} ease 1s forwards`,
        animationDelay: '1s'
      }}>
        지금 상담 신청하기
      </Typography>
    </Box>
    <Box sx={{
      display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
      position: 'absolute',
      top: '18%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Typography sx={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'white',
        animation: `${typographyAnimation} 1s ease`,
      }}>
        비더원 솔루션 경험하기
      </Typography>
      <Typography variant='subtitle2' sx={{
        color: 'white',
        opacity: 0,
        animation: `${typographyAnimation} ease 1s forwards`,
        animationDelay: '1s'
      }}>
        지금 상담 신청하기
      </Typography>
    </Box>
  </>
)

export const Body = () => {
  return (
    <>
      <Box>
        <img src="/images/main_1.JPG" alt="비더원 사진"
          style={{
            height: '100vh',
            width: '100vw',
            maxWidth: '100%',
            objectFit: 'cover',
            position: 'relative',
          }} />
        {BodyTopTypography}
      </Box>
      <Box>
        <img src="/images/main_1.JPG" alt="비더원 사진" width={'100%'} height={'auto'} />
      </Box>
    </>
  )
}
