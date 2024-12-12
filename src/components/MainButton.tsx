'use client'

import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import Link from "next/link";
import { SxProps, Theme } from '@mui/system';

interface MainButtonProps {
  href?: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // onClick 추가
}

const CustomButton = styled(Button)(({ theme }) => ({
  aspectRatio: "3 / 1",
  width: "160px",
  height: "auto",
  padding: "12px",
  fontSize: "16px",
  borderRadius: 10,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const MainButton: React.FC<MainButtonProps> = ({ href, children, sx, onClick }) => {
  if (href) {
    return (
      <Link href={href} passHref>
          <CustomButton sx={sx} onClick={onClick}>  
            {children}
          </CustomButton>
      </Link>
    );
  }

  return (
    <CustomButton sx={sx} onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export default MainButton;
