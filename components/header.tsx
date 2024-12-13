"use client";

import { styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { onServerNavigate } from "@/actions/navigate";
import BasicTabs from "./tabs";

// ("179 135 50");

const StyledHeader = styled(AppBar)({
  background: `linear-gradient(
    rgba(57, 97, 157, 0.75),
    rgba(255, 255, 255, 0.2) 70%
  )`,
  padding: "8px 15% 0",
});

export const Header = () => {
  const [value, setValue] = useState<string>("");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
    onServerNavigate(newValue);
  };
  const handleTitleClick = () => {
    setValue("");
    onServerNavigate("/");
  };

  return (
    <StyledHeader position="static">
      <Typography
        variant="h4"
        onClick={handleTitleClick}
        sx={{ cursor: "pointer" }}
      >
        Cristian Musat
      </Typography>
      <BasicTabs onTabClick={handleTabChange} tabValue={value} />
    </StyledHeader>
  );
};
