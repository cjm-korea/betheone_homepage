import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        {/* 좌측 타이포그래피 (질문) */}
        <Typography variant="body1">{question}</Typography>

        {/* 우측 화살표 */}
        <IconButton
          sx={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      {/* 하단 답변 (Collapse 애니메이션 사용) */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ padding: 2 }}>
          <Typography variant="body2">{answer}</Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

const FAQSection: React.FC = () => {
  const faqItems = [
    {
      question: "데이터 서버와 이 제품이 같은 건가요?",
      answer: "밥을 많이 먹어서 입니다^^",
    },
    {
      question: "데이터 전송 시 끊김이 발생하지 않나요?",
      answer: '시스템 상으로 데이터 전송이 끊긴다면 즉시 알람이 뜨게 됩니다.<br/>일반 공유기나 메쉬 망으로 사용 시 대역폭, 데이터 처리 등으로 인해 1시간 이상 DNC가공이 어렵고 위험하지만,저희 제품은 9시간 이상 DNC모드 테스트를 통해 현재 다수의 기업에서 매우 만족하며 사용 중입니다.',
    },
    {
      question: "USB나 CF카드보다 데이터 전송 속도가 더 느리지 않나요?",
      answer: "질문 3에 대한 답변입니다.",
    },
  ];

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      {/* 상단 타이포그래피 */}
      <Typography variant="h4" sx={{ textAlign: "left", mb: 4 }}>
        자주 묻는 질문
      </Typography>

      {/* FAQ 아이템 목록 */}
      {faqItems.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </Box>
  );
};

export default FAQSection;
