import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/Image/logo.png";
import Box from "@mui/material/Box";
import ArticleIcon from "@mui/icons-material/Article";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DrawerComp from "./DrawerCopm";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchBar from "./Searchbar";
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Menu from '@mui/material/Menu';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const options = ['داشبورد', 'ویرایش اطلاعات', 'خروج از حساب'];

const Nav = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(600));
  const checkpx = useMediaQuery(theme.breakpoints.down(900));
  const history = useHistory();
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExit = () => {
    localStorage.clear();
    setAnchorEl(null);
  }

  const handlesubmit = async (event) => {
    event.preventDefault();
    history.replace(`/Searchbook/?q=${search}`);
  };
  const handleSearch = () => {
    setOpenSearchBar(!openSearchBar);
  };
  const handleSearchBarClose = () => {
    setOpenSearchBar(false);
  };
  let paperstyle = {
    margin:"50px auto auto 100px"
  }
  let avatarstyle = {
    backgroundColor: "#679aea",
    margin: "auto auto auto 20px",
  };
  let avatarstyle2 = {
    backgroundColor: "#679aea",
    margin: "-40px auto auto 30px",
  };
  let arrowstyle = {
    borderRadius: "200px",
  }
  let arrowstyle2 = {
    margin: "auto 75px auto -50px",
    borderRadius: "200px",
    width: "20px"
  }
  let showbox = null;
  if (openSearchBar && checkpx) {
    showbox = <SearchBar open={openSearchBar} close={handleSearchBarClose}/>;
    console.log("*");
  }
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
              >
                <Grid
                  item
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
                <IconButton
                  style={{
                    color: "#1565C0",
                    display: "flex",
                    justifyContent: "center",
                    marginRight: "5%",
                  }}
                  onClick={handleSearch}
                >
                  <SearchIcon></SearchIcon>
                </IconButton>
              </Grid>

              <Button 
                style={arrowstyle} 
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <KeyboardArrowDownIcon />
              </Button>

              <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    style={{direction:"rtl", margin: "30px auto auto auto"}}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                      }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                      }}
                  >
                    <MenuItem component={Link} to="/profile" onClick={handleClose}>ویرایش پروفایل</MenuItem>
                    <MenuItem component={Link} to="/login" onClick={handleClose}>داشبورد</MenuItem>
                    <MenuItem component={Link} to="/" onClick={handleExit}>خروج</MenuItem>
              </Menu>

              <Avatar
                style={avatarstyle}
                sx={{ width: 46, height: 46 }}
              >
              </Avatar>
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
                  sm={3.8}
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
                {!checkpx ? (
                  <Grid item lg={6} md={5}>
                    <Box
                      component="form"
                      style={{ fontFamily: "BYekan" }}
                      onSubmit={handlesubmit}
                    >
                      <Paper
                        sx={{
                          height: "45px",
                          p: "2px 4px",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "8px",
                          backgroundColor: "#EBECF0",
                          display: { md: "flex", xs: "none" },
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
                ) : (
                  <>
                    <Grid item sm={1}>
                      <IconButton
                        style={{
                          color: "#1565C0",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        onClick={handleSearch}
                      >
                        <SearchIcon></SearchIcon>
                      </IconButton>
                    </Grid>
                  </>
                )}
                <Grid item lg={2} md={2} sm={3}></Grid>

                

                <Grid item lg={2} md={2.5} sm={4}>

                  <Button 
                    style={arrowstyle2}
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    >
                    <KeyboardArrowDownIcon />
                  </Button>

                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    style={{direction:"rtl", margin: "30px auto auto auto"}}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                      }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                      }}
                  >
                    <MenuItem component={Link} to="/profile" onClick={handleClose}>ویرایش پروفایل</MenuItem>
                    <MenuItem component={Link} to="/login" onClick={handleClose}>داشبورد</MenuItem>
                    <MenuItem component={Link} to="/" onClick={handleExit}>خروج</MenuItem>
                  </Menu>


                  <Avatar
                    style={avatarstyle2}
                    sx={{ width: 46, height: 46 }}
                  >
                  </Avatar>
                  
                </Grid>

              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>
      {showbox}
    </Box>
  );
};

export default Nav;
