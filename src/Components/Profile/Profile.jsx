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


const Profile = () => {


  const [flag, setFlag] = useState(0);




  // let show = null;
  // if (flag === 0) {
  //   show = <Dashboard />;
  // }
  // else if (flag === 1) {
  //   show = <Edit />;
  // }
  // else if (flag === 2) {
  //   show = <AddPhoto />;
  // }



  return (
    <div>
      
      <ChangeNav/>
        

      <EditProfile />

    </div>
  );
};

export default Profile;
