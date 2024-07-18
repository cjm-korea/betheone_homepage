import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import { SxProps, Theme } from '@mui/system';
// import Logopath from "/public/Logo.png";

interface ProductCardProps {
  href?: string;
  image: string;
  subtitle: string;
  maintitle: string;
  sx?: SxProps<Theme>;
}

const StyledCardMedia = styled(CardMedia)({
  component: "img",
  flexGrow: 1,
  backgroundColor: '#D9D9D9',
  opacity: 0.5
});

const ProductCard: React.FC<ProductCardProps> = ({ href, image, subtitle, maintitle, sx }) => {
  const cardContent = (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', ...sx }}>
        <CardMedia
          component="img"
          height="340"
          width='auto'
          image="https://via.placeholder.com/150"
          alt="부착형 무선 데이터서버"
        />
      <StyledCardMedia image={image} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '4px', p: '12px' }}>
        <Typography variant="subtitle1" sx={{ fontSize: 16 }}>
          {subtitle}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 20, fontWeight: '600' }}>
          {maintitle}
        </Typography>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} passHref>
        <Box component="a" sx={{ textDecoration: 'none', color: 'inherit' }}>
          {cardContent}
        </Box>
      </Link>
    );
  }
  
  return cardContent;
};

export default ProductCard;
