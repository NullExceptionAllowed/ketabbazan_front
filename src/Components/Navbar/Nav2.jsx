// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Avatar,
//   Typography,
//   Button,
//   Grid,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { Link, useHistory } from "react-router-dom";
// import Logo from "../../assets/Image/logo.png";
// import Box from "@mui/material/Box";
// import ArticleIcon from "@mui/icons-material/Article";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import DrawerComp from "./DrawerCopm";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import SearchBar from "./Searchbar";
// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';
// import Menu from '@mui/material/Menu';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const Nav = () => {
//   const theme = useTheme();
//   const isMatch = useMediaQuery(theme.breakpoints.down(600));
//   const checkpx = useMediaQuery(theme.breakpoints.down(900));
//   const history = useHistory();
//   const [openSearchBar, setOpenSearchBar] = useState(false);

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleExit = () => {
//     localStorage.clear();
//     setAnchorEl(null);
//   }

//   const handlesubmit = async (event) => {
//     event.preventDefault();
//     history.replace(`/Searchbook/?q=${search}`);
//   };
//   const handleSearch = () => {
//     setOpenSearchBar(!openSearchBar);
//   };
//   const handleSearchBarClose = () => {
//     setOpenSearchBar(false);
//   };
//   let paperstyle = {
//     margin:"50px auto auto 100px"
//   }
//   let avatarstyle = {
//     backgroundColor: "#679aea",
//     margin: "auto auto auto 20px",

//   };
//   let avatarstyle2 = {
//     backgroundColor: "#679aea",
//     margin: "-40px auto auto 30px",
//   };
//   let arrowstyle = {
//     borderRadius: "200px",
//   }
//   let arrowstyle2 = {
//     margin: "auto 75px auto -50px",
//     borderRadius: "200px",
//     width: "20px"
//   }
//   let showbox = null;
//   if (openSearchBar && checkpx) {
//     showbox = <SearchBar open={openSearchBar} close={handleSearchBarClose}/>;
//     console.log("*");
//   }
//   const [search, setsearchname] = useState("");
//   const Setsearch = (event) => {
//     setsearchname(event.target.value);
//   };
//   const MenuButton = ({ Icon, text, linkTo }) => {
//     return (
//       <div style={{ marginBottom: "5 px" }}>
//         <Button
//           style={{
//             color: "#000",
//             width: "100%",
//             justifyContent: "flex-start",
//             padding: "16px",
//           }}
//           variant="text"
//           component={Link}
//           to="/signup"
//         >
//           <Icon style={{ color: "#1565C0" }} />
//           <span style={{ marginRight: "5px" }}>{text}</span>
//         </Button>
//       </div>
//     );
//   };
//   return (
//     <Box sx={{ flexGrow: 1, direction: "rtl" }}>
//       <AppBar
//         sx={{ backgroundColor: "#fff", height: "63px", direction: "rtl" }}
//         position="fixed"
//       >
//         <Toolbar>
//           {isMatch ? (
//             <>
//               <Grid
//                 item
//                 xs={11}
//                 sx={{ flexGrow: 1 }}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   textDecoration: "none",
//                 }}
//               >
//                 <Grid
//                   item
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     textDecoration: "none",
//                   }}
//                   to={`/`}
//                   component={Link}
//                 >
//                   <img
//                     className="SignUpform_img"
//                     src={Logo}
//                     alt="Signuppicture"
//                     style={{
//                       height: "62px",
//                     }}
//                   />
//                   <Typography
//                     variant="h5"
//                     component="p"
//                     style={{
//                       fontWeight: 900,
//                       color: "#000",
//                       marginRight: "10px",
//                     }}
//                   >
//                     کتاب بازان
//                   </Typography>
//                 </Grid>
//                 <IconButton
//                   style={{
//                     color: "#1565C0",
//                     display: "flex",
//                     justifyContent: "center",
//                     marginRight: "5%",
//                   }}
//                   onClick={handleSearch}
//                 >
//                   <SearchIcon></SearchIcon>
//                 </IconButton>
//               </Grid>

//               {/* <Button
//                 style={arrowstyle}
//                 id="demo-positioned-button"
//                 aria-controls={open ? 'demo-positioned-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//                 onClick={handleClick}
//               >
//                 <KeyboardArrowDownIcon />
//               </Button> */}

//               <Avatar
//                 style={{backgroundColor: "#679aea",margin: "auto auto auto 20px", cursor:'pointer'}}
//                 sx={{ width: 46, height: 46 }}
//                 id="demo-positioned-button"
//                 aria-controls={open ? 'demo-positioned-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//                 onClick={handleClick}
//               >
//               </Avatar>

//               <Menu
//                     id="demo-positioned-menu"
//                     aria-labelledby="demo-positioned-button"
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleClose}
//                     style={{direction:"rtl", margin: "30px auto auto auto"}}
//                     anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                       }}
//                     transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                       }}
//                   >
//                     <MenuItem component={Link} to="/profile" onClick={handleClose}>ویرایش پروفایل</MenuItem>
//                     <MenuItem component={Link} to="/profile" onClick={handleClose}>وضعیت کتاب‌های من</MenuItem>
//                     <MenuItem component={Link} to="/profile" onClick={handleClose}>مقاله‌های من</MenuItem>
//                     <MenuItem component={Link} to="/profile" onClick={handleClose}>شارژ کیف پول</MenuItem>
//                     <MenuItem component={Link} to="/" onClick={handleExit} >
//                       <Typography style={{color:"red"}}>خروج از حساب</Typography>
//                     </MenuItem>
//               </Menu>

//             </>
//           ) : (
//             <>
//               <Grid
//                 container
//                 sx={{ placeItems: "center" }}
//                 style={{ display: "flex", alignItems: "center" }}
//               >
//                 <Grid
//                   item
//                   lg={2}
//                   md={2.5}
//                   sm={3.8}
//                   sx={{ flexGrow: 1 }}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     textDecoration: "none",
//                   }}
//                   to={`/`}
//                   component={Link}
//                 >
//                   <img
//                     className="SignUpform_img"
//                     src={Logo}
//                     alt="Signuppicture"
//                     style={{
//                       height: "62px",
//                     }}
//                   />
//                   <Typography
//                     variant="h5"
//                     component="p"
//                     style={{
//                       fontWeight: 900,
//                       color: "#000",
//                       marginRight: "10px",
//                     }}
//                   >
//                     کتاب بازان
//                   </Typography>
//                 </Grid>
//                 {!checkpx ? (
//                   <Grid item lg={6} md={5}>
//                     <Box
//                       component="form"
//                       style={{ fontFamily: "BYekan" }}
//                       onSubmit={handlesubmit}
//                     >
//                       <Paper
//                         sx={{
//                           height: "45px",
//                           p: "2px 4px",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           borderRadius: "8px",
//                           backgroundColor: "#EBECF0",
//                           display: { md: "flex", xs: "none" },
//                         }}
//                       >
//                         <InputBase
//                           sx={{ ml: 1, flex: 1, padding: "16px" }}
//                           placeholder="جستجوی کتاب و نویسنده"
//                           inputProps={{ "aria-label": "search google maps" }}
//                           value={search}
//                           onChange={Setsearch}
//                         />
//                         <IconButton
//                           type="submit"
//                           sx={{ p: "10px" }}
//                           aria-label="search"
//                         >
//                           <SearchIcon style={{ color: "gray" }} />
//                         </IconButton>
//                       </Paper>
//                     </Box>
//                   </Grid>
//                 ) : (
//                   <>
//                     <Grid item sm={1}>
//                       <IconButton
//                         style={{
//                           color: "#1565C0",
//                           display: "flex",
//                           justifyContent: "center",
//                         }}
//                         onClick={handleSearch}
//                       >
//                         <SearchIcon></SearchIcon>
//                       </IconButton>
//                     </Grid>
//                   </>
//                 )}
//                 <Grid item lg={2} md={2} sm={3}></Grid>

//                 <Grid item lg={2} md={2.5} sm={4}>

//                   {/* <Button
//                     style={arrowstyle2}
//                     id="demo-positioned-button"
//                     aria-controls={open ? 'demo-positioned-menu' : undefined}
//                     aria-haspopup="true"
//                     aria-expanded={open ? 'true' : undefined}
//                     onClick={handleClick}
//                     >
//                     <KeyboardArrowDownIcon />
//                   </Button> */}

//                   <Avatar
//                     style={{backgroundColor: "#679aea",margin: "auto auto auto 20px", cursor:'pointer'}}
//                     sx={{ width: 46, height: 46 }}
//                     id="demo-positioned-button"
//                     aria-controls={open ? 'demo-positioned-menu' : undefined}
//                     aria-haspopup="true"
//                     aria-expanded={open ? 'true' : undefined}
//                     onClick={handleClick}

//                   >
//                   </Avatar>

//                   <Menu
//                     id="demo-positioned-menu"
//                     aria-labelledby="demo-positioned-button"
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleClose}
//                     style={{direction:"rtl", margin: "40px auto auto 20px"}}
//                     anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                       }}
//                     transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                       }}
//                   >
//                     <MenuItem component={Link} to="/profile" onClick={handleClose}>ویرایش پروفایل</MenuItem>
//                     <MenuItem component={Link} to="/profile" onClick={handleClose}>وضعیت کتاب‌های من</MenuItem>
//                     <MenuItem component={Link} to="/profile" onClick={handleClose}>مقاله‌های من</MenuItem>
//                     <MenuItem component={Link} to="/profile" onClick={handleClose}>شارژ کیف پول</MenuItem>
//                     <MenuItem component={Link} to="/" onClick={handleExit}>
//                       <Typography style={{color:"red"}}>خروج از حساب</Typography>
//                     </MenuItem>
//                   </Menu>

//                 </Grid>

//               </Grid>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//       {showbox}
//     </Box>
//   );
// };

// export default Nav;

import React, { useState , useEffect} from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  Modal,
} from "@mui/material";
import Badge from '@mui/material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/Image/logo.png";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ImageUser from "../../assets/Image/image.png";
import DrawerComp from "./DrawerCopm";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchBar from "./Searchbar";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Menu from "@mui/material/Menu";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./style.css";
import OptionProfile from './OPtionProfile';
import axios, { post } from 'axios';
import { baseUrl } from './../../Variable';


const Nav = () => {
  const theme = useTheme();
  const isMatch600 = useMediaQuery(theme.breakpoints.down(650));
  const checkpx = useMediaQuery(theme.breakpoints.down(900));
  const history = useHistory();
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [username, setusername] = useState("");
  //const [is_admin, setis_admin] = useState("");
  //const [is_super_admin, setis_super_admin] = useState("");
  const[openop,setopenop]=useState(false);
  const [invisible,setInvisible] = useState(true);
  const [dialogVisibility,setDialogVisibility] = useState();
  const [newGifts,setNewGifts] = useState([]);
  const[path,setpath]=useState(localStorage.getItem('main_path'));

  let token = "Token " + localStorage.getItem('token');


  useEffect(() => {
    /*let is_admin = localStorage.getItem('is_admin');
    let is_super_admin = localStorage.getItem('is_super_admin');
    if (is_admin == true && is_super_admin == true){
      setpath("/Root") ;
    }else if (is_admin == true && is_super_admin == false){
      setpath("/Admin");
    }else {
      setpath("/");
    }
    console.log( is_super_admin);
    console.log( is_admin);
    console.log( path);*/
    axios.get(`${baseUrl}/profile/info/`, {
        headers: {
            'Content-Type': 'application/json ',
            'Authorization': token
        }
    }).then((res) => {

        setusername(res.data.username);
       
    });

    axios.get(`${baseUrl}/gift/hasunread/`,{
      headers: {
        'Content-Type': 'application/json ',
        'Authorization': token
    }
    }).then((res)=>{
      setInvisible(!res.data.has_unread)
    })

    axios.get(`${baseUrl}/gift/allreceivedgifts/`,{
      headers: {
        'Content-Type': 'application/json ',
        'Authorization': token
    }
    }).then((res)=>{
      setNewGifts(res.data.filter(gift=> gift.is_read != true))
      console.log(res.data)
    })

}, []);

  const handlesubmit = async (event) => {
    event.preventDefault();
    history.replace(`/Searchbook/?q=${search}`);
  };
  const handleSearch = () => {
    setOpenSearchBar(!openSearchBar);
    console.log(openSearchBar + "2222");
  };
  const handleSearchBarClose = () => {
    setOpenSearchBar(false);
  };
  let showbox = null;
  if (openSearchBar && checkpx) {
    showbox = <SearchBar open={openSearchBar} close={handleSearchBarClose} />;
  }
  const [search, setsearchname] = useState("");
  const Setsearch = (event) => {
    setsearchname(event.target.value);
  };

  const MouseOver = (event) => {
    event.target.style.color = "#1565C0";
  };
  const MouseOut = (event) => {
    event.target.style.color = "#545252";
  };


  const handleShowmenu = () => {
    history.push('/profile');
  };
  let oppro=null;
  if(openop){
    oppro=<OptionProfile />
  }

  const bazKonandeyeDialog = ()=>{
    setDialogVisibility(true);
  }

  const OurNiceModal = ()=>{
    return       <Modal open={dialogVisibility} onClose={()=>{setDialogVisibility(false)}}>
    <div style={{width:300, height:300, backgroundColor:"white", marginTop:100, marginLeft:50}}>
      {newGifts.map((book,i)=>{
        return <div  style={{direction:"rtl"}}>
          کاربر
          {" "+book.sender.username+" "}
          کتاب
          {" "+book.book.name+" "}
          را به شما هدیه داده
          😁
          <div style={{direction:"rtl" ,display:"block"}}>
            پیام ارسالی
            {": "+book.message}
          </div>
          <div style={{display:"flex", justifyContent:"space-evenly"}}>
          <Button onClick={()=>{
          history.replace(`/bookinfo/${book.book.id}`);
        }}  >مشاهده کتاب</Button>
              <Button onClick={()=>{
          console.log("api call to mark gift messages as read")
          setNewGifts(newGifts.filter(gift=> gift.id !== book.id))
          setInvisible(newGifts.length == 1)
          axios.put(`${baseUrl}/gift/markasread/`,{id:book.id},{
            headers: {
              'Content-Type': 'application/json ',
              'Authorization': token
          }})
        }} >متوجه شدم</Button>
          </div>
        </div>
      })}
      {newGifts.length == 0 ?? <div> هیچ هدیه جدیدی دریافت نکرده اید</div>}
    </div>

  </Modal>
  }

  const OurNiceBadge = ()=>{
    return <div>
    <IconButton onClick={bazKonandeyeDialog}>
    <Badge color="primary" variant="dot" invisible={invisible}>
    <EmailIcon  color="black" style={{color:"black"}} />
</Badge>
    </IconButton>
    </div>
  }



  return (
    <Box sx={{ flexGrow: 1, direction: "rtl" }}>
      <AppBar
        sx={{ backgroundColor: "#fff", height: "63px", direction: "rtl" }}
        position="fixed"
      >
        <Toolbar>
          {!isMatch600 && (
            <>
              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "63px",
                  width: "95%",
                }}
              >
                <Grid component={Link} to={localStorage.getItem('main_path')}>
                  <img
                    className="Nav_img"
                    src={Logo}
                    alt="Signuppicture"
                    style={{}}
                  />
                </Grid>
                <Grid
                  className="Nav_type"
                  component={Link}
                  to={localStorage.getItem('main_path')}
                  style={{
                    color: "#0D9ECF",
                    marginRight: "10px",
                    textDecoration: "none",
                  }}
                >
                  کتاب بازان
                </Grid>
                <Grid
                  sx={{
                    marginRight: "0.8rem",
                    color: "#545252",
                    fontSize: "0.9rem",
                    display: "flex",
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    component={Link}
                    to={localStorage.getItem('main_path')}
                    sx={{
                      marginRight: "1.1rem",
                      textDecoration: "none",
                      color: "#545252",
                    }}
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    خانه
                  </Typography>
                  <Typography
                    component={Link}
                    to={`/AboutUS`}
                    sx={{
                      marginRight: "1.1rem",
                      textDecoration: "none",
                      color: "#545252",
                    }}
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    درباره ما
                  </Typography>
                  <Typography
                    component={Link}
                    to={`/Designquiz`}
                    sx={{
                      marginRight: "1.1rem",
                      textDecoration: "none",
                      color: "#545252",
                    }}
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    طرح سوال
                  </Typography>

                  {/* <Typography
              component={Link}
              sx={{
                marginRight: "1.1rem",
                textDecoration: "none",
                color: "#545252",
              }}
            >
             مقاله
            </Typography> */}
                </Grid>
                {!checkpx && (
                  <Box
                    component="form"
                    style={{
                      fontFamily: "BYekan",
                      marginRight: "2%",
                      width: "30%",
                    }}
                    onSubmit={handlesubmit}
                  >
                    <Grid
                      sx={{
                        height: "40px",
                        p: "2px 4px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50px",
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
                    </Grid>
                  </Box>
                )}
                {checkpx && (
                  <Grid sx={{ marginRight: "2%" }}>
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
                )}
              </Grid>
              <OurNiceBadge />

              <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  style={{ display: "flex", justifyContent: "center" }}
                  onClick={handleShowmenu}
                >
                  <img
                    src={`${baseUrl}/profile/getimage/?username=${username}`}
                    alt="image"
                    style={{borderRadius:"50%"}}
                    className="Nav2_Avatar"
                  />
                </Button>
              </Grid>
            </>
          )}
          {isMatch600 && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "63px",
                }}
              >
                <DrawerComp />
              </div>
              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "63px",
                  marginRight: "3%",
                  width: "100%",
                }}
              >
                <Grid component={Link} to={`/`}>
                  <img
                    className="Nav_img"
                    src={Logo}
                    alt="Signuppicture"
                    style={{
                    }}
                  />
                </Grid>

                <Grid
                  component={Link}
                  className="Nav_type"
                  to={`/`}
                  style={{
                    color: "#0D9ECF",
                    marginRight: "10px",
                    textDecoration: "none",
                  }}
                >
                  کتاب بازان
                </Grid>

                <Grid sx={{ marginRight: "3%" }}>
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
              </Grid>
              <OurNiceBadge />

              <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  style={{ display: "flex", justifyContent: "center" }}
                  onClick={handleShowmenu}
                >
                  <img
                    alt="Image"
                    src={`${baseUrl}/profile/getimage/?username=${username}`}
                    style={{borderRadius:"50%"}}
                    className="Nav2_Avatar"
                  />
                </Button>
              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>
      {showbox}
      {oppro}
      <OurNiceModal />
    </Box>
  );
};

export default Nav;
