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
        maxWidth: '400px', // 카드의 최대 너비 설정
        backgroundColor: 'transparent', // 배경 투명 설정
        borderRadius: '16px',
        overflow: 'hidden', // 경계선 밖의 내용 숨김
        // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 가벼운 그림자 추가
        // transition: 'transform 0.3s ease', // 호버 시 애니메이션 추가
        // '&:hover': {
        //   transform: 'scale(1.05)', // 호버 시 카드 확대
        // },
      }}
    >
      {/* 상단: 그림 */}
      <Box
        component="img"
        src={imageSrc}
        alt="Card Image"
        sx={{
          width: '100%',
          height: 'auto', // 유연한 높이 설정
          objectFit: 'cover',
        }}
      />

      {/* 하단: 텍스트 */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="body1" align="center">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ANDComposeCard;
