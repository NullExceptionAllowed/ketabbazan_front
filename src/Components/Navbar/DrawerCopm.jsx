import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";

const DrawerComp = () => {
  const [open, setopen] = useState(false);
  return (
    <div style={{ direction: "rtl", display: "flex" }}>
      <Drawer  open={open} onClose={() => setopen(false)}>
        <List style={{ direction: "rtl", marginLeft: "150px" }}>
          <ListItem button to="/login" component={Link}>
            <ListItemIcon>
              <LoginIcon style={{ color: "#1565C0" }} />
            </ListItemIcon>
            <ListItemText>ورود</ListItemText>
          </ListItem>
          <Divider style={{ marginTop: "20 px" }} />

          <ListItem button to="/signup" component={Link}>
            <ListItemIcon>
              <HowToRegIcon style={{ color: "#1565C0" }} />
            </ListItemIcon>
            <ListItemText>ثبت نام</ListItemText>
          </ListItem>
          <Divider style={{ marginTop: "20 px" }} />

          <ListItem button to="/signup" component={Link}>
            <ListItemIcon>
              <ArticleIcon style={{ color: "#1565C0" }} />
            </ListItemIcon>
            <ListItemText>مقاله بذار</ListItemText>
          </ListItem>
          <Divider style={{ marginTop: "20 px" }} />
        </List>
      </Drawer>

      <IconButton onClick={() => setopen(!open)}>
        <MenuRoundedIcon style={{ color: "#1565C0" }} />
      </IconButton>
    </div>
  );
};

export default DrawerComp;
