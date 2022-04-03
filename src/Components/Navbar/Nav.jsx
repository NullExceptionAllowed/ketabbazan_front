import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { height } from "@mui/system";
import Logo from "../../assets/Image/logo.png";
import Home from "../../assets/Image/home.jpg";
import Showbook from "../Showbook/showbook";
import Box from "@mui/material/Box";

const Nav = () => {
  return (
    // <div>
    //   <AppBar style={{ backgroundColor: "#fff", height: "12%" }}>
    //     <Toolbar>
    //       <div
    //         style={{
    //           display: "flex",
    //           justifyContent: "left",
    //           direction: "ltr",
    //           marginTop: "0.3%",
    //         }}
    //       >
    //         <Button
    //           variant="contained"
    //           to="/login"
    //           component={Link}
    //           style={{
    //             backgroundColor: "1479AD",
    //             fontWeight: 800,
    //             width: "80px",
    //             height:"36px"
    //           }}
    //         >
    //           ورود
    //         </Button>

    //         <Button
    //           variant="contained"
    //           to="/signup"
    //           component={Link}
    //           style={{
    //             backgroundColor: "CAE5F3",
    //             marginLeft: "10px",
    //             fontWeight: 800,
    //             width: "80px",
    //             height: "50px",
    //             height:"36px"
    //           }}
    //         >
    //           ثبت نام
    //         </Button>
    //       </div>
    //       <div style={{ marginLeft: "80%", display: "flex", direction: "rtl" }}>
    //         <img
    //           className="SignUpform_img"
    //           src={Logo}
    //           alt="Signuppicture"
    //           style={{
    //             height: "82px",
    //             direction: "rtl",
    //           }}
    //         />
    //       </div>
    //     </Toolbar>
    //   </AppBar>
    //   <img
    //     className="home_img"
    //     src={Home}
    //     alt="homeimg"
    //     style={{
    //       height: "500px",
    //       width:"85%",
    //       marginLeft:"7.7%",
    //       marginright:"25%",
    //       marginTop:"120px",
    //       borderRadius:"1%"
    //     }}
    //   />
    //   <Showbook/>
    // </div>
    <Box sx={{ flexGrow: 1, direction: "ltr" }}>
      <AppBar sx={{ backgroundColor: "#fff", height: "11%", direction: "rtl" }}>
        <Toolbar>
          <Grid container style={{ display: "flex", alignItems: "center" }} >
            <Grid
              item
              md={10}
              sx={{ flexGrow: 1 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                className="SignUpform_img"
                src={Logo}
                alt="Signuppicture"
                style={{
                  height: "62px",
                }}
              />
              <Typography
                variant="h5"
                component="p"
                style={{ fontWeight: 900, color: "#000", marginRight: "10px" }}
              >
                کتاب بازان
              </Typography>
            </Grid>
            <Grid item style={{}}>
              <Button
                variant="contained"
                to="/login"
                component={Link}
                style={{
                  backgroundColor: "1479AD",
                  fontWeight: 800,
                  width: "80px",
                  height: "36px",
                }}
              >
                ورود
              </Button>
              <Button
                variant="contained"
                to="/signup"
                component={Link}
                style={{
                  backgroundColor: "CAE5F3",
                  marginRight: "10px",
                  fontWeight: 800,
                  width: "80px",
                  height: "50px",
                  height: "36px",
                }}
              >
                ثبت نام
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
        <img
        className="home_img"
        src={Home}
        alt="homeimg"
        style={{
          height: "500px",
          width:"85%",
          marginLeft:"7.7%",
          marginright:"25%",
          marginTop:"120px",
          borderRadius:"1%"
        }}
      />
      <Showbook/>
    </Box>
  );
};

export default Nav;
