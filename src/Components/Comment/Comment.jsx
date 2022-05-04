import React, { useState } from "react";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./AddNewComment";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const Comment = ({comment_text, user}) => {
   
    return (

        <div>
            <Grid   style={{ width:"500px" , direction:'rtl' , marginRight:"20px"  , 
             borderBottom:"1px solid lightgray" , paddingBottom:"30px"   }}>
                {/* <Grid  item xs={20} style={{ borderBottom:"1px solid lightgray" , paddingBottom:"30px", backgroundColor:"blue" }}> */}
                    
                        {/* <AccountCircleIcon fontSize="large" /> */}
                        <Avatar style={{marginTop:"15px"}} alt="Remy Sharp" src="./imgInComment/bill.jpg" />
                         <a  style={{position:"relative" , top:"-30px" , right:"45px" , fontWeight:"bold" , fontSize:"17px"}}>{user}</a>
                          
                        <br/>
                        <p>{comment_text}</p>
                   
                {/* </Grid> */}


            </Grid>



        </div>




    )


}
export default Comment;