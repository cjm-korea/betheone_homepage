import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Main_1 } from "@/components/section/main/Main_1";
import { Main_2 } from "@/components/section/main/Main_2";
import { Main_3 } from "@/components/section/main/Main_3";
import { Main_4 } from "@/components/section/main/Main_4";
import UserCarousel from "@/app/mainComponents/UserCarousel";



export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Main_1 />
        <Main_2 />
        <Main_3 />
        <Box
          sx={{
            width: "100vw",
            height: "auto",
            backgroundColor: "#F5F5F7",
          }}
        >
          <UserCarousel />
        </Box>
        <Main_4 />
      </Box>
    </Container>
  );
}
