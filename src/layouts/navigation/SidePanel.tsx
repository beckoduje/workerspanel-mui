import React, { useState } from "react";

import { Box, Typography, InputBase, IconButton, styled } from "@mui/material";

import SidePanelWorkersList from "../side-panel/SidePanelWorkersList";
import Filter from "./Filter";

import {
  Search as SearchIcon,
  ArrowCircleRight,
  ArrowCircleLeft,
} from "@mui/icons-material";

const SidePanel = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);
  const [sortValue, setSortValue] = useState("last-name");

  const Aside = styled("aside")(({ theme }) => ({
    display: "grid",
    gridTemplateRows: "max-content 1fr",
    zIndex: 100,
    height: "100%",
    background: "white",
    width: isSidePanelOpen ? "22rem" : "4rem", //  sx={{ whiteSpace: isMobile ? 'normal' : 'pre'}}
    boxShadow: "4px 6px 8px rgba(0, 0, 0, 0.25)",
    borderTop: `1px solid ${theme.palette.border.lightBorderColor}`,
    transition: "0.2s",
  }));

  const SidePanelAcions = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    padding: "1rem",
    borderBottom: `1px solid ${theme.palette.border.lightBorderColor}`,
  }));

  ///////////////////////////////////// Search prebacit negdi

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    marginLeft: 0,
    marginRight: "1.2rem",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    boxShadow: "0px 1px 2px rgba(32, 33, 36, 0.28)",
    borderRadius: "25px",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "17ch",
        },
      },
    },
  }));

  ////////////////////////////////////// Search prebacit negdi

  return (
    <Aside>
      <SidePanelAcions>
        {isSidePanelOpen && (
          <Filter sortValue={sortValue} setSortValue={setSortValue} />
        )}
        {isSidePanelOpen && (
          <Search sx={{ marginRight: 0, marginLeft: 0 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search workers" }}
            />
          </Search>
        )}
        <IconButton
          sx={{ paddingRight: 0, color: "#0b9afa" }}
          aria-label="upload picture"
          component="span"
          onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
        >
          {!isSidePanelOpen ? <ArrowCircleRight /> : <ArrowCircleLeft />}
        </IconButton>
      </SidePanelAcions>
      {isSidePanelOpen && <SidePanelWorkersList sortValue={sortValue} />}
    </Aside>
  );
};

export default SidePanel;
