import { Box, Typography } from '@mui/material'
import { Base } from './Base'

export const Body = () => {
  return (
    <>
      <Box>
        <img src="/images/main_1.JPG" alt="비더원 사진" width={'100%'} height={'auto'} />
        <Base>
          <Typography>
            진정한 의미의 스마트 팩토리 경험하기
          </Typography>
          <Typography>
            지금 상담 신청하기
          </Typography>
        </Base>
      </Box>
      <Box>
        <img src="/images/main_1.JPG" alt="비더원 사진" width={'100%'} height={'auto'} />
        <Base>
        </Base>
      </Box>
    </>
  )
}
