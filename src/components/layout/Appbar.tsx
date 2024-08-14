"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import Logopath from "/public/Logo.png";
import Link from "next/link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide
      appear={true}
      direction="down"
      in={!trigger}
    >
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          elevation={1}
          sx={{
            width: "fit-content",
            py: "20px",
            px: {
              xs: "30px",
              md: "170px",
            },
            backgroundColor: "white",
          }}
        >
          <Toolbar sx={{ width: "fit-content" }}>
            <Link href="/">
              <Image src={Logopath} alt="Logo" />
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar sx={{ width: "fit-content" }} />
    </React.Fragment>
  );
}
