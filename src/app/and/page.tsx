"use client";

import { Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function AND() {
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  // 모델 선택 핸들러
  const handleSelectModel = (model: string) => {
    setSelectedModel(model);
  };

  const component2Ref = useRef<HTMLDivElement>(null);
  const component3Ref = useRef<HTMLDivElement>(null);
  const component4Ref = useRef<HTMLDivElement>(null);

  // 숫자에 따라 해당 컴포넌트로 스크롤
  const handleSelectSection = (sectionNumber: number) => {
    let targetRef: React.RefObject<HTMLDivElement> | null = null;

    switch (sectionNumber) {
      case 2:
        targetRef = component2Ref;
        break;
      case 3:
        targetRef = component3Ref;
        break;
      case 4:
        targetRef = component4Ref;
        break;
      default:
        return;
    }

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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

    const target = containerRef.current;
    observer.observe(target);

    return () => {
      if (observer) observer.unobserve(target);
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
            pt: 6
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
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: 'space-between',
              pt: "60px",
              width: "100%"
            }}>
              {/* 좌측 이미지 */}
              <Box
                ref={stickyRef}
                sx={{
                  flex: 1,
                  minWidth: "400px",
                  position: !isSticky ? "sticky" : "static",
                  top: !isSticky ? "25%" : "auto",
                  height: "fit-content",
                  overflow: "hidden",
                  transition: "position 0.3s ease",
                  maxWidth: "592px",
                }}
              >
                <Box sx={{ minWidth: '400px', minHeight: 'fit-content' }}>
                  <Box
                    component="img"
                    src={"https://via.placeholder.com/500x500"}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "18px",
                    }}
                  />
                </Box>
              </Box>
              {/* 우측 내용 우선 */}
              <Box
                ref={containerRef}
                sx={{
                  flex: 1.2,
                  paddingX: 2,
                  minWidth: 0,
                  height: "100%",
                }}
              >
                {/* 1 컴포넌트 */}
                <Box sx={{ width: "100%", padding: 2, mt: '10vh', mb: '50vh' }}>
                  <div>
                  {/* 1. 상단 타이포그래피 */}
                  <Box sx={{ marginBottom: 3, display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "black",
                        fontSize: "28px",
                        fontWeight: "bold",
                      }}
                    >
                      모델.
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "black",
                        fontSize: "28px",
                        fontWeight: "bold",
                        opacity: "50%",
                        paddingLeft: { xs: 0, md: "8px" },
                      }}
                    >
                      원하는 제품군을 선택하세요.
                    </Typography>
                  </Box>

                  {/* 2. 선택 가능한 네모 박스 */}
                  <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                    {/* LAN 모델 */}
                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectSection(2)}
                        sx={{
                          borderRadius: "12px",
                          borderColor: selectedModel === "LAN" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <Typography variant="h6" sx={{ fontSize: { xs: "14px", md: "18px" } }} >
                                LAN 모델
                              </Typography>
                              <Typography variant="body2" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                                단독 모델
                              </Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                              400,000원부터
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    {/* RS232 모델 */}
                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectSection(2)}
                        sx={{
                          borderRadius: "12px",
                          borderColor: selectedModel === "RS232" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <Typography variant="h6" sx={{ fontSize: { xs: "14px", md: "18px" } }} >
                                RS232 모델
                              </Typography>
                              <Typography variant="body2" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                                디스플레이 포함
                              </Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                              800,000원부터
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>

                  {/* 3. 제품의 간략한 설명 */}
                  <Box sx={{ backgroundColor: "#F5F5F7", padding: 3, borderRadius: "12px", position: "relative" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: { xs: "14px", md: "18px" },
                            fontWeight: "bold",
                            marginBottom: 1,
                          }}
                        >
                          부착형 무선 데이터서버 AND가 궁금하다면?
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "black",
                            fontSize: { xs: "10px", md: "14px" },
                          }}
                        >
                          제조 인프라의 가장 앞선 무선 데이터 서버를 소개합니다.
                        </Typography>
                      </Box>
                      {/* 우측 상단의 +표시 */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: "16px",
                          right: "16px",
                          fontSize: "24px",
                          color: "black",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </Box>
                    </Box>
                  </Box>
                  </div>
                </Box>
                {/* 2 컴포넌트 */}
                <Box ref={component2Ref} sx={{ width: "100%", padding: 2, mb: '50vh' }}>
                  {/* 1. 상단 타이포그래피 */}
                  <Box sx={{ marginBottom: 3, display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "black",
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: "bold",
                      }}
                    >
                      모델.
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "black",
                        fontSize: { xs: "16px", md: "24px" },
                        opacity: "50%",
                        paddingLeft: { xs: 0, md: "8px" },
                      }}
                    >
                      원하는 제품군을 선택하세요.
                    </Typography>
                  </Box>

                  {/* 2. 선택 가능한 네모 박스 */}
                  <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                    {/* LAN 모델 */}
                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectSection(3)}
                        sx={{
                          borderRadius: "12px",
                          borderColor: selectedModel === "LAN" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <Typography variant="h6" sx={{ fontSize: { xs: "14px", md: "18px" } }} >
                                LAN 모델
                              </Typography>
                              <Typography variant="body2" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                                단독 모델
                              </Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                              400,000원부터
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    {/* RS232 모델 */}
                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectSection(3)}
                        sx={{
                          borderRadius: "12px",
                          borderColor: selectedModel === "RS232" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <Typography variant="h6" sx={{ fontSize: { xs: "14px", md: "18px" } }} >
                                RS232 모델
                              </Typography>
                              <Typography variant="body2" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                                디스플레이 포함
                              </Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                              800,000원부터
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>

                  {/* 3. 제품의 간략한 설명 */}
                  <Box sx={{ backgroundColor: "#F5F5F7", padding: 3, borderRadius: "12px", position: "relative" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: { xs: "14px", md: "18px" },
                            fontWeight: "bold",
                            marginBottom: 1,
                          }}
                        >
                          부착형 무선 데이터서버 AND가 궁금하다면?
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "black",
                            fontSize: { xs: "10px", md: "14px" },
                          }}
                        >
                          제조 인프라의 가장 앞선 무선 데이터 서버를 소개합니다.
                        </Typography>
                      </Box>
                      {/* 우측 상단의 +표시 */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: "16px",
                          right: "16px",
                          fontSize: "24px",
                          color: "black",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {/* 3 컴포넌트 */}
                <Box ref={component3Ref} sx={{ width: "100%", padding: 2, mb: '50vh' }}>
                  {/* 1. 상단 타이포그래피 */}
                  <Box sx={{ marginBottom: 3, display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "black",
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: "bold",
                      }}
                    >
                      모델.
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "black",
                        fontSize: { xs: "16px", md: "24px" },
                        opacity: "50%",
                        paddingLeft: { xs: 0, md: "8px" },
                      }}
                    >
                      원하는 제품군을 선택하세요.
                    </Typography>
                  </Box>

                  {/* 2. 선택 가능한 네모 박스 */}
                  <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                    {/* LAN 모델 */}
                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectSection(4)}
                        sx={{
                          borderRadius: "12px",
                          borderColor: selectedModel === "LAN" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <Typography variant="h6" sx={{ fontSize: { xs: "14px", md: "18px" } }} >
                                LAN 모델
                              </Typography>
                              <Typography variant="body2" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                                단독 모델
                              </Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                              400,000원부터
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    {/* RS232 모델 */}
                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectSection(4)}
                        sx={{
                          borderRadius: "12px",
                          borderColor: selectedModel === "RS232" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <Typography variant="h6" sx={{ fontSize: { xs: "14px", md: "18px" } }} >
                                RS232 모델
                              </Typography>
                              <Typography variant="body2" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                                디스플레이 포함
                              </Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                              800,000원부터
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>

                  {/* 3. 제품의 간략한 설명 */}
                  <Box sx={{ backgroundColor: "#F5F5F7", padding: 3, borderRadius: "12px", position: "relative" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: { xs: "14px", md: "18px" },
                            fontWeight: "bold",
                            marginBottom: 1,
                          }}
                        >
                          부착형 무선 데이터서버 AND가 궁금하다면?
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "black",
                            fontSize: { xs: "10px", md: "14px" },
                          }}
                        >
                          제조 인프라의 가장 앞선 무선 데이터 서버를 소개합니다.
                        </Typography>
                      </Box>
                      {/* 우측 상단의 +표시 */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: "16px",
                          right: "16px",
                          fontSize: "24px",
                          color: "black",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {/* 4 컴포넌트 */}
                <Box ref={component4Ref} sx={{ width: "100%", padding: 2 }}>
                  {/* 1. 상단 타이포그래피 */}
                  <Box sx={{ marginBottom: 3, display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "black",
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: "bold",
                      }}
                    >
                      모델.
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "black",
                        fontSize: { xs: "16px", md: "24px" },
                        opacity: "50%",
                        paddingLeft: { xs: 0, md: "8px" },
                      }}
                    >
                      원하는 제품군을 선택하세요.
                    </Typography>
                  </Box>

                  {/* 2. 선택 가능한 네모 박스 */}
                  <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                    {/* LAN 모델 */}
                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectModel("LAN")}
                        sx={{
                          borderRadius: "12px",
                          borderColor: selectedModel === "LAN" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <Typography variant="h6" sx={{ fontSize: { xs: "14px", md: "18px" } }} >
                                LAN 모델
                              </Typography>
                              <Typography variant="body2" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                                단독 모델
                              </Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                              400,000원부터
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    {/* RS232 모델 */}
                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectModel("RS232")}
                        sx={{
                          borderRadius: "12px",
                          borderColor: selectedModel === "RS232" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <Typography variant="h6" sx={{ fontSize: { xs: "14px", md: "18px" } }} >
                                RS232 모델
                              </Typography>
                              <Typography variant="body2" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                                디스플레이 포함
                              </Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                              800,000원부터
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>

                  {/* 3. 제품의 간략한 설명 */}
                  <Box sx={{ backgroundColor: "#F5F5F7", padding: 3, borderRadius: "12px", position: "relative" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: { xs: "14px", md: "18px" },
                            fontWeight: "bold",
                            marginBottom: 1,
                          }}
                        >
                          부착형 무선 데이터서버 AND가 궁금하다면?
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "black",
                            fontSize: { xs: "10px", md: "14px" },
                          }}
                        >
                          제조 인프라의 가장 앞선 무선 데이터 서버를 소개합니다.
                        </Typography>
                      </Box>
                      {/* 우측 상단의 +표시 */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: "16px",
                          right: "16px",
                          fontSize: "24px",
                          color: "black",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>


            </Box>
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
