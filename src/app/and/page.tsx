"use client";

import ContactModal from "@/components/ContactModal";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function AND() {
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  const [selectedModel, setSelectedModel] = useState<"LAN" | "RS232">("LAN");
  const [selectedOption, setSelectedOption] = useState<"Option1" | "Option2">(
    "Option1"
  );
  const [selectedNetwork, setSelectedNetwork] = useState<"O" | "X">("O");
  const [finalPrice, setFinalPrice] = useState<number>(0);

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const component2Ref = useRef<HTMLDivElement>(null);
  const component3Ref = useRef<HTMLDivElement>(null);
  const component4Ref = useRef<HTMLDivElement>(null);

  const calculatePrice = () => {
    let optionPrice: number = 0;

    if (selectedModel === "LAN") {
      optionPrice = selectedOption === "Option1" ? 400000 : 800000;
    } else if (selectedModel === "RS232") {
      optionPrice = selectedOption === "Option1" ? 500000 : 700000;
    }

    let networkPrice: number = selectedNetwork === "O" ? 0 : 100000;

    setFinalPrice(optionPrice + networkPrice);
  };

  const handleSelectModel = (model: "LAN" | "RS232") => {
    setSelectedModel(model);

    if (component2Ref.current) {
      component2Ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleSelectOption = (option: "Option1" | "Option2") => {
    setSelectedOption(option);

    if (component3Ref.current) {
      component3Ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleSelectNetwork = (option: "O" | "X") => {
    setSelectedNetwork(option);

    if (component4Ref.current) {
      component4Ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [selectedModel, selectedNetwork, selectedNetwork]);

  const getBoxText2 = () => {
    switch (selectedModel) {
      case "LAN":
        return [
          "데이터 전송",
          "원격가공",
          "데이터 입력, 출력",
          "M198, DNC(REMOTE)가공 사용 가능",
          "+0원",
          "+400,000원",
        ];
      case "RS232":
        return [
          "3인치",
          "10인치",
          "작고 빠르게",
          "크고 편하게",
          "+0원",
          "+200,000원",
        ];
      default:
        return [
          "데이터 전송",
          "원격가공",
          "데이터 입력, 출력",
          "M198, DNC(REMOTE)가공 사용 가능",
          "+0원",
          "+400,000원",
        ];
    }
  };

  const [
    boxText2_1,
    boxText2_2,
    boxText2_3,
    boxText2_4,
    boxText2_5,
    boxText2_6,
  ] = getBoxText2();

  useEffect(() => {
    if (!containerRef.current || !stickyRef.current) return;

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
            pt: 6,
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                pt: "60px",
                width: "100%",
              }}
            >
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
                <Box sx={{ minWidth: "400px", minHeight: "fit-content" }}>
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
                <Box sx={{ width: "100%", padding: 2, mt: "10vh", mb: "50vh" }}>
                  <Box
                    sx={{
                      marginBottom: 3,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
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

                  <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectModel("LAN")}
                        sx={{
                          borderRadius: "12px",
                          borderColor:
                            selectedModel === "LAN" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <Typography
                                variant="h6"
                                sx={{ fontSize: { xs: "14px", md: "18px" } }}
                              >
                                LAN 모델
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontSize: { xs: "10px", md: "14px" } }}
                              >
                                단독 모델
                              </Typography>
                            </Box>
                            <Typography
                              variant="h6"
                              sx={{ fontSize: { xs: "10px", md: "14px" } }}
                            >
                              400,000원부터
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectModel("RS232")}
                        sx={{
                          borderRadius: "12px",
                          borderColor:
                            selectedModel === "RS232" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <Typography
                                variant="h6"
                                sx={{ fontSize: { xs: "14px", md: "18px" } }}
                              >
                                RS232 모델
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontSize: { xs: "10px", md: "14px" } }}
                              >
                                디스플레이 포함
                              </Typography>
                            </Box>
                            <Typography
                              variant="h6"
                              sx={{ fontSize: { xs: "10px", md: "14px" } }}
                            >
                              500,000원부터
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>

                {/* 2 컴포넌트 */}
                <Box
                  ref={component2Ref}
                  sx={{ width: "100%", padding: 2, mb: "50vh" }}
                >
                  <Box
                    sx={{
                      marginBottom: 3,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "black",
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: "bold",
                      }}
                    >
                      옵션1.
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
                      제품 사용 옵션
                    </Typography>
                  </Box>

                  <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectOption("Option1")}
                        sx={{
                          borderRadius: "12px",
                          borderColor:
                            selectedOption === "Option1" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <Typography
                                variant="h6"
                                sx={{ fontSize: { xs: "14px", md: "18px" } }}
                              >
                                {boxText2_1}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontSize: { xs: "10px", md: "14px" } }}
                              >
                                {boxText2_3}
                              </Typography>
                            </Box>
                            <Typography
                              variant="h6"
                              sx={{ fontSize: { xs: "10px", md: "14px" } }}
                            >
                              {boxText2_5}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectOption("Option2")}
                        sx={{
                          borderRadius: "12px",
                          borderColor:
                            selectedOption === "Option1" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <Typography
                                variant="h6"
                                sx={{ fontSize: { xs: "14px", md: "18px" } }}
                              >
                                {boxText2_2}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontSize: { xs: "10px", md: "14px" } }}
                              >
                                {boxText2_4}
                              </Typography>
                            </Box>
                            <Typography
                              variant="h6"
                              sx={{ fontSize: { xs: "10px", md: "14px" } }}
                            >
                              {boxText2_6}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>

                {/* 3 컴포넌트 */}
                <Box
                  ref={component3Ref}
                  sx={{ width: "100%", padding: 2, mb: "50vh" }}
                >
                  <Box
                    sx={{
                      marginBottom: 3,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "black",
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: "bold",
                      }}
                    >
                      네트워크.
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
                      간단하고 빠른 구성
                    </Typography>
                  </Box>

                  <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectNetwork("O")}
                        sx={{
                          borderRadius: "12px",
                          borderColor:
                            selectedNetwork === "O" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <Typography
                                variant="h6"
                                sx={{ fontSize: { xs: "14px", md: "18px" } }}
                              >
                                네트워크 있음
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontSize: { xs: "10px", md: "14px" } }}
                              >
                                기존 네트워크에 추가
                              </Typography>
                            </Box>
                            <Typography
                              variant="h6"
                              sx={{ fontSize: { xs: "10px", md: "14px" } }}
                            >
                              + 0원
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Card
                        variant="outlined"
                        onClick={() => handleSelectNetwork("X")}
                        sx={{
                          borderRadius: "12px",
                          borderColor:
                            selectedNetwork === "X" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <Typography
                                variant="h6"
                                sx={{ fontSize: { xs: "14px", md: "18px" } }}
                              >
                                네트워크 없음
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontSize: { xs: "10px", md: "14px" } }}
                              >
                                새로운 네트워크 구성
                              </Typography>
                            </Box>
                            <Typography
                              variant="h6"
                              sx={{ fontSize: { xs: "10px", md: "14px" } }}
                            >
                              + 100,000원
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
                {/* 4 컴포넌트 */}
                <Box
                  ref={component4Ref}
                  sx={{ width: "100%", padding: 2, mb: "15vh" }}
                >
                  {/* 1. 상단 타이포그래피 */}
                  <Box
                    sx={{
                      marginBottom: 3,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "black",
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: "bold",
                      }}
                    >
                      최종 제품 확인.
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
                      즉시 연락
                    </Typography>
                  </Box>

                  {/* 2. 선택 가능한 네모 박스 */}
                  <Grid container sx={{ marginBottom: 3, width: "100%" }}>
                    <Grid item xs={12} md={12}>
                      <Card
                        variant="outlined"
                        sx={{
                          borderRadius: "12px",
                          borderColor:
                            selectedModel === "RS232" ? "#006bff" : "gray",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <CardActionArea>
                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <Typography
                                variant="h6"
                                sx={{ fontSize: { xs: "14px", md: "18px" } }}
                              >
                                {selectedModel}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontSize: { xs: "10px", md: "14px" } }}
                              >
                                {selectedModel === "LAN"
                                  ? selectedOption === "Option1"
                                    ? "M198, DNC(REMOTE)가공 사용 가능"
                                    : "데이터 전송"
                                  : selectedOption === "Option1"
                                  ? "3인치 디스플레이"
                                  : "10인치 디스플레이"}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontSize: { xs: "10px", md: "14px" } }}
                              >
                                {selectedNetwork === "O"
                                  ? "기존 네트워크에 추가"
                                  : "새로운 네트워크 구성"}
                              </Typography>
                            </Box>
                            <Typography
                              variant="h6"
                              sx={{ fontSize: { xs: "10px", md: "14px" } }}
                            >
                              {finalPrice.toLocaleString()}원
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>

                  {/* 3. 제품의 간략한 설명 */}
                  <Box
                    sx={{
                      border: "1px solid gray",
                      padding: 3,
                      borderRadius: "12px",
                      textAlign: "center",
                      position: "relative",
                      cursor: "pointer",
                      background:
                        "linear-gradient(135deg, #006bff 0%, #00ccff 100%)",
                      color: "white",
                    }}
                    onClick={handleOpen}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "black",
                        fontSize: { xs: "14px", md: "18px" },
                        fontWeight: "bold",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      빠른 상담받기 🚀
                    </Typography>
                  </Box>
                  <ContactModal open={modalOpen} onClose={handleClose} />
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
                scelerisque, turpis purus fringilla libero, eget ultrices est
                dui vel felis. Suspendisse potenti.
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
