import React from "react";
import Navbar from "../Navbar/Nav";
import Navbar2 from "../Navbar/Nav2";
import Header from "../Header/Header";
import Showbook from "../Shownewbook/showbook";
import Workinfo from "../WorkInfo/workinfo";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Homepage = () => {
  let temp = null;
  let flag = localStorage.getItem("token");
  if (flag === null) {
    temp = <Navbar />;
  } else {
    console.log(flag);
    temp = <Navbar2 />;
  }

  return (
    <div>
      {temp}
      <Header />
      <Workinfo />
      <Showbook />
      <Grid
        style={{ display: "flex", justifyContent: "center", direction: "rtl" }}
        to={'/article/:id'}
        component={Link}
      >
        <div>مقاله</div>
      </Grid>
    </div>
  );
};

export default Homepage;
