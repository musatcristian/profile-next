"use client";

import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import BasicTabs from "./tabs";

const StyledHeader = styled("header")({
  background: `linear-gradient(
    rgba(33, 62, 107, 0.75),
    rgba(66, 135, 245, 0.2)
  )`,
  padding: "16px 48px",
});

export const Header = () => {
  return (
    <StyledHeader>
      <Typography>Cristian Musat</Typography>

      <BasicTabs />
    </StyledHeader>
  );
};
