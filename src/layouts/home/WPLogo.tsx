import React from "react";

import { Box, styled } from "@mui/material";

const WPLogo = () => {
  const WPLogoBox = styled(Box)(() => ({
    position: "relative",
    width: "30rem",
    height: "18rem",
    fontWeight: 800,
  }));

  const WPLogoSmall = styled("span")(({ theme }) => ({
    fontSize: "6rem",
    position: "absolute",
    transform: "translateY(-50%)",
    top: "50%",
    color: theme.palette.text.primary,
    fontFamily: "Open Sans, sans-serif",
  }));

  const WPLogoBig = styled("span")(({ theme }) => ({
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14rem",
    position: "absolute",
    color: "rgba(0, 0, 0, 0.1)",
    transform: "translateY(-50%)",
    top: "50%",
    left: "4.5rem",
  }));

  return (
    <WPLogoBox>
      <WPLogoSmall>WP</WPLogoSmall>
      <WPLogoBig>WP</WPLogoBig>
    </WPLogoBox>
  );
};

export default WPLogo;
