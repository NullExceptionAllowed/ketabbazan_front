import React, { useState } from "react";

import "./Profile.css";

import EditProfile from "./Tools/EditProfile.jsx";
import AddPhoto from "./Tools/AddPhoto.jsx";
import { Link } from "react-router-dom";
import ChangeNav from "./../Navbar/changeNav";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Grid, Paper, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from "@mui/icons-material/Logout";
import ArticleIcon from "@mui/icons-material/Article";
import PaymentIcon from "@mui/icons-material/Payment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SyncLockIcon from "@mui/icons-material/SyncLock";
import Edit from "./Tools/Edit.jsx";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ConditionBook from "./Tools/Conditionbook";
import Showbook from "./../Showbookall/Showbookall";

const Profile = () => {
  let s1 = {
    margin: "100px auto auto auto",
    direction: "rtl",
  };
  let p1 = {
    height: "500px",
  };
  let p2 = {
    height: "500px",
  };

  const [flag, setFlag] = useState(0);

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleEdit = (event, index) => {
    setFlag(0);
    setSelectedIndex(index);
  };

  const handleExit = () => {
    localStorage.clear();
  };

  const test = (event, index) => {
    setFlag(1);
    setSelectedIndex(index);
  };

  const handleshowbook = (event, index) => {
    setFlag(index);
    setSelectedIndex(index);
  };

  let show = null;
  if (flag === 0) {
    show = <EditProfile />;
  } else if (flag === 1) {
    show = <Edit />;
  } else if (flag === 2) {
    show = <AddPhoto />;
  } else if (flag === 9) {
    show = (
      <>
        <ConditionBook con="getpastread"/>
      </>
    );
  }
  else if (flag === 10) {
    show = (
      <>
        <ConditionBook con="getcurread"/>
      </>
    );
  }
  else if (flag === 11) {
    show = (
      <>
        <ConditionBook con="getfavourite"/>
      </>
    );
  }
  else if (flag === 12) {
    show = (
      <>
        <ConditionBook con="getleftread"/>
      </>
    );
  }

  return (
    <div>
      <ChangeNav />

      <Grid lg={10} xs={10} container item spacing={2} style={s1}>
        <Grid item lg={3} xs={12}>
          <Paper style={p1} elevation={1}>
            <MenuList dense dir="rtl">
              <MenuItem
                style={{ margin: "5px auto 10px auto" }}
                divider={true}
                selected={selectedIndex === 0}
                onClick={(event) => handleEdit(event, 0)}
              >
                <ListItemIcon>
                  <CreateIcon style={{ color: "#679aea" }} />
                </ListItemIcon>
                <Typography style={{ fontSize: "18px" }} inset>
                  {" "}
                  ویرایش پروفایل{" "}
                </Typography>
              </MenuItem>

              <MenuItem
                divider={true}
                style={{ margin: "auto auto 10px auto" }}
                onClick={handleClick}
              >
                <ListItemIcon>
                  <MenuBookIcon style={{ color: "#679aea" }} />
                </ListItemIcon>
                <Typography style={{ fontSize: "18px" }} inset>
                  {" "}
                  وضعیت کتاب‌های من
                </Typography>
                {open ? <ExpandLess /> : <ExpandMore />}
              </MenuItem>

              <Collapse dir="rtl" in={open} timeout="auto" unmountOnExit>
                <List component="div">
                  <ListItemButton
                    selected={selectedIndex === 9}
                    onClick={(event) => handleshowbook(event, 9)}
                  >
                    <Typography style={{ fontSize: "16px" }} inset>
                      خوانده‌ام
                    </Typography>
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    selected={selectedIndex === 10}
                    onClick={(event) => handleshowbook(event, 10)}
                  >
                    <Typography style={{ fontSize: "16px" }} inset>
                      در حال خواندنم
                    </Typography>
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    selected={selectedIndex === 11}
                    onClick={(event) => handleshowbook(event, 11)}
                  >
                    <Typography style={{ fontSize: "16px" }} inset>
                      می‌خواهم بخوانم
                    </Typography>
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    selected={selectedIndex === 12}
                    onClick={(event) => handleshowbook(event, 12)}
                  >
                    <Typography style={{ fontSize: "16px" }} inset>
                      رها کردم
                    </Typography>
                  </ListItemButton>
                </List>
              </Collapse>

              <MenuItem
                divider={true}
                style={{ margin: "auto auto 10px auto" }}
                selected={selectedIndex === 2}
                onClick={(event) => test(event, 2)}
              >
                <ListItemIcon>
                  <ArticleIcon style={{ color: "#679aea" }} />
                </ListItemIcon>
                <Typography style={{ fontSize: "18px" }} inset>
                  {" "}
                  مقاله‌های من{" "}
                </Typography>
              </MenuItem>

              <MenuItem
                divider={true}
                style={{ margin: "auto auto 10px auto" }}
                disabled
                selected={selectedIndex === 3}
              >
                <ListItemIcon>
                  <PaymentIcon style={{ color: "#679aea" }} />
                </ListItemIcon>
                <Typography style={{ fontSize: "18px" }} inset>
                  {" "}
                  شارژ کیف پول{" "}
                </Typography>
              </MenuItem>

              <MenuItem
                divider={true}
                style={{ margin: "auto auto 10px auto" }}
                disabled
                selected={selectedIndex === 4}
              >
                <ListItemIcon>
                  <SyncLockIcon style={{ color: "#679aea" }} />
                </ListItemIcon>
                <Typography style={{ fontSize: "18px" }} inset>
                  تغییر رمز عبور
                </Typography>
              </MenuItem>

              <MenuItem
                divider={true}
                style={{ margin: "auto auto 10px auto" }}
                component={Link}
                to="/"
                onClick={handleExit}
              >
                <ListItemIcon>
                  <LogoutIcon style={{ color: "red" }} />
                </ListItemIcon>
                <Typography style={{ fontSize: "18px", color: "red" }} inset>
                  خروج از حساب
                </Typography>
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
