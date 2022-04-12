import React, { useState, useEffect } from "react";

import "../Profile.css"; 
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import AbcIcon from '@mui/icons-material/Abc';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dashboard = () =>
{
    return(
    <div>
    <div className="section">
    <div className="title">
      <p style={{fontSize:"18px"}}>اطلاعات حساب کاربری</p>
    </div>
     <div className="content" style={{paddingTop:"10px"}}>
    <div
style={{direction:"rtl"  ,  paddingRight:"20px", float:"right"}}
>
   <AccountBoxIcon style={{float: "right"}}/>
      <p style={{float: "right" , marginRight:"7px", fontWeight:"bold"}}>نام مستعار:  </p>           
      </div>

      <div
style={{direction:"rtl"  ,  paddingRight:"20px", float:"right" , marginRight:"300px"}}
>
   <CakeIcon style={{float: "right"}}/>
      <p style={{float: "right" , marginRight:"7px", fontWeight:"bold"}}>تاریخ تولد : </p>           
      </div>
 

   <br/>
   <br/>
  <div
style={{direction:"rtl"  ,  paddingRight:"20px"}}
>
   <EmailIcon style={{float: "right"}}/>
      <p style={{float: "right" , marginRight:"7px", fontWeight:"bold"}}>ایمیل :  </p>           
      </div>

      


      <div
style={{direction:"rtl"  ,  paddingRight:"20px", float:"right" , marginRight:"325px"}}
>
   <AccountCircleIcon style={{float: "right"}}/>
      <p style={{float: "right" , marginRight:"7px", fontWeight:"bold" }}>نام کاربری : </p>           
      </div>
 


      <br/>
   <br/>
  <div
style={{direction:"rtl"  ,  paddingRight:"20px"}}
>
   <AbcIcon style={{float: "right" , }}/>
      <p style={{float: "right" , marginRight:"7px", fontWeight:"bold"}}>بیوگرافی: </p>           
      </div>

      

 
    

      </div>
      </div>

      </div>
    )

}

export default Dashboard;