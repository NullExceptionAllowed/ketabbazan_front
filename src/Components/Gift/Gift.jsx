import React, { useEffect, useState, useContext } from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";


import Avatar from '@mui/material/Avatar';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import axios from "axios";
import { baseUrl } from "../../Variable";





import url from './giftforyou.jpeg';
import SearchIcon from "@mui/icons-material/Search";
import Grid from '@mui/material/Grid';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import {
    Link,
    NavLink,
    Redirect,
    Route,
    useHistory,
    useLocation,
    useParams,
  } from "react-router-dom";
  


  import Divider from '@mui/material/Divider';

  import MenuIcon from '@mui/icons-material/Menu';

  import DirectionsIcon from '@mui/icons-material/Directions';
  
 function CustomizedInputBase() {
    return (
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 ,backgroundColor:"lightgray" }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, color:"black" }}
          placeholder="جست و جوی کاربر "
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="lightgray" sx={{ p: '10px' }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Paper>
    );
  }







function SimpleDialogGift(props) {
    const { onClose, selectedValue, open, idofbook } = props;
    const params = useParams();
    const id = params.id;
    const handleClose = () => {
      onClose(selectedValue);
    };
    const  [bookinfo, setbookinfo] = useState({});
    const handleListItemClick = (value) => {
      onClose(value);
    };
    const [search, setsearchname] = useState("");
  const Setsearch = (event) => {
    setsearchname(event.target.value);
  };

    useEffect(() => {
       
        axios.get(`${baseUrl}/read_book/info/${id}`).then((response) => {
          setbookinfo(response.data.book_info);
         
        });
      }, );


    // const loaddata = () => {

    //     axios.get(`${baseUrl}/read_book/info/${id}`).then((response) => {
    //         setbookinfo(response.data.book_info);
    //         console.log(response.data.book_info);
    //         //setApiLoading(false);
    //       });
    // };
   

    // useEffect(() => {

    //     axios.get(`${baseUrl}/profile/info/`, {
    //         headers: {
    //             'Content-Type': 'application/json ',
    //             'Authorization': token
    //         }
    //     }).then((res) => {

    //         setnickName(res.data.nickname);
    //         setfullName(res.data.profile.fullname);
    //         setBio(res.data.profile.bio);
    //         setuserrEmail(res.data.email);
    //         setusername(res.data.username);
    //         console.log(res.data.username);
    //        setimage( `${baseUrl}/profile/getimage/?username=${res.data.username}`);
           
    //     });
       
    // }, []);
    // let token = "Token " + localStorage.getItem('token');


    //   const isnull = bio.isnull;
     
    
      let typo2 = {
        margin: "auto 10px auto auto",
        fontSize: "30px",
        color: "#000000",
      };
      let typo3 = {
        margin: "auto 10px auto auto",
        fontSize: 14,
      };
      let typo4 = {
        margin: "15px 10px auto auto",
        fontSize: 14,
      };
      let typo5 = {
        margin: "15px 10px auto auto",
        fontSize: 20,
      };
      let typo6 = {
        margin: "40px 10px auto auto",
        fontSize:14,
      };
      let typo8 = {
        margin: "40px auto auto auto",
        fontSize: 14,
      };
      let typo9 = {
        fontSize: 14,
        color: "#0052cc",
      };
    

     
    return (
      
      <Dialog   onClose={handleClose} open={open}>
    
           <center  style={{padding:"10px 40px 10px 40px"}}>
          
                   
           <img
                alt="complex"
                src={url}
               style={{width:"150px" , height:"150px"}}
              />

          
          
                  <br/>
                  <br/>
                 <CustomizedInputBase/>

                 <br/>

                 <TextareaAutosize 
                        style={{ fontFamily: "Byekan ", fontSize: "15px", resize: "vertical", width: "100%   ", height: "100px",
                         padding: "10px 10px", marginTop: "5px" }}
                            aria-label="minimum height"
                          
                            placeholder="پیامی برای دوستت بنویس"

                        />
                    
         

         
           
        
           
            
           </center>
             

       

           
      </Dialog>
    );
   
  }


  export default SimpleDialogGift;