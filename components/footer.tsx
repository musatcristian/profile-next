"use client";

import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const StyledFooter = styled("footer")({
  background: `linear-gradient(
    rgba(66, 135, 245, 0.2),
    rgba(33, 62, 107)
  )`,
  padding: "16px 48px",
});

const StyledLink = styled(Link)({
  paddingRight: "100px",
});

export default function Footer() {
  return (
    <StyledFooter>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <StyledLink>Resume</StyledLink>
        <StyledLink>Github</StyledLink>
        <StyledLink>LinkedIn</StyledLink>
      </Box>
    </StyledFooter>
  );
}
