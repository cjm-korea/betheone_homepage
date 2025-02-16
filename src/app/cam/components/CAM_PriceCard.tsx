"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

type CAM_PriceCardProps = {
  chipLabel: string;
  title: string;
  features: string[];
  price: string;
  priceDetail: string;
  isPopular?: boolean;
  link: string;
};

export const CAM_PriceCard: React.FC<CAM_PriceCardProps> = ({
  chipLabel,
  title,
  features,
  price,
  priceDetail,
  link,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: '1fr'
      }}
    >
      <Card
        variant={"outlined"}
        sx={{
          bgcolor: "#FBFCFE",
          border: "1px solid #D2DBE4",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <Chip label={chipLabel} variant="outlined" sx={{ backgroundColor: "#0000000A", mb: '20px' }} />
        <Typography variant="h3" sx={{ fontWeight: 'medium', fontSize: '24px', mb: '20px' }}>{title}</Typography>
        <Divider />
        <List sx={{ color: '#898F96'}}>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <Check sx={{ mr: 1 }} />
              {feature}
            </ListItem>
          ))}
        </List>
        <Divider />
        <CardActions sx={{ flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
          <Typography variant="h6" sx={{ mr: { md: 'auto' }, mb: { xs: 1, md: 0 } }}>
            {price}{'₩'}
            <Typography variant="body2" color="text.secondary">{priceDetail}</Typography>
          </Typography>
          <Button variant="contained" endIcon={<KeyboardArrowRight />} href={link}>
            지금 시작하기
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
