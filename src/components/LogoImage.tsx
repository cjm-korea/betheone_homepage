import { styled } from "@mui/system";

export const LogoImage = styled("img")(({ theme }) => ({
    width: theme.breakpoints.up("lg") ? 400 : 330,
    height: theme.breakpoints.up("lg") ? 368 : 258, // lg 이상이면 368, 그렇지 않으면 258
    objectFit: "contain",
    padding: 30,
    borderBottomRightRadius: "18px",
    borderBottomLeftRadius: "18px",
  }));