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
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
      <Box sx={{ padding: 2 }}>
        <Typography variant="body1" align="center">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ANDComposeCard;
