import React, { useEffect, useState, useContext } from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import SimpleContext from "./simpleContext.jsx";

import Avatar from '@mui/material/Avatar';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import axios from "axios";
import { baseUrl } from "../../Variable";

import showToast from "../../Service/toastservice";



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

//   import DirectionsIcon from '@mui/icons-material/Directions';
// import { event } from "jquery";
// import { PassThrough } from "stream";
 


 




function SimpleDialogGift(props) {

//---------------------------------------------------------------------------
const [receiver, setreceiver] = useState("test");
const CustomizedInputBase = () => {
  const params = useParams();
  
  const [search, setsearchname] = useState("");
  //   const Setsearch = (event) => {
  //   setsearchname(event.target.value);
  // };
    const [click , setClick] = useState(false);
    const [users, setusers] = useState([])
    let token = "Token " + localStorage.getItem('token');
    const [flag, setFlag] = useState(false);
  const searchHandler = (event) =>
  {
     if(event.target.value !== null){
      setsearchname(event.target.value);
      setFlag(!flag);
     }
     else{
         setshow();
     }
     
     

  }


  useEffect(() => {
   const getData = async () => {
     await axios.get(`${baseUrl}/accounts/searchuser/?username=${search}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      }}).then((response) => {
        setusers(response.data);
     
      
      setshow(<center> <Paper style={{paddingTop:"5px", paddingBottom:"5px"}}>
      {
         
            
        response.data.map(user => (
               <div onClick={event => HandleClick(event, user.username, user.id)}>         
                        <Avatar   style={{ marginTop: "15px" }} alt="Remy Sharp" src={`${baseUrl}/profile/getimage/?username=${user.username}`} />       
                        <p >  {user.username}    </p> 
                             
                                 
                                   
               </div>        
                     
       ))
      }
      
      
      </Paper>
      </center>);
       })
   }

    getData();
      
      
 
     
  }, [flag]);



const [show , setshow] = useState();
const idofbook = params.id;
 const HandleClick = (event, username, id)  =>
  {
       setClick(true);
       setreceiver(id);
      setshow(
         <div>
                           <Avatar sx={{ width: 150, height: 150 }} style={{ marginTop: "15px" }} alt="Remy Sharp" src={`${baseUrl}/profile/getimage/?username=${username}`} />       
                            <p>  {username}    </p> 
         </div>
       );

      //  setClick(true);

      // const sendgift = {
      //   receiver : id ,
      //   book : idofbook ,
      // };
      // axios.post(`${baseUrl}/gift/sendbook/`,JSON.stringify(sendgift
      //   ), {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: token,
      //   },
        
      // });



  };



  


  
 



 
   
 


 const lastshow = () =>
 {
    return show ;
 };
 

    return (



      <center>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 ,backgroundColor:"lightgray" }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase onChange={searchHandler}
          sx={{ ml: 1, flex: 1, color:"black" }}
          placeholder="جست و جوی کاربر "
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
      

    
      </Paper>
       
      
      
  
    {lastshow()}
   




       </center>
      
    );
  }




  //----------------------------------------------------------------------


    const { onClose, selectedValue, open, idofbook } = props;
    const params = useParams();
    const id = params.id;
    const context = useContext(SimpleContext);
    const handleClose = () => {
      onClose(selectedValue);
    };
    const  [bookinfo, setbookinfo] = useState({});
    const handleListItemClick = (value) => {
      onClose(value);
    };
   
    // useEffect(() => {
       
    //     axios.get(`${baseUrl}/read_book/info/${id}`).then((response) => {
    //       setbookinfo(response.data.book_info);
         
    //     });
    //   }, );


    
    let token = "Token " + localStorage.getItem('token');

     

     
    
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
    

      const [hasbook, sethasbook] = useState(false);
      const [message, setmessage] = useState("");

      const textHandler = (event) =>
      {
        setmessage(event.target.value);

      }


      const giftHandler =async () =>
      
      {

        await axios.get(`${baseUrl}/read_book/hasbook/?book_id=${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          
        });

 //---------------------------
 const response =  await axios.get(`${baseUrl}/read_book/hasbook/?book_id=${id}`, {
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
  
});
//  await sethasbook(response.data.hasbook);

 
//----------------------------
         
        if(response.data.hasbook === false){
           showToast("error", "ابتدا باید کتاب را بخری");
        }
         else {

         
        // showToast("error", "ابتدا باید کتاب را بخری");
        const sendgift = {
          receiver : receiver ,
          book : id ,
          message : message,
        };
        try {
       const  response= await axios.post(`${baseUrl}/gift/sendbook/`,JSON.stringify(sendgift
          ), {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          
        });
     
          if(response.status === 200){
             showToast("success", "هدیه با موفقیت ارسال شد");
        }
      }catch (ex) {
        if(ex.response.status === 400){

          showToast("error", "دوستت این کتاب رو داره یا قبلا خودش این کتاب رو بهت هدیه داده");
        }


      }
      }
      }
     
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
                 {CustomizedInputBase()}

                 <br/>

                 <TextareaAutosize  onChange={textHandler}
                        style={{ fontFamily: "Byekan ", fontSize: "15px", resize: "vertical", width: "100%   ", height: "100px",
                         padding: "10px 10px", marginTop: "5px" }}
                            aria-label="minimum height"
                          
                            placeholder="پیامی برای دوستت بنویس"

                        />
                    
         

                    <Button onClick={giftHandler}
            style={{
              marginTop: "10px",
              marginBottom:"20px",
              fontFamily: "BYekan",
              fontSize: "15px",
            }}
            size="small"
            fullWidth
            variant="contained"
            type="submit"
          >
            هدیه کتاب
          </Button>
           
        
           
            
           </center>
             

       

           
      </Dialog>
   
    );
   
  }


  export default SimpleDialogGift;