import React from "react";
import { AppBar, Toolbar, Typography, makeStyles, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { height } from "@mui/system";
import Logo from "../../assets/Image/logo.png";
import Home from "../../assets/Image/home.jpg";
const Nav = () => {
  return (
    <div>
      <AppBar style={{ backgroundColor: "#fff", height: "12%" }}>
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              direction: "ltr",
              marginTop: "0.3%",
            }}
          >
            <Button
              variant="contained"
              to="/login"
              component={Link}
              style={{
                backgroundColor: "1479AD",
                fontWeight: 800,
                width: "80px",
                height:"36px"
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
                marginLeft: "10px",
                fontWeight: 800,
                width: "80px",
                height: "50px",
                height:"36px"
              }}
            >
              ثبت نام
            </Button>
          </div>
          <div style={{ marginLeft: "80%", display: "flex", direction: "rtl" }}>
            <img
              className="SignUpform_img"
              src={Logo}
              alt="Signuppicture"
              style={{
                height: "82px",
                direction: "rtl",
              }}
            />
          </div>
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
    </div>
  );
};

export default Nav;
