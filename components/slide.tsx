"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { FC } from "react";

import { onServerNavigate } from "@/actions/navigate";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const DrawerList = (
  <Box
    sx={{ maxWidth: 250, padding: "24px 16px 24px 8px" }}
    role="presentation"
    onClick={() => console.info("BOX")}
  >
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

const StyledDrawer = styled(Drawer)({
  backgroundColor: "transparent",
  "&.MuiDrawer-root": {
    backgroundColor: "transparent",
  },
  "& .MuiBackdrop-root": {
    backgroundColor: "transparent",
    opacity: 0,
  },
  "& .MuiDrawer-paper": {
    background: `linear-gradient(
      0.25turn,
      rgba(57, 97, 157),
      rgba(57, 97, 157, 0.35)
    )`,
  },
});

export const VerticalSlide: FC = () => {
  const params = useSearchParams();
  const open = params.get("slide") === "on";
  const route = usePathname();
  const handleCloseDrawer = () => {
    onServerNavigate(route);
  };

  return (
    <StyledDrawer open={open} onClose={handleCloseDrawer}>
      {DrawerList}
    </StyledDrawer>
  );
};
