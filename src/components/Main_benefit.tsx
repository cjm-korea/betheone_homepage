import { Box } from '@mui/material'
import { FC, RefObject } from 'react'

interface Main_benefitProps {

}

const Main_benefit = ({  }: Main_benefitProps) => (
  <div>
    {/* Desktop, Tablet */}
    <Box sx={{
      display: { mobile: 'none', tablet: 'none', laptop: 'flex', desktop: 'flex' },
      height: 'auto',
      width: '100%',
      backgroundColor: 'rgba(0,107,255,0.07)',
      margin: 0,
      padding: 0
    }}>
      <img src='images/main_benefit.png' width={'100%'} height={'auto'} />
    </Box>
    {/* Mobile */}
    <Box sx={{
      display: { mobile: 'flex', tablet: 'flex', laptop: 'none', desktop: 'none' },
      height: 'auto',
      width: '100%',
      backgroundColor: 'rgba(0,107,255,0.07)',
      margin: 0,
      padding: 0
    }}>
      <img src='images/main_benefit_mobile.png' width={'100%'} height={'auto'} />
    </Box>
  </div>
)

export default Main_benefit