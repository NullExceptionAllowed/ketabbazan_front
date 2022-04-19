import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Profile.css";
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import AbcIcon from '@mui/icons-material/Abc';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { baseUrl } from "../../../Variable";


const Dashboard = () => {
   const [user, setuser] = useState([]);
   const [profile, setprofile] = useState([]);
   const [day, setDay] = useState("");
   const [month , setMonth] = useState("");
   const [year , setYear] = useState("");
   const [birthday , setBirthday]=useState("");
   useEffect(() => { intialize() }, []);


   let token = "Token " + localStorage.getItem('token');
   console.log(token);
   const intialize = () => {
      axios.get(`${baseUrl}/profile/info/`, {
         headers: {
            'Content-Type': 'application/json ',
            'Authorization': token
         }
      }).then((res) => {
         console.log(res.data.username);
         setuser(res.data);
         setprofile(res.data.profile);
         setMonth(res.data.profile.born_date.split("-")[1]);
      setDay(res.data.profile.born_date.split("-")[2]);
      setYear(res.data.profile.born_date.split("-")[0]);
      })
   }


   return (
      <div>
         <div className="profile_section">
            <div className="profile_section_title">
               <p style={{ fontSize: "18px" }}>اطلاعات حساب کاربری</p>
            </div>
            <div className="profile_section_content" style={{ paddingTop: "10px", display: "flex", flexDirection: "row", justifyContent: "inherit" }}>

               <div className="profile_content_right" style={{ width: "430px" }} >

                  <div
                     style={{ direction: "rtl", paddingRight: "20px", }}
                  >
                     <AccountBoxIcon style={{ float: "right" }} />
                     <p style={{ float: "right", marginRight: "7px", fontWeight: "bold" }}> نام مستعار : {user.nickname} </p>
                  </div>

                  <br />
                  <br />

                  <div
                     style={{ direction: "rtl", paddingRight: "20px" }}
                  >
                     <EmailIcon style={{ float: "right" }} />
                     <p style={{ float: "right", marginRight: "7px", fontWeight: "bold" }}>ایمیل : {user.email}  </p>
                  </div>

                  <br />
                  <br />

                  <div
                     style={{ direction: "rtl", paddingRight: "20px" }}
                  >
                     <AbcIcon style={{ float: "right" }} />
                     <p style={{ float: "right", marginRight: "7px", fontWeight: "bold" }}>بیوگرافی : {profile.bio} </p>
                  </div>

               </div>

               <div className="profile_content_left" style={{ width: "430px" }}>
                  <div
                     style={{ direction: "rtl", paddingRight: "20px" }}
                  >
                     <CakeIcon style={{ float: "right" }} />
                     <p style={{ float: "right", marginRight: "7px", fontWeight: "bold" }}> تاریخ تولد : {year + "/" + month + "/" + day}</p>
                  </div>

                  <br />
                  <br />

                  <div
                     style={{ direction: "rtl", paddingRight: "20px", }}
                  >
                     <AccountCircleIcon style={{ float: "right" }} />
                     <p style={{ float: "right", marginRight: "7px", fontWeight: "bold" }}>نام کاربری :  {user.username} </p>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )

}

export default Dashboard;