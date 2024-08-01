import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { SxProps, Theme } from "@mui/system";
import theme from "@/theme/theme";

interface BenefitCardProps {
  href?: string;
  image?: string;
  subtitle: string[];
  maintitle: string;
  sx?: SxProps<Theme>;
}

const StyledCardMedia = styled(CardMedia)({
  component: "img",
  flexGrow: 1,
  backgroundColor: "white",
  opacity: 0.5,
});

const BenefitCard: React.FC<BenefitCardProps> = ({
  href,
  image,
  subtitle,
  maintitle,
  sx,
}) => {
  const cardContent = (
    <Card
      sx={{ 
        width: '100%', 
        display: "flex", 
        flexDirection: "column", 
        minHeight: "400px", 
        borderRadius: 7, 
        ...sx 
      }}
    >
      <CardMedia
        component="img"
        height="211"
        image="https://via.placeholder.com/100"
        alt="부착형 무선 데이터서버"
      />
      <CardContent
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "4px", 
          m: "0px", 
          maxHeight: '190px',
          justifyContent: "space-between",
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            fontSize: 16, 
            fontWeight: "600", 
            color: theme.palette.primary.main, 
            marginBottom: '24px' 
          }}
        >
          {maintitle}
        </Typography>
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start',
            maxHeight: '180px'
          }}
        >
          {subtitle.map((text, index) => (
            <Typography key={index} variant="subtitle1" sx={{ fontSize: 11, textAlign: 'start' }}>
              {text}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} passHref>
        <Box component="a" sx={{ textDecoration: "none", color: "inherit" }}>
          {cardContent}
        </Box>
      </Link>
    );
  }

  return cardContent;
};

export default BenefitCard;
