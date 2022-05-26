import React from "react";
import Home from "../../assets/Image/banner8.jpg";
import "./Header.css";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';


const Header = () => {
  const history = useHistory();
  return (
    <div className="Homepage_container">
      <img
        className="home_img"
        src={Home}
        alt="homeimg"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      <h2 className="home_title">
        <Typical steps={["کتاب بازان", 6000]} loop={Infinity} wrapper="p" />
      </h2>
      <div className="home_info">
        کتابخوانی،مقاله گذاشتن و طراحی کوییز با کتاب بازان
      </div>
      <div className="home_info1">بهترین کتاب ها رو از اینجا بگیر</div>
      {/* <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            borderRadius: "32px",
          }}
          className="home-banner__start-btn"
        >
          <InputBase
            sx={{ ml: 1, flex: 1, padding: "16px" }}
            placeholder="چه کتابی میخوای؟"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            to={`/Book`}
            component={Link}
            type="submit"
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon style={{ color: "#1565C0" }} />
          </IconButton>
        </Paper> */}

      <button
        onClick={() => history.push("/Book")}
        className="home-banner__start-btn"
      >
        
        <span className="home-banner__start-btn-highlight">کتابات از اینجا بگیر...  </span>
      </button>
    </div>
  );
};

export default Header;
