import React, { useState } from "react";

import "./Profile.css"; 
//import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import Dashboard from "./components/Dashboard.jsx";
import Edit from "./components/Edit.jsx";
import AddPhoto from "./components/AddPhoto.jsx";


const Profile = () => {
   const [flag , setFlag] = useState(0);
  // const token = "JWT" + localStorage.getItem("token");
  // console.log(token);
  

  
  const handleEdit =  () =>
  {
    setFlag(1);
  }
  
  const handleDashboard = () =>
   {

    setFlag(0);
   }
   const handlePhoto = () =>
   {
     setFlag(2);
   }

   let show = null;
    if(flag === 0)
    {
     
     show = <Dashboard/>;
      
    }
    else if (flag === 1)
{
    show=<Edit/>;
}
else if(flag === 2)
{
  show= <AddPhoto/>;
}
   
   

  return (
    <div>
       <div className ="container">
          <aside className="aside">
                <div className="asideTop">
                  <div className="image">
                    <img   src="./img/logo.png"  />
                  </div>
                  
                </div>
                <div className="asidebottom">
                     <ul style={{direction:"rtl" ,  marginTop:"27PX "}}>
                          <li onClick={handleDashboard}>داشبورد</li>
                         <li onClick={handleEdit} > ویرایش حساب کاربری</li>
                          <li>ویرایش تنظیمات حساب کاربری </li>
                          <li>تغییر رمز عبور </li>
                          <li>کیف پول </li>
                          <li> کتاب های خریداری شده من</li>
                          <li>کتاب های مورد علاقه من </li>
                          <li onClick={handlePhoto}>افزودن عکس</li>
                          <li>خروج از حساب کاربری</li>
                     </ul>
                  </div>
          </aside>
         

    
          {show}
         
       </div>
       
    </div>
  );
};

export default Profile;
