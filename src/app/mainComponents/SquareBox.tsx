import React from "react";
import { Box, useTheme } from "@mui/material";

interface SquareBoxProps {
  src: string;
  alt: string;
  minSize?: number;
  maxSize?: number;
}

const SquareBox: React.FC<SquareBoxProps> = ({
  src,
  alt,
  minSize = 50,
  maxSize = 200,
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "calc(33.33% - 16px)",
        minWidth: minSize,
        maxWidth: maxSize,
        aspectRatio: "1 / 1",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default SquareBox;
