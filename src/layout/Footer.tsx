import { Box, Button } from "@mui/material"

interface FooterProps {
  
}

const Footer = ({}: FooterProps) => (
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
            <img src='images/Footer.png' width={'100%'} height={'auto'} />
        </Box>
        {/* Mobile */}
  </div>
)

export default Footer