import { Box, Button, Divider, Typography } from "@mui/material"

interface FooterProps {

}


const Footer = ({}: FooterProps) => (
  <div>
    {/* Desktop, Tablet */}
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'auto'} width={'100%'} color={'white'} bgcolor={'#001635'} m={0} p={0}>
      <Box width={'100%'} height={'auto'} pt={20}>비더원</Box>
      <Divider variant="middle" sx={{ display: 'flex', color: 'white', backgroundColor: 'white', height: '1px', width: '100%', mt: '5%'}}/>
      <Box display={'flex'} flexDirection={'row'} mt={2} width={'70%'} justifyContent={'space-between'}>
        <Typography variant="body2" component={'h3'} sx={{color: 'rgba(255,255,255,0.65)'}}>회사명:비더원</Typography>
        <Typography variant="body2" component={'h3'} sx={{color: 'rgba(255,255,255,0.65)'}}>대표:최종민</Typography>
        <Typography variant="body2" component={'h3'} sx={{color: 'rgba(255,255,255,0.65)'}}>사업자등록번호:481-71-00586</Typography>
        <Typography variant="body2" component={'h3'} sx={{color: 'rgba(255,255,255,0.65)'}}>주소:경기도 안산시 단원구 산단로 326</Typography>
        <Typography variant="body2" component={'h3'} sx={{color: 'rgba(255,255,255,0.65)'}}>대표전화:010-6567-2785</Typography>
        <Typography variant="body2" component={'h3'} sx={{color: 'rgba(255,255,255,0.65)'}}>이메일:bthe1.official@gmail.com</Typography>
      </Box>
      <Box mt={15} mb={5}>
        <Typography sx={{color: 'rgba(255,255,255,0.65)'}}>COPYRIGHT© {new Date().getFullYear()} BeTheOne. ALL RIGHT RESERVED.</Typography>
      </Box>
    </Box>
    
    {/* Mobile */}
  </div>
)

export default Footer;