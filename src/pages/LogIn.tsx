import React from "react";

import { Container } from "@mui/material";
import LogInForm from "../layouts/log-in/LogInForm";

const LogIn = () => {
  return (
    <Container
      component="section"
      sx={{
        padding: "6rem",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <LogInForm />
    </Container>
  );
};

export default LogIn;
