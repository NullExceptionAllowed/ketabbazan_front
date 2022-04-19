import React, { useState } from "react";

import "./Profile.css";
//import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import Dashboard from "./Tools/Dashboard.jsx";
import Edit from "./Tools/Edit.jsx";
import AddPhoto from "./Tools/AddPhoto.jsx";
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Nav';
import Navbar2 from '../Navbar/Nav2';


const Profile = () => {
  const [flag, setFlag] = useState(0);
  // const token = "JWT" + localStorage.getItem("token");
  // console.log(token);

	let temp = null;
  let f = localStorage.getItem('token');
  if (f === null) {
      temp = (
          <Navbar/>
      );
  }
  else{
      console.log(flag)
      temp = (
          <Navbar2/>
      );
  }

  const handleEdit = () => {
    setFlag(1);
  }
  const handleDashboard = () => {
    setFlag(0);
  }
  const handlePhoto = () => {
    setFlag(2);
  }
  const handleExit = () => {
    localStorage.clear();
  }

  let show = null;
  if (flag === 0) {
    show = <Dashboard />;
  }
  else if (flag === 1) {
    show = <Edit />;
  }
  else if (flag === 2) {
    show = <AddPhoto />;
  }



  return (
    <div>
      <div className="profile_container">
        {temp}
        <aside className="profile_container_aside">
          <div className="profile_container_asideTop">
            <div className="profile_image">
              <img src="./img/logo.png" />
            </div>

          </div>
          <div className="profile_container_asidebottom">
            <ul style={{ direction: "rtl", marginTop: "27PX " }}>
              <li onClick={handleDashboard}>داشبورد</li>
              <li onClick={handleEdit} > ویرایش حساب کاربری</li>
              <li >ویرایش تنظیمات حساب کاربری </li>
              <li>تغییر رمز عبور </li>
              <li>کیف پول </li>
              <li> کتاب های خریداری شده من</li>
              <li>کتاب های مورد علاقه من </li>
              <li onClick={handlePhoto}>افزودن عکس</li>
              <li >
                <Link id="profile_styleli" to="/" onClick={handleExit}>
                  خروج از حساب کاربری
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {show}

      </div>

    </div>
  );
};

export default Profile;
