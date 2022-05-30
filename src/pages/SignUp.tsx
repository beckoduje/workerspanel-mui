import { Container } from "@mui/material";

import SignUpForm from "../layouts/sign-up/SignUpForm";

const SignUp = () => {
  return (
    <Container
      component="section"
      sx={{
        padding: "3.75rem",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <SignUpForm />
    </Container>
  );
};

export default SignUp;
