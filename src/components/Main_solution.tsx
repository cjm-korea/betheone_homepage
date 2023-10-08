import { Box, Typography } from '@mui/material'

interface MainsolutionProps {

}

const Mainsolution = ({ }: MainsolutionProps) => (
  <div>
    {/* Desktop */}
    <Box m={0} p={0} sx={{
      height: 'calc(60vh)/3',
      width: '100%',
      display: { mobile: 'none', tablet: 'none', laptop: 'flex', desktop: 'flex' },
      position: 'relative'
    }}>
      <img src="/images/main_solution.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
      <Typography variant='h1' component={'h1'} sx={{ top: '24.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', textDecoration: 'underline' }}>Solution</Typography>
      <Typography variant='h5' component={'h2'} sx={{ top: '50.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', width: '100%' }}><Box component="span" fontWeight='750' display='inline'>AND</Box>는 공작기기에 부착되어 <br /> 무선통신을 가능하도록 도와주는 기기로</Typography>
      <Typography variant='h5' component={'h2'} sx={{ top: '70.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', width: '100%' }}>제조 공장에는 <Box component="span" fontWeight='750' display='inline'>리드타임 감소 효과</Box>를 <br /> 스마트팩토리에는 <Box component="span" fontWeight='750' display='inline'>유효한 데이터</Box>를 제공하여 줍니다.</Typography>
    </Box>
    {/* Tablet */}
    <Box m={0} p={0} sx={{
      height: 'calc(60vh)/3',
      width: '100%',
      display: { mobile: 'none', tablet: 'flex', laptop: 'none', desktop: 'none' },
      position: 'relative'
    }}>
      <img src="/images/main_solution.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
      <Typography variant='h3' component={'h1'} sx={{ top: '34.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', textDecoration: 'underline' }}>Solution</Typography>
      <Typography variant='subtitle1' component={'h2'} sx={{ top: '50.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', width: '100%' }}><Box component="span" fontWeight='750' display='inline'>AND</Box>는 공작기기에 부착되어 <br /> 무선통신을 가능하도록 도와주는 기기로</Typography>
      <Typography variant='subtitle1' component={'h2'} sx={{ top: '70.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', width: '100%' }}>제조 공장에는 <Box component="span" fontWeight='750' display='inline'>리드타임 감소 효과</Box>를 <br /> 스마트팩토리에는 <Box component="span" fontWeight='750' display='inline'>유효한 데이터</Box>를 제공하여 줍니다.</Typography>
    </Box>
    {/* Mobile */}
    <Box m={0} p={0} sx={{
      height: 'calc(60vh)/3',
      width: '100%',
      display: { mobile: 'flex', tablet: 'none', laptop: 'none', desktop: 'none' },
      position: 'relative'
    }}>
      <img src="/images/main_solution_mobile.png" alt="" style={{ objectFit: 'cover', width: '100vw', height: '100%' }} />
      <Typography variant='h4' component={'h1'} sx={{ top: '20.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', textDecoration: 'underline' }}>Solution</Typography>
      <Typography variant='body1' component={'h2'} sx={{ top: '45.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', width: '100%' }}><Box component="span" fontWeight='750' display='inline'>AND</Box>는 공작기기에 부착되어 <br /> 무선통신을 가능하도록 도와주는 기기로</Typography>
      <Typography variant='body1' component={'h2'} sx={{ top: '62.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', width: '100%' }}>제조 공장에는 <Box component="span" fontWeight='750' display='inline'>리드타임 감소 효과</Box>를 <br /> 스마트팩토리에는 <Box component="span" fontWeight='750' display='inline'>유효한 데이터</Box>를 제공하여 줍니다.</Typography>
    </Box>
  </div>
)

export default Mainsolution