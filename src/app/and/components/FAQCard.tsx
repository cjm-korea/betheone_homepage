"use client"

import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection: React.FC = () => {
  const faqItems = [
    {
      question: "데이터 서버와 이 제품이 같은 건가요?",
      answer:
        "다릅니다. 데이터 서버 옵션의 경우 현장 모든 기계들을 랜선으로 연결해야하지만,<br/>무선 데이터 서버는 각 기계마다 임베디드 보드가 부착되어 <b>현장에서 유선 랜 인프라가 구축되지 않아도 됩니다.</b>",
    },
    {
      question: "데이터 전송 시 끊김이 발생하지 않나요?",
      answer:
        "시스템 상으로 데이터 전송이 끊긴다면 즉시 알람이 뜨게 됩니다.<br/>일반 공유기나 메쉬 망으로 사용 시 대역폭, 데이터 처리 등으로 인해 1시간 이상 DNC가공이 어렵고 위험하지만,<br/>저희 제품은 <b>24시간 이상 검증받은 연속가공 테스트</b>를 통해 현재 다수의 기업에서 매우 만족하며 사용 중입니다.",
    },
    {
      question: "USB나 CF카드보다 데이터 전송 속도가 더 느리지 않나요?",
      answer:
        "오히려 데이터 전송 속도는 훨씬 빠릅니다.<br/>RS232 전송(9600보드레이트) 대비 약 <b>538배 빠릅니다.</b><br/>LAN : 252.36KB/s, RS232 : 약 0.46875KB/s",
    },
  ];

  return (
    <Box
      sx={{
        mx: {
          xs: "30px",
          lg: "170px",
        },
        my: "60px",
        padding: 2,
      }}
    >
      <Box
        sx={{
          padding: { md: 2, xs: 0 },
          borderTop: "solid 1.5px",
          borderColor: "#d2d2d7",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "left", mb: 4, mt: 4 }}>
          자주 묻는 질문
        </Typography>

        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </Box>
    </Box>
  );
};
export default FAQSection;

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ borderBottom: "1px solid #ccc", mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          cursor: "pointer",
        }}
        onClick={handleToggle}
      >
        <Typography variant="body1">{question}</Typography>
        <IconButton
          sx={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ padding: 2 }}>
          <Typography
            variant="body2"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </Box>
      </Collapse>
    </Box>
  );
};