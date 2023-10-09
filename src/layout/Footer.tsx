import { Box, Button, Divider, Typography } from "@mui/material"

interface FooterProps {

}

const QAURL = process.env.REACT_APP_QAURL
const FAQURL = process.env.REACT_APP_FAQURL

const Footer = ({ }: FooterProps) => (
  <div>
    {/* Desktop, Tablet */}
    <Box display={{ mobile: 'none', tablet: 'none', laptop: 'flex', desktop: 'flex' }} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'auto'} width={'100%'} color={'white'} bgcolor={'#001635'} m={0} p={0}>
      <Box width={'100%'} height={'auto'} display={'flex'} flexDirection={'row'} justifyContent={'space-around'} pt={20}>
        <Box>
          <Typography variant="h4" component='h2'>비더원</Typography>
          <Typography variant="body1" mt={3} sx={{ cursor: 'pointer' }}>• 제품 소개</Typography>
          <Typography variant="body1" mt={3} sx={{ cursor: 'pointer' }}>• 공지사항</Typography>
        </Box>
        <Box>
          <Typography variant="h4" component='h2'>고객문의</Typography>
          <Typography variant="body1" mt={3} sx={{ cursor: 'pointer' }}>• 광고 및 제휴 문의</Typography>
          <Typography variant="body1" mt={3} sx={{ cursor: 'pointer' }} onClick={() => { window.open(QAURL) }}>• 고객문의</Typography>
          <Typography variant="body1" mt={3} sx={{ cursor: 'pointer' }} onClick={() => { window.open(FAQURL) }}>• FAQ</Typography>
        </Box>
        <Box>
          <Typography variant="h4" component='h2'>모바일 버전</Typography>
          <Typography variant="body1" mt={3} sx={{ cursor: 'pointer' }}>• 모바일로 보기</Typography>
        </Box>
        <Box>
          <Typography variant="h4" component='h2'>SNS</Typography>
          <Typography variant="body1" mt={3} sx={{ cursor: 'pointer' }}>• 인스타그램</Typography>
          <Typography variant="body1" mt={3} sx={{ cursor: 'pointer' }}>• 블로그</Typography>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ display: 'flex', color: 'white', backgroundColor: 'white', height: '1px', width: '75%', mt: '5%' }} />
      <Box display={'flex'} flexDirection={'row'} mt={2} width={'70%'} justifyContent={'space-between'}>
        <Typography variant="body2" component={'h3'} sx={{ color: 'rgba(255,255,255,0.65)' }}>회사명:비더원</Typography>
        <Typography variant="body2" component={'h3'} sx={{ color: 'rgba(255,255,255,0.65)' }}>대표:최종민</Typography>
        <Typography variant="body2" component={'h3'} sx={{ color: 'rgba(255,255,255,0.65)' }}>사업자등록번호:481-71-00586</Typography>
        <Typography variant="body2" component={'h3'} sx={{ color: 'rgba(255,255,255,0.65)' }}>주소:경기도 안산시 단원구 산단로 326</Typography>
        <Typography variant="body2" component={'h3'} sx={{ color: 'rgba(255,255,255,0.65)' }}>대표전화:010-6567-2785</Typography>
        <Typography variant="body2" component={'h3'} sx={{ color: 'rgba(255,255,255,0.65)' }}>이메일:bthe1.official@gmail.com</Typography>
      </Box>
      <Box mt={15} mb={5}>
        <Typography sx={{ color: 'rgba(255,255,255,0.65)' }}>COPYRIGHT© {new Date().getFullYear()} BeTheOne. ALL RIGHT RESERVED.</Typography>
      </Box>
    </Box>
    {/* Mobile */}
    <Box display={{ mobile: 'flex', tablet: 'flex', laptop: 'none', desktop: 'none' }} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'auto'} width={'100%'} color={'white'} bgcolor={'#001635'} m={0} p={0}>
      <Box mt={5} width={'100%'} height={'auto'} display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
        <Box width={'fit-content'} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
          <Box>
            <Typography variant="body1" component='h2'>비더원</Typography>
            <Typography variant="subtitle2" mt={1} sx={{ cursor: 'pointer' }}>• 제품 소개</Typography>
            <Typography variant="subtitle2" mt={1} sx={{ cursor: 'pointer' }}>• 공지사항</Typography>
          </Box>
          <Box mt={5}>
            <Typography variant="body1" component='h2'>고객문의</Typography>
            <Typography variant="subtitle2" mt={1} sx={{ cursor: 'pointer' }}>• 광고 및 제휴 문의</Typography>
            <Typography variant="subtitle2" mt={1} sx={{ cursor: 'pointer' }} onClick={() => { window.open(FAQURL) }}>• 고객문의</Typography>
            <Typography variant="subtitle2" mt={1} sx={{ cursor: 'pointer' }}>• FAQ</Typography>
          </Box>
        </Box>
        <Box width={'fit-content'} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
          <Box>
            <Typography variant="body1" component='h2'>PC 버전</Typography>
            <Typography variant="subtitle2" mt={1} sx={{ cursor: 'pointer' }}>• PC화면으로 보기</Typography>
          </Box>
          <Box mt={5}>
            <Typography variant="body1" component='h2'>SNS</Typography>
            <Typography variant="subtitle2" mt={1} sx={{ cursor: 'pointer' }}>• 인스타그램</Typography>
            <Typography variant="subtitle2" mt={1} sx={{ cursor: 'pointer' }}>• 블로그</Typography>
          </Box>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ display: 'flex', color: 'white', backgroundColor: 'white', height: '1px', width: '75%', mt: '5%' }} />
      <Box display={'flex'} flexDirection={'column'} mt={5} justifyContent={'center'} alignItems={'flex-start'}>
        <Typography variant="caption" component={'h3'} sx={{ color: 'rgba(255,255,255,0.65)' }}>회사명:비더원 | 사업자등록번호:481-71-00586</Typography>
        <Typography variant="caption" component={'h3'} sx={{ color: 'rgba(255,255,255,0.65)' }}>대표:최종민 | 주소:경기도 안산시 단원구 산단로 326</Typography>
        <Typography variant="caption" component={'h3'} sx={{ color: 'rgba(255,255,255,0.65)' }}>대표전화:010-6567-2785 | 이메일:bthe1.official@gmail.com</Typography>
      </Box>
      <Box mt={10} mb={5}>
        <Typography variant="caption" component={'h5'} sx={{ color: 'rgba(255,255,255,0.65)' }}>COPYRIGHT© {new Date().getFullYear()} BeTheOne. ALL RIGHT RESERVED.</Typography>
      </Box>
    </Box>
  </div >
)

export default Footer;