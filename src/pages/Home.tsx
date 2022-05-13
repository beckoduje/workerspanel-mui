import React, { Fragment } from "react";

import { Container, Typography, styled } from "@mui/material";
// import { useSelector } from "react-redux";
import ChartPieLogo from "../layouts/ChartPieLogo";
import WPLogo from "../layouts/WPLogo";
// import { Fragment } from "react/cjs/react.production.min";
// import SidePanel from "../components/shared/SidePanel";

const Home = () => {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  // const headerClass = !isLoggedIn ? "main-header" : "main-header inactive";
  // const sidePanelActivatorClass = isLoggedIn
  //   ? "side-panel-activator"
  //   : "side-panel-activator inactive";

  // const theme = useTheme();

  const HomeTitle = styled(Typography)(({ theme }) => ({
    gridColumn: "span 2",
    alignSelf: "baseline",
    // variant i component prebacit dole kad skuzim kako
    variant: "h3",
    component: "h3",
    fontSize: "1.2rem",
    fontWeight: 400,
    position: "relative",
    textTransform: "uppercase",
    fontFamily: "Open Sans, sans-serif",
    color: theme.palette.text.primary,
    textAlign: "center",

    "&::after": {
      display: "inline-block",
      content: "' '",
      position: "absolute",
      height: "1px",
      width: "10rem",
      backgroundColor: "#353535",
      left: "50%",
      top: " 2.5rem",
      borderRadius: "2px",
      transform: "translateX(-50%)",
    },
  }));

  return (
    <Fragment>
      <Container
        sx={{
          display: "grid",
          gridTemplateRows: "8fr 3fr",
          gridTemplateColumns: "1fr 1fr",
          placeItems: "center",
          height: "calc(100% - 5.3rem)",
        }}
      >
        <WPLogo />
        <ChartPieLogo />
        <HomeTitle>Manage your workers</HomeTitle>
      </Container>
      {/* <div className={sidePanelActivatorClass}>
        <SidePanel />
      </div> */}
    </Fragment>
  );
};

export default Home;
