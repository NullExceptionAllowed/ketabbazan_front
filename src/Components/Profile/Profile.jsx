import React, { useState } from "react";

import "./Profile.css";

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import Dashboard from "./Tools/Dashboard.jsx";
import EditProfile from "./Tools/EditProfile.jsx";
import AddPhoto from "./Tools/AddPhoto.jsx";
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Nav';
import Navbar2 from '../Navbar/Nav2';
import ChangeNav from './../Navbar/changeNav';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import { Button, Grid, Paper, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
import PaymentIcon from '@mui/icons-material/Payment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Edit from "./Tools/Edit.jsx";


const Profile = () => {


  let s1 = {
    margin: "100px auto auto auto",
    direction: "rtl"
  };
  let p1 = {
    height: "500px",
  };
  let p2 = {
    height: "500px",
  };
  

  const [flag, setFlag] = useState(0);

  const handleEdit = () => {
    setFlag(0);
  }

  const handleExit = () => {
    localStorage.clear();
  }

  let show = null;
  if (flag === 0) {
    show = <EditProfile />;
  }
  else if (flag === 1) {
    show = <Edit />;
  }
  else if (flag === 2) {
    show = <AddPhoto />;
  }



  return (
    <div>
      
      <ChangeNav/>

      <Grid lg={10} xs={10} container item spacing={2} style={s1}>

        <Grid item lg={3} xs={12}>

          <Paper style={p1} elevation={1}>

            <MenuList dense dir="rtl" onClick={handleEdit}>
              
              <MenuItem >
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <Typography style={{fontSize:"18px"}} inset> ویرایش پروفایل </Typography>
              </MenuItem>

              <Divider />

              <MenuItem >
                <ListItemIcon>
                  < MenuBookIcon />
                </ListItemIcon>
                <Typography style={{fontSize:"18px"}} inset> وضعیت کتاب‌های من</Typography>
              </MenuItem>

              <Divider />

              <MenuItem >
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <Typography style={{fontSize:"18px"}} inset> مقاله‌های من </Typography>
              </MenuItem>

              <Divider />

              <MenuItem disabled>
                <ListItemIcon>
                  <PaymentIcon/>
                </ListItemIcon>
                <Typography style={{fontSize:"18px"}} inset> شارژ کیف پول </Typography>
              </MenuItem>

              <Divider />

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <MenuItem component={Link} to="/" onClick={handleExit}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <Typography style={{fontSize:"18px", color:"red"}} inset>خروج از حساب</Typography>
              </MenuItem>

              

              
            </MenuList>
              
          </Paper>
          
        </Grid>

        
        
        

        <Grid item lg={9} xs={12}>
        
          <Paper style={p2} elevation={0}>
            {show}
          </Paper>

        </Grid>


      </Grid>
        
      
      {/* <EditProfile /> */}

    </div>
  );
};

export default Profile;
