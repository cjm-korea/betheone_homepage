"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ANDImage from "@/images/LAN_use1.jpg";
import ContactModal from "@/app/and/components/ContactModal";
import InViewAnimate from "../InViewAnimate";

const SelectionComponent = ({ title, subtitle, options, refProp }: any) => (
  <Box ref={refProp} sx={{ width: "100%", mb: { lg: "30vh", xs: "10vh" } }}>
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
          fontSize: { xs: "20px", md: "24px" },
          fontWeight: "bold",
        }}
      >
        {title}.
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "black",
          fontSize: { xs: "20px", md: "24px" },
          opacity: "50%",
          paddingLeft: { xs: 0, md: "8px" },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
    <Grid container spacing={2}>
      {options.map((option: any, index: number) => (
        <Grid item xs={12} sm={6} key={index} sx={{}}>
          <Card
            variant="outlined"
            onClick={() => option.onSelect(option.value)}
            sx={{
              borderRadius: "12px",
              borderColor: option.isSelected ? "#006bff" : "gray",
              transition: "border-color 0.3s ease",
              // mb: {lg: "30vh", xs: "10vh"},
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
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: { xs: "16px", sm: "18px" } }}
                  >
                    {option.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "12px", sm: "14px" } }}
                  >
                    {option.description}
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "12px", sm: "14px" } }}
                >
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

export const SelectSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

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
    calculatePrice(selectedNetwork);
  };

  const handleSelectOption = (option: "Option1" | "Option2") => {
    setSelectedOption(option);

    if (component3Ref.current) {
      component3Ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    calculatePrice(selectedNetwork);
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
          "M198, DNC 가공 사용 가능",
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

  const theme = useTheme();
  const isMdOrBelow = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    if (isMdOrBelow) return;
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
  return (
    <Container sx={{ width: "100%" }}>
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
            width: "100%",
            height: "auto",
            mb: { xs: 3, sm: 6 },
            pt: { xs: 3, sm: 6 },
          }}
        >
          <Box
            sx={{
              py: { xs: "30px", sm: "60px" },
              height: "auto",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
              <InViewAnimate
                sx={{
                  mt: 5,
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.error.main,
                    fontSize: { xs: "14px", sm: "17px" },
                    fontWeight: "medium",
                  }}
                >
                  더 빠르고, 간편하고, 정확하게.
                </Typography>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: { xs: "28px", sm: "40px" },
                    fontWeight: "bold",
                    mb: { xs: 3, sm: 6 },
                  }}
                >
                  All New DNC
                </Typography>
              </InViewAnimate>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                width: "100%",
              }}
            >
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
                  subtitle="원하는 제품군을 선택하세요."
                  options={[
                    {
                      title: "LAN 모델",
                      description: "단독 모델",
                      price: "400,000원부터",
                      value: "LAN",
                      isSelected: selectedModel === "LAN",
                      onSelect: handleSelectModel,
                    },
                    {
                      title: "RS232 모델",
                      description: "디스플레이 포함",
                      price: "500,000원부터",
                      value: "RS232",
                      isSelected: selectedModel === "RS232",
                      onSelect: handleSelectModel,
                    },
                  ]}
                />

                <SelectionComponent
                  refProp={component2Ref}
                  title="기능 선택"
                  subtitle="필요한 기능을 선택하세요."
                  options={[
                    {
                      title: boxText2_1,
                      description: boxText2_3,
                      price: boxText2_5,
                      value: "Option1",
                      isSelected: selectedOption === "Option1",
                      onSelect: handleSelectOption,
                    },
                    {
                      title: boxText2_2,
                      description: boxText2_4,
                      price: boxText2_6,
                      value: "Option2",
                      isSelected: selectedOption === "Option2",
                      onSelect: handleSelectOption,
                    },
                  ]}
                />

                <SelectionComponent
                  refProp={component3Ref}
                  title="네트워크"
                  subtitle="네트워크 상태."
                  options={[
                    {
                      title: "네트워크 있음",
                      description: "기존 네트워크에 추가",
                      price: "+ 0원",
                      value: "O",
                      isSelected: selectedNetwork === "O",
                      onSelect: handleSelectNetwork,
                    },
                    {
                      title: "네트워크 없음",
                      description: "새로운 네트워크 구성",
                      price: "+ 100,000원",
                      value: "X",
                      isSelected: selectedNetwork === "X",
                      onSelect: handleSelectNetwork,
                    },
                  ]}
                />

                {/* 최종 제품 확인 */}
                <Box ref={component4Ref} sx={{ width: "100%", mb: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "black",
                      fontSize: { xs: "20px", sm: "24px" },
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  >
                    최종 제품 확인.
                  </Typography>
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: "12px",
                      borderColor: "#006bff",
                      mb: 3,
                    }}
                  >
                    <CardContent>
                      <Typography variant="body1">
                        선택된 모델:{" "}
                        <span style={{ color: "#006bff" }}>
                          {selectedModel}
                        </span>
                      </Typography>
                      <Typography variant="body1">
                        선택된 옵션:{" "}
                        <span style={{ color: "#006bff" }}>
                          {selectedModel === "LAN"
                            ? selectedOption === "Option1"
                              ? "데이터 입력, 출력"
                              : "M198, DNC(REMOTE)가공 사용 가능"
                            : selectedOption === "Option1"
                            ? "3인치 디스플레이"
                            : "10인치 디스플레이"}
                        </span>
                      </Typography>
                      <Typography variant="body1">
                        선택된 네트워크:{" "}
                        <span style={{ color: "#006bff" }}>
                          {selectedNetwork === "O"
                            ? "네트워크 있음"
                            : "네트워크 없음"}
                        </span>
                      </Typography>
                      <Typography variant="h6">
                        최종 가격:{" "}
                        <span style={{ color: "#006bff" }}>
                          {finalPrice.toLocaleString()}원
                        </span>
                      </Typography>
                    </CardContent>
                  </Card>

                  <Box
                    sx={{
                      border: "1px solid gray",
                      padding: 2,
                      borderRadius: "12px",
                      textAlign: "center",
                      background:
                        "linear-gradient(135deg, #006bff 0%, #00ccff 100%)",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={handleOpen}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "16px", sm: "18px" },
                        fontWeight: "bold",
                      }}
                    >
                      빠른 상담받기 🚀
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <ContactModal open={modalOpen} onClose={handleClose} />
    </Container>
  );
};
