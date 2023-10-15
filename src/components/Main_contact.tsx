import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import { Box, Button, IconButton, Typography } from "@mui/material"

interface Main_contactProps {
}

const FAQURL = process.env.REACT_APP_QAURL

const Main_contact = ({ }: Main_contactProps) => (
    <div>
        {/* Desktop */}
        <Box sx={{
            position: 'relative',
            display: { mobile: 'none', tablet: 'none', laptop: 'flex', desktop: 'flex' },
            height: 'auto',
            width: '100%',
            backgroundColor: 'rgba(0,107,255,0.07)'
        }}>
            <img src='/images/main_contact.png' width={'100%'} height={'auto'} />
            <Typography variant='h3' component={'h1'} sx={{ top: '34.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center' }}>비더원에 문의하세요!</Typography>
            <Button onClick={() => { window.open(FAQURL) }} variant='contained' sx={{ backgroundColor: 'white', color: 'black', ":hover": { backgroundColor: 'white' }, top: '54.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', textAlign: 'center' }}>더보기</Button>
            <Box m={0} px={0} sx={{ top: '75%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '80%' }}>
                <Box ml={4} p={0} sx={{ zIndex: '1', position: 'static', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 'fit-content' }}>
                    <IconButton aria-label='mail' sx={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'white',
                        color: 'black',
                        mr: '5px',
                        ":hover": {
                            backgroundColor: 'rgba(255,255,255,0.8)'
                        }
                    }}>
                        <MailOutlineIcon sx={{ width: '24px', height: '24px' }} />
                    </IconButton>
                    <Box ml={1} p={0} sx={{ zIndex: '1', display: 'flex', alignItems: 'start', flexDirection: 'column', width: 'fit-content' }}>
                        <Typography variant='subtitle1' component={'h3'} sx={{ zIndex: '1', color: 'white', fontWeight: '750', textAlign: 'center' }}>메일주소</Typography>
                        <Typography variant='subtitle1' component={'h3'} sx={{ zIndex: '1', color: 'white', textAlign: 'center' }}>bthe1.official@gmail.com</Typography>
                    </Box>
                </Box>
                <Box ml={4} p={0} sx={{ zIndex: '1', position: 'static', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 'fit-content' }}>
                    <IconButton aria-label='mail' sx={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'white',
                        color: 'black',
                        mr: '5px',
                        ":hover": {
                            backgroundColor: 'rgba(255,255,255,0.8)'
                        }
                    }}>
                        <CallOutlinedIcon sx={{ width: '24px', height: '24px' }} />
                    </IconButton>
                    <Box ml={1} p={0} sx={{ zIndex: '1', display: 'flex', alignItems: 'start', flexDirection: 'column', width: 'fit-content' }}>
                        <Typography variant='subtitle1' component={'h3'} sx={{ zIndex: '1', color: 'white', fontWeight: '750', textAlign: 'center' }}>전화번호</Typography>
                        <Typography variant='subtitle1' component={'h3'} sx={{ zIndex: '1', color: 'white', textAlign: 'center' }}>010-6567-2785</Typography>
                    </Box>
                </Box>
                <Box ml={4} p={0} sx={{ zIndex: '1', position: 'static', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 'fit-content' }}>
                    <IconButton aria-label='mail' sx={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'white',
                        color: 'black',
                        mr: '5px',
                        ":hover": {
                            backgroundColor: 'rgba(255,255,255,0.8)'
                        }
                    }}>
                        <LocationOnOutlinedIcon sx={{ width: '24px', height: '24px' }} />
                    </IconButton>
                    <Box ml={1} p={0} sx={{ zIndex: '1', display: 'flex', alignItems: 'start', flexDirection: 'column', width: 'fit-content' }}>
                        <Typography variant='subtitle1' component={'h3'} sx={{ zIndex: '1', color: 'white', fontWeight: '750', textAlign: 'center' }}>위치</Typography>
                        <Typography variant='subtitle1' component={'h3'} sx={{ zIndex: '1', color: 'white', textAlign: 'center' }}>경기도 안산시 단원구 산단로 326</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        {/* Tablet */}
        <Box sx={{
            position: 'relative',
            display: { mobile: 'none', tablet: 'flex', laptop: 'none', desktop: 'none' },
            height: 'auto',
            width: '100%',
            backgroundColor: 'rgba(0,107,255,0.07)'
        }}>
            <img src='/images/main_contact.png' width={'100%'} height={'auto'} />
            <Typography variant='h4' component={'h1'} sx={{ top: '34.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center' }}>비더원에 문의하세요!</Typography>
            <Box m={0} px={20} sx={{ top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                <Box ml={0} p={0} sx={{ zIndex: '1', position: 'static', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 'fit-content' }}>
                    <IconButton aria-label='mail' sx={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'white',
                        color: 'black',
                        mr: '5px',
                        ":hover": {
                            backgroundColor: 'rgba(255,255,255,0.8)'
                        }
                    }}>
                        <MailOutlineIcon sx={{ width: '24px', height: '24px' }} />
                    </IconButton>
                    <Box ml={1} p={0} sx={{ zIndex: '1', display: 'flex', alignItems: 'start', flexDirection: 'column', width: 'fit-content' }}>
                        <Typography variant='subtitle1' component={'h3'} sx={{ zIndex: '1', color: 'white', fontWeight: '750', textAlign: 'center' }}>메일주소</Typography>
                        <Typography variant='subtitle1' component={'h3'} sx={{ zIndex: '1', color: 'white', textAlign: 'center' }}>bthe1.official@gmail.com</Typography>
                    </Box>
                </Box>
                <Box ml={4} p={0} sx={{ zIndex: '1', position: 'static', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 'fit-content' }}>
                    <IconButton aria-label='mail' sx={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'white',
                        color: 'black',
                        mr: '5px',
                        ":hover": {
                            backgroundColor: 'rgba(255,255,255,0.8)'
                        }
                    }}>
                        <CallOutlinedIcon sx={{ width: '24px', height: '24px' }} />
                    </IconButton>
                    <Box ml={1} p={0} sx={{ zIndex: '1', display: 'flex', alignItems: 'start', flexDirection: 'column', width: 'fit-content' }}>
                        <Typography variant='subtitle1' component={'h3'} sx={{ zIndex: '1', color: 'white', fontWeight: '750', textAlign: 'center' }}>전화번호</Typography>
                        <Typography variant='subtitle1' component={'h3'} sx={{ zIndex: '1', color: 'white', textAlign: 'center' }}>010-6567-2785</Typography>
                    </Box>
                </Box>
                <Box ml={4} p={0} sx={{ zIndex: '1', position: 'static', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 'fit-content' }}>
                    <IconButton aria-label='mail' sx={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'white',
                        color: 'black',
                        mr: '5px',
                        ":hover": {
                            backgroundColor: 'rgba(255,255,255,0.8)'
                        }
                    }}>
                        <LocationOnOutlinedIcon sx={{ width: '24px', height: '24px' }} />
                    </IconButton>
                    <Box ml={1} p={0} sx={{ zIndex: '1', display: 'flex', alignItems: 'start', flexDirection: 'column', width: 'fit-content' }}>
                        <Typography variant='subtitle1' component={'h3'} sx={{ zIndex: '1', color: 'white', fontWeight: '750', textAlign: 'center' }}>위치</Typography>
                        <Typography variant='subtitle1' component={'h3'} sx={{ zIndex: '1', color: 'white', textAlign: 'center' }}>경기도 안산시 단원구 산단로 326</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        {/* Mobile */}
        <Box sx={{
            position: 'relative',
            display: { mobile: 'flex', tablet: 'none', laptop: 'none', desktop: 'none' },
            height: '15rem',
            width: '100%',
            backgroundColor: 'rgba(0,107,255,0.07)'
        }}>
            <img src='/images/main_contact.png' width={'100%'} height={'auto'} />
            <Typography variant='h6' component={'h1'} width={'200px'} sx={{ top: '24.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center' }}>비더원에 문의하세요!</Typography>
            <Box m={0} sx={{ top: '60%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: 'fit-content' }}>
                <Box mt={1} p={0} sx={{ zIndex: '1', position: 'static', display: 'flex', alignItems: 'center', width: '100%' }}>
                    <IconButton aria-label='mail' sx={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: 'white',
                        color: 'black',
                        mr: '5px',
                        ":hover": {
                            backgroundColor: 'rgba(255,255,255,0.8)'
                        }
                    }}>
                        <MailOutlineIcon sx={{ width: '24px', height: '24px' }} />
                    </IconButton>
                    <Box ml={0} p={0} sx={{ zIndex: '1', display: 'flex', alignItems: 'start', flexDirection: 'column', width: 'fit-content' }}>
                        <Typography variant='caption' component={'h3'} sx={{ zIndex: '1', color: 'white', fontWeight: '750', textAlign: 'center' }}>메일주소</Typography>
                        <Typography variant='caption' component={'h3'} sx={{ zIndex: '1', color: 'white', textAlign: 'center' }}>bthe1.official@gmail.com</Typography>
                    </Box>
                </Box>
                <Box mt={1} p={0} sx={{ zIndex: '1', position: 'static', display: 'flex', alignItems: 'center', width: '100%' }}>
                    <IconButton aria-label='mail' sx={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: 'white',
                        color: 'black',
                        mr: '5px',
                        ":hover": {
                            backgroundColor: 'rgba(255,255,255,0.8)'
                        }
                    }}>
                        <CallOutlinedIcon sx={{ width: '24px', height: '24px' }} />
                    </IconButton>
                    <Box ml={0} p={0} sx={{ zIndex: '1', display: 'flex', alignItems: 'start', flexDirection: 'column', width: 'fit-content' }}>
                        <Typography variant='caption' component={'h3'} sx={{ zIndex: '1', color: 'white', fontWeight: '750', textAlign: 'center' }}>전화번호</Typography>
                        <Typography variant='caption' component={'h3'} sx={{ zIndex: '1', color: 'white', textAlign: 'center' }}>010-4798-9514</Typography>
                    </Box>
                </Box>
                <Box mt={1} p={0} sx={{ zIndex: '1', position: 'static', display: 'flex', alignItems: 'center', width: '100%' }}>
                    <IconButton aria-label='mail' sx={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: 'white',
                        color: 'black',
                        mr: '5px',
                        ":hover": {
                            backgroundColor: 'rgba(255,255,255,0.8)'
                        }
                    }}>
                        <LocationOnOutlinedIcon sx={{ width: '24px', height: '24px' }} />
                    </IconButton>
                    <Box ml={0} p={0} sx={{ zIndex: '1', display: 'flex', alignItems: 'start', flexDirection: 'column', width: 'fit-content' }}>
                        <Typography variant='caption' component={'h3'} sx={{ zIndex: '1', color: 'white', fontWeight: '750', textAlign: 'center' }}>위치</Typography>
                        <Typography variant='caption' component={'h3'} sx={{ zIndex: '1', color: 'white', textAlign: 'center', width: '200px' }}>경기도 안산시 단원구 산단로 326</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </div>
)

export default Main_contact