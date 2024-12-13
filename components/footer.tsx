"use client";

import { Paper, styled } from "@mui/material";
import Link from "@mui/material/Link";

const StyledFooter = styled("footer")({
  background: `linear-gradient(
    rgba(66, 135, 245, 0.2),
    rgba(33, 62, 107)
  )`,
  padding: "16px 48px",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
});

const Ss = styled(Paper)({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
});

const StyledLink = styled(Link)({
  paddingRight: "100px",
  textDecoration: "none",
});

const hhh = "https://github.com/";
const lll = "https://linkedin.com/";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink href="#" target="_blank" rel="noopener noreferrer">
        Resume
      </StyledLink>
      <StyledLink href={hhh} target="_blank" rel="noopener noreferrer">
        Github
      </StyledLink>
      <StyledLink href={lll} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </StyledLink>
    </StyledFooter>
  );
}
