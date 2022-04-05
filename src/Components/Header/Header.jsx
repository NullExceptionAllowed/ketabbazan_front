import React from "react";
import Home from "../../assets/Image/home3.jpg";
const Header = () => {
  return (
    <div>
      <img
        className="home_img"
        src={Home}
        alt="homeimg"
        style={{
          height: "600px",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Header;
