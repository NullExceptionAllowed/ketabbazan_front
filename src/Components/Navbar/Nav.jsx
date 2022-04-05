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
import Box from "@mui/material/Box";
import ArticleIcon from "@mui/icons-material/Article";
import DrawerComp from "./DrawerCopm";

const Nav = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
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
        position="static"
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
    </Box>
  );
};

export default Nav;
