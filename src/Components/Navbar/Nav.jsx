import React,{useState} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link,useHistory } from "react-router-dom";
import Logo from "../../assets/Image/logo.png";
import Box from "@mui/material/Box";
import ArticleIcon from "@mui/icons-material/Article";
import DrawerComp from "./DrawerCopm";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

const Nav = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(600));
  const checkpx = useMediaQuery(theme.breakpoints.down(780));
  const history = useHistory();
  const handlesubmit = async (event) => {
    event.preventDefault();
    history.replace(`/Book/search/?q=${search}`);
  };
  const [search, setsearchname] = useState("");
  const Setsearch = (event) => {
    setsearchname(event.target.value);
  };
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
        position="fixed"
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Grid
                item
                xs={11}
                sx={{ flexGrow: 1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
                to={`/`}
                component={Link}
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
              <DrawerComp />
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
                  lg={1.7}
                  md={2.5}
                  sm={3}
                  sx={{ flexGrow: 1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                  to={`/`}
                  component={Link}
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
                <Grid item lg={6} md={5} sm={4}>
                  <Box
                    component="form"
                    style={{ fontFamily: "BYekan" }}
                    onSubmit={handlesubmit}
                  >
                    <Paper
                      sx={{
                        height: "45px",
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "8px",
                        backgroundColor: "#EBECF0",
                        display: { md: "flex", sm: "none" },
                      }}
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1, padding: "16px" }}
                        placeholder="جستجوی کتاب و نویسنده"
                        inputProps={{ "aria-label": "search google maps" }}
                        value={search}
                        onChange={Setsearch}
                      />
                      <IconButton
                        type="submit"
                        sx={{ p: "10px" }}
                        aria-label="search"
                      >
                        <SearchIcon style={{ color: "gray" }} />
                      </IconButton>
                    </Paper>
                  </Box>
                </Grid>
                <Grid item lg={2} md={2} sm={1}></Grid>
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
