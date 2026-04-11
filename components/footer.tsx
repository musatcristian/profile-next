"use client";

import { styled } from "@mui/material";
import Link from "@mui/material/Link";
import { FC } from "react";

const StyledFooter = styled("footer")({
  background: `linear-gradient(
    rgba(66, 135, 245, 0.2),
    rgba(33, 62, 107)
  )`,
  padding: "16px 15%",
  position: "static",
  flex: 1,
  maxHeight: "60px",
  maxWidth: "100%",
  width: "100%",
  minWidth: "100%",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
});

const StyledLink = styled(Link)(({ theme }) => ({
  paddingRight: "100px",
  textDecoration: "none",
  color: theme.palette.primary.light,
  fontSize: "16px",
  "&:last-of-type": {
    paddingRight: 0,
  },
}));

const github_repos = "https://github.com/musatcristian?tab=repositories";
const linkedin_profile = "https://www.linkedin.com/in/cristianmusat/";

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <StyledLink href="/resume" target="_blank" rel="noopener noreferrer">
        Resumee
      </StyledLink>
      <StyledLink href={github_repos} target="_blank" rel="noopener noreferrer">
        Github
      </StyledLink>
      <StyledLink href={linkedin_profile} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </StyledLink>
    </StyledFooter>
  );
};
