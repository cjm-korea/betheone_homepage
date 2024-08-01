// import React from 'react';
// import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
// import { styled } from '@mui/system';
// import Link from 'next/link';
// import { SxProps, Theme } from '@mui/system';
// // import Logopath from "/public/Logo.png";

// interface ProductCardProps {
//   href?: string;
//   image: string;
//   subtitle: string;
//   maintitle: string;
//   sx?: SxProps<Theme>;
// }

// const StyledCardMedia = styled(CardMedia)({
//   component: "img",
//   flexGrow: 1,
//   backgroundColor: '#D9D9D9',
//   opacity: 0.5
// });

// const ProductCard: React.FC<ProductCardProps> = ({ href, image, subtitle, maintitle, sx }) => {
//   const cardContent = (
//     <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', ...sx }}>
//         <CardMedia
//           component="img"
//           height="340"
//           width='auto'
//           image="https://via.placeholder.com/150"
//           alt="부착형 무선 데이터서버"
//         />
//       <StyledCardMedia image={image} />
//       <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '4px', p: '12px' }}>
//         <Typography variant="subtitle1" sx={{ fontSize: 16 }}>
//           {subtitle}
//         </Typography>
//         <Typography variant="h5" sx={{ fontSize: 20, fontWeight: '600' }}>
//           {maintitle}
//         </Typography>
//       </CardContent>
//     </Card>
//   );

//   if (href) {
//     return (
//       <Link href={href} passHref>
//         <Box component="a" sx={{ textDecoration: 'none', color: 'inherit' }}>
//           {cardContent}
//         </Box>
//       </Link>
//     );
//   }

//   return cardContent;
// };

// export default ProductCard;

import React from "react";
import { Box, Typography } from "@mui/material";

interface ProductCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  colorConcept: "white" | "black";
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  subtitle,
  imageSrc,
  colorConcept,
}) => {
  const isWhite = colorConcept === "white";

  return (
    <Box
      sx={{
        width: "480px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "18px",
        overflow: "hidden",
        transition: "all .3s cubic-bezier(0,0,.5,1)",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "2px 4px 12px #00000014",
          transform: "scale(1.01)",
        },
        backgroundColor: isWhite ? "white" : "black",
        color: isWhite ? "black" : "white",
      }}
    >
      {/* 상단 영역 */}
      <Box
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          p: '30px',
          height: 'auto'
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: 16,
            fontWeight: "regular",
            marginBottom: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: 28,
            fontWeight: "bold"
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* 하단 영역 */}
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          // borderRadius: '18px',
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={imageSrc}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderBottomLeftRadius: "18px",
            borderBottomRightRadius: "18px",
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductCard;
