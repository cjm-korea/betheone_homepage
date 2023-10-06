import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import { Box, Button, IconButton, Typography } from "@mui/material"

interface Main_contactProps {

}

const Main_contact = ({ }: Main_contactProps) => (
    <div>
        <div>
            {/* Desktop, Tablet */}
            <Box sx={{
                position: 'relative',
                display: 'flex',
                height: 'auto',
                width: '100%',
                backgroundColor: 'rgba(0,107,255,0.07)'
            }}>
                <img src='images/main_contact.png' width={'100%'} height={'auto'} />
                <Typography variant='h2' component={'h1'} sx={{ top: '34.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center' }}>비더원에 문의하세요!</Typography>
                <Button variant='contained' sx={{ backgroundColor: 'white', color: 'black', ":hover": { backgroundColor: 'white' }, top: '54.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', textAlign: 'center' }}>더보기</Button>
                <Box m={0} p={0} sx={{ top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 'fit-content' }}>
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
                            <MailOutlineIcon sx={{ width: '24px', height: '24px'}} />
                        </IconButton>
                        <Box ml={1} p={0} sx={{ zIndex: '1', display: 'flex', alignItems: 'start', flexDirection: 'column', width: 'fit-content' }}>
                            <Typography variant='subtitle1' component={'h3'} sx={{  zIndex: '1', color: 'white', fontWeight: '750', textAlign: 'center'}}>메일주소</Typography>
                            <Typography variant='subtitle1' component={'h3'} sx={{  zIndex: '1', color: 'white', textAlign: 'center' }}>bthe1.official@gmail.com</Typography>
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
                            <CallOutlinedIcon sx={{ width: '24px', height: '24px'}} />
                        </IconButton>
                        <Box ml={1} p={0} sx={{ zIndex: '1', display: 'flex', alignItems: 'start', flexDirection: 'column', width: 'fit-content' }}>
                            <Typography variant='subtitle1' component={'h3'} sx={{  zIndex: '1', color: 'white', fontWeight: '750', textAlign: 'center'}}>전화번호</Typography>
                            <Typography variant='subtitle1' component={'h3'} sx={{  zIndex: '1', color: 'white', textAlign: 'center' }}>010-4798-9514</Typography>
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
                            <LocationOnOutlinedIcon sx={{ width: '24px', height: '24px'}} />
                        </IconButton>
                        <Box ml={1} p={0} sx={{ zIndex: '1', display: 'flex', alignItems: 'start', flexDirection: 'column', width: 'fit-content' }}>
                            <Typography variant='subtitle1' component={'h3'} sx={{  zIndex: '1', color: 'white', fontWeight: '750', textAlign: 'center'}}>위치</Typography>
                            <Typography variant='subtitle1' component={'h3'} sx={{  zIndex: '1', color: 'white', textAlign: 'center' }}>경기도 안산시 단원구 산단로 326</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* Mobile */}
        </div>
    </div>
)

export default Main_contact