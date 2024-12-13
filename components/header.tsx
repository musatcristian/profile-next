"use client";

import { styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

import BasicTabs from "./tabs";

const StyledHeader = styled(AppBar)({
  background: `linear-gradient(
    rgba(33, 62, 107, 0.75),
    rgba(66, 135, 245, 0.2)
  )`,
  padding: "8px 15% 0",
});

export const Header = () => {
  return (
    <StyledHeader position="static">
      <Typography variant="h4">Cristian Musat</Typography>
      <BasicTabs />
    </StyledHeader>
  );
};
