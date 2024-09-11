"use client";

import ContactModal from "@/app/and/components/ContactModal";
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
import ANDImage from "@/images/LAN_use1.jpg";
import ANDComposeCard from "@/app/and/components/ANDComposeCard";
import FAQSection from "@/app/and/components/FAQCard";

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

  const calculatePrice = (networkOption: "O" | "X") => {
    let optionPrice: number = 0;

    if (selectedModel === "LAN") {
      optionPrice = selectedOption === "Option1" ? 400000 : 800000;
    } else if (selectedModel === "RS232") {
      optionPrice = selectedOption === "Option1" ? 500000 : 700000;
    }

    let networkPrice: number = networkOption === "O" ? 0 : 100000;

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

    calculatePrice(option);
  };

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
        setIsSticky(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const target = containerRef.current;
    observer.observe(target);

    return () => {
      if (observer) observer.unobserve(target);
    };
  }, []);

  const SelectionComponent = ({ title, options, refProp }: any) => (
    <Box ref={refProp} sx={{ width: "100%", mb: { xs: 3, sm: 4 } }}>
      <Typography variant="h5" sx={{
        color: "black",
        fontSize: { xs: "20px", sm: "24px" },
        fontWeight: "bold",
        mb: 2,
      }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {options.map((option: any, index: number) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card variant="outlined" onClick={() => option.onSelect(option.value)} sx={{
              borderRadius: "12px",
              borderColor: option.isSelected ? "#006bff" : "gray",
              transition: "border-color 0.3s ease",
            }}>
              <CardActionArea>
                <CardContent sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6" sx={{ fontSize: { xs: "16px", sm: "18px" } }}>
                      {option.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
                      {option.description}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
                    {option.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <>
      {/* <Container sx={{ width: "100vw" }}>
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
                px: {
                  xs: "30px",
                  lg: "170px",
                },
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
                sx={{
                  color: "#b64400",
                  fontSize: "17px",
                  fontWeight: "medium",
                }}
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
                <Box
                  sx={{
                    flex: 1,
                    minWidth: "250px",
                    position: !isSticky ? "sticky" : "static",
                    top: "25%",
                    height: "100%",
                    overflow: "hidden",
                    transition: "position 0.3s ease",
                    maxWidth: "592px",
                  }}
                >
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <Box
                      ref={stickyRef}
                      component="img"
                      src={ANDImage.src}
                      sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "18px",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: 1.5,
                    paddingX: 2,
                    minWidth: 0,
                    height: "100%",
                  }}
                >
                  <Box
                    ref={containerRef}
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
                      <Grid item xs={12} lg={6}>
                        <Card
                          variant="outlined"
                          onClick={() => handleSelectModel("LAN")}
                          sx={{
                            borderRadius: "12px",
                            borderColor:
                              selectedModel === "LAN" ? "#006bff" : "gray",
                            transition: "border-color 0.3s ease",
                            flex: 1,
                            height: "100%",
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
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
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

                      <Grid item xs={12} lg={6}>
                        <Card
                          variant="outlined"
                          onClick={() => handleSelectModel("RS232")}
                          sx={{
                            borderRadius: "12px",
                            borderColor:
                              selectedModel === "RS232" ? "#006bff" : "gray",
                            transition: "border-color 0.3s ease",
                            flex: 1,
                            height: "100%",
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
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
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
                      <Grid item xs={12} lg={6}>
                        <Card
                          variant="outlined"
                          onClick={() => handleSelectOption("Option1")}
                          sx={{
                            borderRadius: "12px",
                            borderColor:
                              selectedOption === "Option1" ? "#006bff" : "gray",
                            transition: "border-color 0.3s ease",
                            flex: 1
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
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
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

                      <Grid item xs={12} lg={6}>
                        <Card
                          variant="outlined"
                          onClick={() => handleSelectOption("Option2")}
                          sx={{
                            borderRadius: "12px",
                            borderColor:
                              selectedOption === "Option1" ? "#006bff" : "gray",
                            transition: "border-color 0.3s ease",
                            flex: 1
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
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
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
                      <Grid item xs={12} lg={6}>
                        <Card
                          variant="outlined"
                          onClick={() => handleSelectNetwork("O")}
                          sx={{
                            borderRadius: "12px",
                            borderColor:
                              selectedNetwork === "O" ? "#006bff" : "gray",
                            transition: "border-color 0.3s ease",
                            flex: 1
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
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
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
                      <Grid item xs={12} lg={6}>
                        <Card
                          variant="outlined"
                          onClick={() => handleSelectNetwork("X")}
                          sx={{
                            borderRadius: "12px",
                            borderColor:
                              selectedNetwork === "X" ? "#006bff" : "gray",
                            transition: "border-color 0.3s ease",
                            flex: 1
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
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
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
                  <Box
                    ref={component4Ref}
                    sx={{ width: "100%", padding: 2 }}
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
                    <Grid container sx={{ marginBottom: 3, width: "100%" }}>
                      <Grid item xs={12} md={12}>
                        <Card
                          variant="outlined"
                          sx={{
                            borderRadius: "12px",
                            borderColor:
                              selectedModel === "RS232" ? "#006bff" : "gray",
                            transition: "border-color 0.3s ease",
                            flex: 1
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
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
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
                                      ? "데이터 입력, 출력"
                                      : "M198, DNC(REMOTE)가공 사용 가능"
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
        </Box>
      </Container> */}
      <Container sx={{ width: "100%" }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Box sx={{
            width: "100%",
            height: "auto",
            mb: { xs: 3, sm: 6 },
            pt: { xs: 3, sm: 6 },
          }}>
            <Box sx={{
              px: { xs: "15px", sm: "30px", lg: "170px" },
              py: { xs: "30px", sm: "60px" },
              height: "auto",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}>
              <Typography sx={{
                color: "#b64400",
                fontSize: { xs: "14px", sm: "17px" },
                fontWeight: "medium",
              }}>
                더 빠르고, 간편하고, 정확하게.
              </Typography>
              <Typography sx={{
                color: "black",
                fontSize: { xs: "28px", sm: "40px" },
                fontWeight: "bold",
                mb: { xs: 3, sm: 6 },
              }}>
                All New DNC
              </Typography>

              <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                width: "100%",
              }}>
                {/* 이미지 */}
                <Box
                  ref={stickyRef}
                  sx={{
                    flex: 1,
                    minWidth: { xs: "100%", sm: "250px" },
                    position: { xs: "static", sm: "sticky" },
                    top: { xs: "auto", sm: "25%" },
                    height: { xs: "auto", sm: "100%" },
                    mb: { xs: 3, sm: 0 },
                  }}
                >
                  <Box
                    component="img"
                    src={ANDImage.src}
                    sx={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "18px",
                    }}
                  />
                </Box>

                {/* 선택 컴포넌트들 */}
                <Box
                  ref={containerRef}
                  sx={{
                    flex: 1.5,
                    paddingX: { xs: 0, sm: 2 },
                    minWidth: 0,
                    height: "100%",
                  }}
                >
                  <SelectionComponent
                    title="모델"
                    options={[
                      {
                        title: "LAN 모델",
                        description: "단독 모델",
                        price: "400,000원부터",
                        value: "LAN",
                        isSelected: selectedModel === "LAN",
                        onSelect: handleSelectModel
                      },
                      {
                        title: "RS232 모델",
                        description: "디스플레이 포함",
                        price: "500,000원부터",
                        value: "RS232",
                        isSelected: selectedModel === "RS232",
                        onSelect: handleSelectModel
                      }
                    ]}
                  />

                  <SelectionComponent
                    refProp={component2Ref}
                    title="옵션1"
                    options={[
                      {
                        title: boxText2_1,
                        description: boxText2_3,
                        price: boxText2_5,
                        value: "Option1",
                        isSelected: selectedOption === "Option1",
                        onSelect: handleSelectOption
                      },
                      {
                        title: boxText2_2,
                        description: boxText2_4,
                        price: boxText2_6,
                        value: "Option2",
                        isSelected: selectedOption === "Option2",
                        onSelect: handleSelectOption
                      }
                    ]}
                  />

                  <SelectionComponent
                    refProp={component3Ref}
                    title="네트워크"
                    options={[
                      {
                        title: "네트워크 있음",
                        description: "기존 네트워크에 추가",
                        price: "+ 0원",
                        value: "O",
                        isSelected: selectedNetwork === "O",
                        onSelect: handleSelectNetwork
                      },
                      {
                        title: "네트워크 없음",
                        description: "새로운 네트워크 구성",
                        price: "+ 100,000원",
                        value: "X",
                        isSelected: selectedNetwork === "X",
                        onSelect: handleSelectNetwork
                      }
                    ]}
                  />

                  {/* 최종 제품 확인 */}
                  <Box ref={component4Ref} sx={{ width: "100%", mb: 3 }}>
                    <Typography variant="h5" sx={{
                      color: "black",
                      fontSize: { xs: "20px", sm: "24px" },
                      fontWeight: "bold",
                      mb: 2,
                    }}>
                      최종 제품 확인
                    </Typography>
                    <Card variant="outlined" sx={{
                      borderRadius: "12px",
                      borderColor: "#006bff",
                      mb: 3,
                    }}>
                      <CardContent>
                        <Typography variant="body1">
                          선택된 모델: {selectedModel}
                        </Typography>
                        <Typography variant="body1">
                          선택된 옵션: {selectedOption}
                        </Typography>
                        <Typography variant="body1">
                          선택된 네트워크: {selectedNetwork}
                        </Typography>
                        <Typography variant="h6">
                          최종 가격: {finalPrice.toLocaleString()}원
                        </Typography>
                      </CardContent>
                    </Card>
                    <Box
                      sx={{
                        border: "1px solid gray",
                        padding: 2,
                        borderRadius: "12px",
                        textAlign: "center",
                        background: "linear-gradient(135deg, #006bff 0%, #00ccff 100%)",
                        color: "white",
                        cursor: "pointer",
                      }}
                      onClick={handleOpen}
                    >
                      <Typography variant="h6" sx={{
                        fontSize: { xs: "16px", sm: "18px" },
                        fontWeight: "bold",
                      }}>
                        빠른 상담받기 🚀
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* ContactModal 컴포넌트를 여기에 추가하세요 */}
      </Container>
      <Box
        sx={{
          width: "100%",
          marginBottom: 4,
          padding: 2,
          backgroundColor: "#F5F5F7",
        }}
      >
        {/* 상단: 타이포그래피 */}
        <Box
          sx={{
            marginBottom: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "center",
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
            당신의 기계.
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
            당신이 원하는 대로.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={ANDImage.src}
            sx={{
              width: "80%", // 이미지의 가로 크기 조정
              height: "300px", // 이미지의 높이 조정
              objectFit: "none", // 이미지를 자르지 않고 원본 크기를 유지
              objectPosition: "top", // 이미지의 상단 부분만 보이도록 설정
              borderRadius: "18px",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          mx: {
            xs: "30px",
            lg: "170px",
          },
          my: "60px",
          padding: 2,
          backgroundColor: "#F5F5F7",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={3}>
            <ANDComposeCard imageSrc={ANDImage.src} text="AND" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ANDComposeCard imageSrc={ANDImage.src} text="통신선" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ANDComposeCard imageSrc={ANDImage.src} text="전원" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ANDComposeCard imageSrc={ANDImage.src} text="네트워크" />
          </Grid>
        </Grid>
      </Box>

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
        <Box sx={{ padding: 4 }}>
          <Typography
            variant="h5"
            sx={{ marginBottom: 4, textAlign: "center" }}
          >
            내 기계와 함께 누릴 수<br />
            있는 놀라움의 세계.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Box
                  component="img"
                  src={ANDImage.src}
                  alt="Small Box"
                  sx={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#ccc",
                    borderRadius: "4px",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  DNC(M198) 연속가공
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  USB, CF카드 없이 데이터를 바로 보내고, 즉시 가공
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Box
                  component="img"
                  src={ANDImage.src}
                  alt="Small Box"
                  sx={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#ccc",
                    borderRadius: "4px",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  무선 네트워크 인프라
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  기계와 별도의 무선 네트워크 구축으로 현장을 간단하게
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Box
                  component="img"
                  src={ANDImage.src}
                  alt="Small Box"
                  sx={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#ccc",
                    borderRadius: "4px",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  모든 기계를 디지털화
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  RS232, LAN 통신으로 구형, 신형 기계 모두 호환
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

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
        <FAQSection />
      </Box>
    </>
  );
}
