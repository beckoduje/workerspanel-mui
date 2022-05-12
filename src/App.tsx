import React, { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";

import { amber, deepOrange, grey } from "@mui/material/colors";
import { PaletteMode, Box } from "@mui/material";

import Navigation from "./layouts/Navigation";

const getDesignTokens = (mode: any) => ({
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
          },
          text: {
            primary: "#353535",
            secondary: "rgba(104, 99, 99, 0.9)",
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
      <Box
        sx={{
          marginTop: "100px",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        Glava
      </Box>
    </ThemeProvider>
  );
}

export default App;
