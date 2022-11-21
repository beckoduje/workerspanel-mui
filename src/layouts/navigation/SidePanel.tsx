import React, { useState } from "react";

import {
  AccountBox,
  Article,
  Dvr,
  Group,
  ModeNight,
  Person,
  Settings,
  Storefront,
  Handshake,
  AccountBalance,
} from "@mui/icons-material";

import {
  Box,
  Typography,
  InputBase,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

import { ArrowCircleRight, ArrowCircleLeft } from "@mui/icons-material";

export default function SidePanel() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

  const Aside = styled("aside")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    zIndex: 100,
    height: "100%",
    background: "white",
    width: isSidePanelOpen ? "auto" : "4rem", //  sx={{ whiteSpace: isMobile ? 'normal' : 'pre'}}
    boxShadow: "4px 6px 8px rgba(0, 0, 0, 0.25)",
    borderTop: `1px solid ${theme.palette.border.lightBorderColor}`,
    transition: "0.2s",
    padding: "15px",
  }));

  return (
    <Aside>
      <IconButton
        sx={{ paddingRight: 0, color: "#0b9afa", alignSelf: "end" }}
        aria-label="upload picture"
        component="span"
        onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
      >
        {!isSidePanelOpen ? <ArrowCircleRight /> : <ArrowCircleLeft />}
      </IconButton>
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Employees" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Dvr />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Handshake />
              </ListItemIcon>
              <ListItemText primary="Partners" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <AccountBalance />
              </ListItemIcon>
              <ListItemText primary="Clients" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Aside>
  );
}
