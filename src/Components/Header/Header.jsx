import React from "react";
import Home from "../../assets/Image/banner8.jpg";
import "./Header.css";

// import Typical from "react-typical";
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
        {/* <Typical steps={["کتاب بازان", 6000]} loop={Infinity} wrapper="p" /> */}
        <p>کتاب بازان</p>
      </h2>
      <div className="home_info">
        کتابخوانی،مقاله گذاشتن و طراحی کوییز با کتاب بازان
      </div>
      <div className="home_info1">بهترین کتاب ها رو از اینجا بگیر</div>
      <button
        onClick={() => history.push("/Book")}
        className="home-banner__start-btn"
      >
        
        <span className="home-banner__start-btn-highlight">کتابارو از اینجا مشاهده کن </span>
      </button>
    </div>
  );
};

export default Header;
