import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  InputBase,
  Box,
  Badge,
  Avatar,
  styled,
} from "@mui/material";

import {
  Search as SearchIcon,
  Visibility,
  Settings,
} from "@mui/icons-material";
//import VisibilityIcon from '@mui/icons-material/Visibility';
// import SettingsIcon from '@mui/icons-material/Settings';

//import { useTheme } from "@mui/material/styles";

const Navigation = () => {
  // const outTheme = useTheme();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const CustomAppBar = styled(AppBar)(({ theme }) => ({
    position: "sticky",
    backgroundColor: theme.palette.background.default,
    padding: 0,
    boxShadow: theme.palette.boxShadow.primary,
  }));

  const HomeLink = styled(NavLink)(({ theme }) => ({
    textTransform: "uppercase",
    color: theme.palette.text.primary,
    textDecoration: "none",
    fontFamily: "Open Sans, sans-serif",
    cursor: "pointer",
    transition: "color 0.2s",
    fontWeight: 800,
    "&:hover": {
      color: theme.palette.text.secondary,
    },
  }));

  const NavLinksList = styled("ul")(({ theme }) => ({
    listStyle: "none",
    display: "flex",
    alignItems: "center",
  }));

  const Link = styled(NavLink)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: "none",
    marginLeft: "1.2rem",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    transition: "color 0.2s",
    "&:hover": {
      color: theme.palette.text.secondary,
    },
    "&.active": {
      color: "#0b9afa",
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    marginLeft: 0,
    marginRight: "1.2rem",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
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
          width: "20ch",
        },
      },
    },
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "1.2rem",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  return (
    <CustomAppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "5.3rem",
        }}
      >
        <HomeLink to="/home">Workers panel</HomeLink>
        <NavLinksList>
          {!isLoggedIn && (
            <Link
              to="/about"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              About
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              to="/sign-up"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Sign up
            </Link>
          )}

          {/* linkovi LOGGED IN */}

          {isLoggedIn && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search workers" }}
              />
            </Search>
          )}

          {isLoggedIn && (
            <Icons>
              <Badge badgeContent={2}>
                <Visibility />
              </Badge>
              <Settings />
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Icons>
          )}

          {/* linkovi LOGGED IN */}

          {!isLoggedIn && (
            <Link
              to="/log-in"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Log in
            </Link>
          )}
        </NavLinksList>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navigation;
