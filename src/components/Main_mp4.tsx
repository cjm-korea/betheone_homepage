import { Box, Button, Typography } from '@mui/material'
import MainVideo from "../assets/main.mp4";

interface Mainmp4Props {
}

const FAQURL = process.env.REACT_APP_QAURL

const Mainmp4 = ({  }: Mainmp4Props) => {

    return (
        <div>
            {/* Desktop */}
            <Box sx={{
                position: 'relative',
                height: 'auto',
                width: '100%',
                left: 0,
                paddingTop: '76.5px',
                display: { mobile: 'none', tablet: 'none', laptop: 'flex', desktop: 'flex' },
            }}>
                <video autoPlay loop muted style={{ width: '100%', height: '80%' }}>
                    <source src={MainVideo} type="video/mp4" />
                </video>
                <Typography variant='h1' component={'h1'} sx={{ top: '34.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', width: '100%' }}>비더원</Typography>
                <Typography variant='h3' component={'h2'} sx={{ top: '54.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', width: '100%' }}>데이터 허브를 통해 모든 데이터를 <br /> 손쉽게 연결합니다.</Typography>
                <Box m={0} p={0} sx={{ top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 'auto' }}>
                    <Button variant='contained' sx={{ backgroundColor: 'white' }} onClick={() => { window.open(FAQURL) }}>문의하기</Button>
                </Box>
            </Box >
            {/* Tablet */}
            <Box sx={{
                position: 'relative',
                height: 'auto',
                width: '100%',
                left: 0,
                paddingTop: '88px',
                display: { mobile: 'none', tablet: 'flex', laptop: 'none', desktop: 'none' },
            }}>
                <video autoPlay loop muted style={{ width: '100%', height: '80%' }}>
                    <source src={MainVideo} type="video/mp4" />
                </video>
                <Typography variant='h4' component={'h1'} sx={{ top: '34.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', width: '100%' }}>비더원</Typography>
                <Typography variant='h5' component={'h2'} sx={{ top: '54.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', width: '100%' }}>데이터 허브를 통해 모든 데이터를 <br /> 손쉽게 연결합니다.</Typography>
                <Box m={0} p={0} sx={{ top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 'auto' }}>
                    <Button variant='contained' sx={{ backgroundColor: 'white' }} onClick={() => { window.open(FAQURL) }}>문의하기</Button>
                </Box>
            </Box >
            {/* Mobile */}
            <Box sx={{
                position: 'relative',
                height: 'auto',
                width: '100%',
                left: 0,
                paddingTop: '76px',
                display: { mobile: 'flex', tablet: 'none', laptop: 'none', desktop: 'none' },
            }}>
                <video autoPlay loop muted style={{ width: '100%', height: '80%' }}>
                    <source src={MainVideo} type="video/mp4" />
                </video>
                <Typography variant='subtitle1' component={'h1'} sx={{ paddingTop: '88px', top: '24.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', width: '100%' }}>비더원</Typography>
                <Typography variant='h6' component={'h2'} sx={{ paddingTop: '88px', top: '44.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center', width: '100%' }}>데이터 허브를 통해 모든 데이터를 <br /> 손쉽게 연결합니다.</Typography>
                <Box m={0} p={0} sx={{ paddingTop: '88px', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 'auto' }}>
                    <Button variant='contained' size='small' sx={{ backgroundColor: 'white' }} onClick={() => { window.open(FAQURL) }}>문의하기</Button>
                </Box>
            </Box >
        </div>
    )
}

export default Mainmp4