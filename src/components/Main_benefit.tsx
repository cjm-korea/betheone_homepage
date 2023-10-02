import { Box } from '@mui/material'
import { FC } from 'react'

interface Main_benefitProps {

}

const Main_benefit = ({ }: Main_benefitProps) => (
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
      <img src='images/product_2.png' width={'100%'} height={'auto'} />
    </Box>
    {/* Mobile */}
  </div>
)

export default Main_benefit