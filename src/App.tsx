import React, { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { amber, deepOrange, grey } from "@mui/material/colors";
import { PaletteMode, Box } from "@mui/material";

import Navigation from "./layouts/navigation/Navigation";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import SignUp from "./pages/SignUp";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          background: {
            default: "#ffffff",
          },
          boxShadow: {
            primary: "0 8px 16px 0 rgba(0,0,0,0.12)",
            secondary: "0px 3px 3px rgba(0, 0, 0, 0.25)",
          },
          text: {
            primary: "#353535",
            secondary: "rgba(104, 99, 99, 0.9)",
            active: "#0b9afa",
            action: "#0b9afa",
            inputError: "rgba(252, 97, 0, 0.9)",
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

function App() {
  const [mode, setMode] = React.useState<any>("light");

  const darkModeTheme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={darkModeTheme}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        {/*<Route path="/searched-workers/:worker" element={<SearchedWorkers />} />
        <Route path="/single-worker/:workerId" element={<SingleWorker />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
