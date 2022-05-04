import React, { useState, useEffect, useContext } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import SimpleContext from "./SimpleContext";
import Comment from "./Comment.jsx";
import Box from '@mui/material/Box';


const Comments = () => {
    const context = useContext(SimpleContext);

 const nullShow = () =>
 {
     let show=null;
     return show;
 }


    let showHeader = () =>
    {
        let show = null;
        if(context.comments.length > 0)
        {
            show = (<h3 style={{ position: "relative", marginRight: "450px" }}>دیدگاه کاربران</h3>);
        }
        else{
            show =null;
        }
        return show;
    }
    return (
        <div>

          {showHeader()}







            <Grid item xs={4.8} style={{ height: " auto", marginTop: "15px", marginRight: "450px", backgroundColor: "#f0f5f5", paddingLeft: "20px", paddingTop: "1px" }}>


                {context.comments.length > 0 ? (
                    context.comments.map(comment => (



                        // <Grid  item xs={8} >
                        <Comment
                            comment_text={comment.comment_text}
                            user={comment.user}


                        />

                        // </Grid>




                    ))

                ) : (
                    nullShow()
                )}

            </Grid>

        </div>
    );
}

export default Comments;