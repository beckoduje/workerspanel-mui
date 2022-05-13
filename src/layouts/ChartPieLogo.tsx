import React from "react";
import pieChart from "../assets/images/pie-chart.png";

import { Box, styled } from "@mui/material";

const ChartPieLogo = () => {
  const ChartLogoBox = styled(Box)(() => ({
    position: "relative",
    width: "26rem",
    height: "26rem",
  }));

  // const ChartLogoImgSm = styled(Box)(() => ({
  //   position: "absolute",
  //   height: "11rem",
  //   transform: "translateY(-50%)",
  //   top: "52%",
  //   right: 0,
  //   opacity: "0.8",
  // }));

  // const ChartLogoImgBg = styled(Box)(() => ({
  //   opacity: "0.1",
  //   position: "absolute",
  //   height: "16rem",
  //   transform: "rotateZ(171deg) translateY(-50%)",
  //   top: "-13%",
  //   left: "6rem",
  // }));

  return (
    <ChartLogoBox>
      {/* <ChartLogoImgSm component="img" alt="chart logo small" src={pieChart} />
      <ChartLogoImgBg component="img" alt="chart logo big" src={pieChart} /> */}
      <Box
        component="img"
        sx={{
          position: "absolute",
          height: "7rem",
          transform: "translateY(-50%)",
          top: "50%",
          right: 0,
          opacity: "0.8",
        }}
        src={pieChart}
        alt="chart logo small"
      />

      <Box
        component="img"
        sx={{
          opacity: "0.1",
          position: "absolute",
          height: "16rem",
          transform: "rotateZ(171deg) translateY(-50%)",
          top: "-13%",
          left: "6rem",
        }}
        src={pieChart}
        alt="chart logo big"
      />
    </ChartLogoBox>
  );
};

export default ChartPieLogo;
