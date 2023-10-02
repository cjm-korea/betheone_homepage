import { Box } from "@mui/material"

interface Main_usingProps {

}

const Main_using = ({ }: Main_usingProps) => (
    <div>
        {/* Desktop, Tablet */}
        <Box sx={{
            display: 'flex',
            height: 'auto',
            width: '100%',
            backgroundColor: 'rgba(0,107,255,0.07)',
            margin: 0,
            padding: 0
        }}>
            <img src='images/main_using.png' width={'100%'} height={'auto'} />
        </Box>
        {/* Mobile */}
    </div>
)

export default Main_using