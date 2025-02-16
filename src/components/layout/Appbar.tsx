// "use client";

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import CssBaseline from "@mui/material/CssBaseline";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import Slide from "@mui/material/Slide";
// import Logopath from "/public/Logo.png";
// import Link from "next/link";
// import { Box } from "@mui/material";

// interface Props {
//   window?: () => Window;
//   children: React.ReactElement;
// }

// function HideOnScroll(props: Props) {
//   const { children, window } = props;

//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide
//       appear={true}
//       direction="down"
//       in={!trigger}
//     >
//       {children}
//     </Slide>
//   );
// }

// export default function HideAppBar(props: Props) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <HideOnScroll {...props}>
//         <AppBar
//           elevation={1}
//           sx={{
//             width: "fit-content",
//             py: "20px",
//             px: {
//               xs: "30px",
//               md: "170px",
//             },
//             backgroundColor: "white",
//           }}
//         >
//           <Toolbar sx={{ width: "fit-content" }}>
//             <Link href="/">
//               {/* <Image src={Logopath} alt="Logo" /> */}
//               <Box
//                 component="img"
//                 src={Logopath.src}
//                 alt="Logo"
//                 sx={{
//                   width: {
//                     xs: '100px',
//                     md: '100%',
//                   },
//                   height: 'auto',
//                   transition: 'width 0.3s ease',
//                 }}
//               />
//             </Link>
//           </Toolbar>
//         </AppBar>
//       </HideOnScroll>
//       <Toolbar sx={{ width: "fit-content" }} >
//       </Toolbar>
//     </React.Fragment>
//   );
// }
"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Logopath from "@/public/Logo.png";
import Link from "next/link";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MainButton from "../MainButton";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={true} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleCopyCall = () => {
    navigator.clipboard.writeText('010-6567-2785');
    alert('전화번호가 클립보드에 복사되었습니다.');
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "홈", href: "/" },
          { text: "부착형 무선 데이터 서버 AND", href: "/and" },
          { text: "2025 스마트화 지원사업", href: "/s2025" },
          { text: "캠(CAM) 구매", href: "/cam" },
          { text: "빠른 연락", href: "tel:010-6567-2785" },
        ].map((item, index) => (
          <React.Fragment key={item.text}>
            <ListItem button component={Link} href={item.href}>
              <ListItemText primary={item.text} />
            </ListItem>
            {index < 4 && (
              <Divider sx={{ bgcolor: "grey.300", width: "80%", mx: 2 }} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          elevation={1}
          sx={{
            width: "100%",
            py: "20px",
            px: {
              xs: "30px",
              md: "170px",
            },
            backgroundColor: "white",
          }}
        >
          <Toolbar sx={{ width: "100%", justifyContent: "space-between" }}>
            <Link href="/">
              <Box
                component="img"
                src={Logopath.src}
                alt="Logo"
                sx={{
                  width: {
                    xs: "100px",
                    md: "120px",
                  },
                  height: "auto",
                  transition: "width 0.3s ease",
                }}
              />
            </Link>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MainButton
                href="tel:010-6567-2785"
                onClick={handleCopyCall}
                sx={{
                  width: "fit-content",
                  fontSize: "14px",
                  marginRight: 2,
                }}
              >
                빠른 연락
              </MainButton>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar sx={{ width: "fit-content" }} />
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </React.Fragment>
  );
}
