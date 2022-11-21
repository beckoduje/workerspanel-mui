import React, { Fragment, useState, useEffect } from "react";

import { Container, Typography, Box, styled } from "@mui/material";
import { useSelector } from "react-redux";
import ChartPieLogo from "../layouts/home/ChartPieLogo";
import WPLogo from "../layouts/home/WPLogo";
import SidePanel from "../layouts/navigation/SidePanel";
// test nakon dugo vrimena
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn.isLoggedIn);
  const [workersList, setWorkersList] = useState();

  // fetch radnika start

  useEffect(() => {
    const fetchData = async () => {
      let list: any = [];
      try {
        const querySnapshot = await getDocs(collection(db, "workers"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setWorkersList(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(workersList);
  }, [workersList]);

  // fetch radnika kraj

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
      {!isLoggedIn && (
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
      )}
      {isLoggedIn && (
        <Box
          sx={{
            zIndex: 2000,
            position: "fixed",
            top: "5.3rem",
            height: "calc(100% - 5.3rem)",
          }}
        >
          <SidePanel />
        </Box>
      )}
    </Fragment>
  );
};

export default Home;
