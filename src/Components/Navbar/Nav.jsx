import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../assets/Image/logo.png";
import Home from "../../assets/Image/home.jpg";
import Showbook from "../Showbook/showbook";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ArticleIcon from "@mui/icons-material/Article";
import DrawerComp from "./DrawerCopm";

const Nav = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "Gray",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const MenuButton = ({ Icon, text, linkTo }) => {
    return (
      <div style={{ marginBottom: "5 px" }}>
        <Button
          style={{
            color: "#000",
            width: "100%",
            justifyContent: "flex-start",
            padding: "16px",
          }}
          variant="text"
          component={Link}
          to="/signup"
        >
          <Icon style={{ color: "#1565C0" }} />
          <span style={{ marginRight: "5px" }}>{text}</span>
        </Button>
      </div>
    );
  };
  return (
    <Box sx={{ flexGrow: 1, direction: "rtl" }}>
      <AppBar
        sx={{ backgroundColor: "#fff", height: "63px", direction: "rtl" }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Grid
                item
                xs={11}
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
                  style={{
                    fontWeight: 900,
                    color: "#000",
                    marginRight: "10px",
                  }}
                >
                  کتاب بازان
                </Typography>
              </Grid>
              <DrawerComp/>
            </>
          ) : (
            <>
              <Grid
                container
                sx={{ placeItems: "center" }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Grid
                  item
                  lg={2}
                  md={2.5}
                  sm={3.5}
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
                    style={{
                      fontWeight: 900,
                      color: "#000",
                      marginRight: "10px",
                    }}
                  >
                    کتاب بازان
                  </Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={2.5}>
                  <MenuButton
                    Icon={ArticleIcon}
                    text="مقاله بذار"
                    linkTo="/signup"
                  />
                </Grid>
                <Grid item lg={6} md={5} sm={2}></Grid>
                <Grid item lg={2} md={2.5} sm={4}>
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
                      height: "36px",
                    }}
                  >
                    ثبت نام
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>
      <img
        className="home_img"
        src={Home}
        alt="homeimg"
        style={{
          height: "500px",
          width: "100%",
          marginTop: "60px",
          borderRadius: "1%",
        }}
      />
      <Typography
        variant="h5"
        style={{
          fontWeight: 800,
          color: "#1565C0",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        جدیدترین کتاب ها
      </Typography>
      <Showbook />
    </Box>
  );
};

export default Nav;
