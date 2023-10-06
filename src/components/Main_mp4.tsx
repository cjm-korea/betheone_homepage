import { Box, Button, Typography } from '@mui/material'
import MainVideo from "../assets/main.mp4";

interface Mainmp4Props {

}

const Mainmp4 = ({ }: Mainmp4Props) => (
    <div>
        {/* Desktop */}
        <Box sx={{
            position: 'relative',
            height: 'auto',
            width: '100%',
            left: 0,
            // marginTop: '80px',
            display: 'flex',
        }}>
            <video autoPlay loop muted style={{ width: '100%', height: '80%' }}>
                <source src={MainVideo} type="video/mp4" />
            </video>
            <Typography variant='h1' component={'h1'} sx={{ top: '34.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center' }}>비더원</Typography>
            <Typography variant='h3' component={'h2'} sx={{ top: '54.69%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', color: 'white', textAlign: 'center' }}>데이터 허브를 통해 모든 데이터를 <br /> 손쉽게 연결합니다.</Typography>
            <Box m={0} p={0} sx={{ top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '354px' }}>
                {/* <Button variant='outlined' color='primary' sx={{ color: 'white', border: '3px solid', borderRadius: '15px' }}>제품구매</Button>
                <Button variant='outlined' color='primary' sx={{ color: 'white', border: '3px solid', borderRadius: '15px' }}>문의하기</Button> */}
                <Button variant='contained'>문의하기</Button>
            </Box>
        </Box >
        {/* Tablet */}

        {/* Mobile */}
    </div>
)

export default Mainmp4