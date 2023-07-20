import { Box } from '@mui/material'
import React from 'react'

export const Base = (props: {
  children: React.ReactNode
}) => {
  return (
    <Box sx={{
      marginX: 20
    }}>
      {props.children}
    </Box>
  )
}
