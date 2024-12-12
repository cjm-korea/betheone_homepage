import React from "react";
import { Box, Typography } from "@mui/material";

interface DescriptionCardProps {
  Icon: string;
  subtitle: string;
  title: string;
  descriptions: string[];
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  Icon,
  subtitle,
  title,
  descriptions,
}) => {
  return (
    <Box
      sx={{
        width: 292,
        height: 292,
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        padding: "24px 0",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {/* 위 영역 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        {/* 아이콘 */}
        <Box
          component="img"
          src={Icon}
          alt="icon"
          sx={{
            width: "48px",
            height: "48px",
          }}
        />
        {/* 서브타이틀 */}
        <Typography
          sx={{
            fontSize: "12px",
            color: "#000000",
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* 아래 영역 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "12px",
          gap: "6px",
        }}
      >
        {/* 타이틀 */}
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#006bff",
          }}
        >
          {title}
        </Typography>

        {/* 설명 목록 */}
        {descriptions.map((desc, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: "12px",
              color: "#000000",
            }}
          >
            {`• ${desc}`}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default DescriptionCard;
