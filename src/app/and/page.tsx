"use client";

import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function AND() {
  const [isSticky, setIsSticky] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !stickyRef.current || !bottomRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    const bottomObserver = new IntersectionObserver(
      ([entry]) => {
        setIsBottom(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    const target = containerRef.current;
    const bottomTarget = bottomRef.current;
    observer.observe(target);
    bottomObserver.observe(bottomTarget);

    return () => {
      if (observer) observer.unobserve(target);
      if (bottomObserver) bottomObserver.unobserve(bottomTarget);
    };
  }, []);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100vw",
            height: "auto",
            mb: 6,
            backgroundColor: "#F5F5F7",
          }}
        >
          <Box
            sx={{
              px: "170px",
              py: "60px",
              height: "auto",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Typography
              sx={{ color: "#b64400", fontSize: "17px", fontWeight: "medium" }}
            >
              더 빠르고, 간편하고, 정확하게.
            </Typography>
            <Typography
              sx={{ color: "black", fontSize: "40px", fontWeight: "bold" }}
            >
              All New DNC
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", height: "100%", flexDirection: "row" }}>
          {/* 좌측 이미지 */}
          <Box
            ref={stickyRef}
            sx={{
              flex: "0 0 auto",
              minWidth: '592px',
              position: isSticky && !isBottom ? "sticky" : "static",
              top: 0,
              width: "592px",
              height: "fit-content",
              overflow: "hidden",
              transition: "position 0.3s ease",
              maxWidth: '2560px',
              maxHeight: '1440px',
            }}
          >
            <Box sx={{ minWidth: '592px', minHeight: 'fit-content' }}>
              <Box
                component="img"
                src={"https://via.placeholder.com/2560x1440"}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "18px",
                }}
              />
            </Box>
          </Box>
          {/* 우측 내용 */}
          <Box
            ref={containerRef}
            sx={{
              flex: 1,
              paddingX: 2,
              overflowY: "auto",
              height: "fit-content",
            }}
          >
            {[...Array(7)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  marginBottom: 4,
                  padding: 2,
                  border: "1px solid #ddd",
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  제목 {index + 1}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1">
                    내용 {index + 1} Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Phasellus imperdiet, nulla at auctor
                    scelerisque, turpis purus fringilla libero, eget ultrices
                    est dui vel felis. Suspendisse potenti.
                  </Typography>
                </Box>
                <Box sx={{ padding: 2, border: "1px solid #ccc" }}>
                  <Typography variant="body2">
                    추가 정보 {index + 1} More details here.
                  </Typography>
                </Box>
              </Box>
            ))}
            <Box ref={bottomRef} />
          </Box>
        </Box>
        {[...Array(7)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  marginBottom: 4,
                  padding: 2,
                  border: "1px solid #ddd",
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  제목 {index + 1}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1">
                    내용 {index + 1} Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Phasellus imperdiet, nulla at auctor
                    scelerisque, turpis purus fringilla libero, eget ultrices
                    est dui vel felis. Suspendisse potenti.
                  </Typography>
                </Box>
                <Box sx={{ padding: 2, border: "1px solid #ccc" }}>
                  <Typography variant="body2">
                    추가 정보 {index + 1} More details here.
                  </Typography>
                </Box>
              </Box>
            ))}
      </Box>
    </Container>
  );
}
