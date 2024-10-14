"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Box, SxProps, Theme } from "@mui/material";

interface InViewAnimateProps {
  children: ReactNode;
  initialY?: number;
  duration?: number;
  sx?: SxProps<Theme>;
}

const InViewAnimate: React.FC<InViewAnimateProps> = ({
  children,
  initialY = 30,
  duration = 0.8,
  sx = {},
}) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, translateY: initialY }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration, ease: "easeOut" }}
      viewport={{ once: true }}
      sx={{
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default InViewAnimate;
