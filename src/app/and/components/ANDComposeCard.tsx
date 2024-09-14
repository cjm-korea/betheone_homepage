import React from 'react';
import { Box, Typography } from '@mui/material';

interface ANDComposeCardProps {
  imageSrc: string;
  text: string;
}

const ANDComposeCard: React.FC<ANDComposeCardProps> = ({ imageSrc, text }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'transparent',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt="Card Image"
        sx={{
          width: 300,
          height: 300,
          objectFit: 'contain',
        }}
      />
      <Box sx={{ padding: 2 }}>
        <Typography variant="body1" align="center" fontSize={'1.4rem'}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ANDComposeCard;
