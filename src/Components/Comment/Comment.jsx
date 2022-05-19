import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./AddNewComment";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { ShowerSharp } from "@mui/icons-material";
import axios from "axios";
import { baseUrl } from "../../Variable";
import SimpleContext from "./SimpleContext";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Comment = ({ comment_text, user, comment_id, replys }) => {
    let token = "Token " + localStorage.getItem('token');
    const [reply, setReply] = useState("");
    const [id, setId] = useState("");
    const [flag, setFlag] = useState("0");
    const [refreshl, setRefresh] = useState("0");
    useEffect(() => {
        Show();
    }, [refreshl]);




    const handleSetReply = (e) => {
        setFlag(1);

        setReply(e.target.value);



    }

    const addNewReply = () => {
        setRefresh(Math.random());
        setFlag(0);
        setReply("");

        const Reply = {
            comment: comment_id,
            reply_text: reply,
        }


        axios.post(
            `${baseUrl}/comment/reply/`,
            JSON.stringify(Reply),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }
        ).then((res) => {
            console.log(res.status);


        })

    }


    const Show = () => {
        let show = null;

        if (flag == 1) {
            show = (<div>
                <Button variant="contained" onClick={addNewReply}
                    style={{ marginTop: "12px", marginLeft: "82%", backgroundColor: "transparent", color: "blue" }}>ریپلای </Button>
            </div>)
        }
        return show;
    }


    //const replyShow = (<div>salam</div>) ;



    //onClick={context.handleCreateNewComment}

    return (
        <SimpleContext.Provider
            value={{

                refresh: refreshl
            }}
        >
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={0.3} ></Grid>
                    <Grid item xs={11.4} style={{ borderBottom: "1px solid lightgray", paddingBottom: "10px" }}>


                        <Avatar style={{ marginTop: "15px" }} alt="Remy Sharp" src="./imgInComment/bill.jpg" />
                        <a style={{ position: "relative", top: "-33px", right: "47px" }}>{user}</a>


                        <p style={{ position: "relative", top: "-10px", right: "5px" }}>{comment_text}</p>

                        <Grid container>
                            <Grid item xs={0.5} ></Grid>
                            <Grid item xs={11} >
                                <TextareaAutosize style={{border:"1px solid white"}} onChange={handleSetReply}
                                    style={{
                                        fontFamily: "Byekan ", fontSize: "15px", resize: "vertical", width: "100%   ", height: "45px"
                                        ,
                                        padding: "10px 10px", marginTop: "5px"
                                    }}
                                    aria-label="minimum height"
                                    value={reply}
                                    placeholder="ریپلای"

                                />
                                {Show()}


                                {/* <Grid style={{direction:"rtl" }} item xs={0} >
                                     </Grid> */}

                                <Grid item xs={12} >

                                    {replys.map(replyexa => (
                                        <div>

                                            

                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        //width: 'fit-content',
                                                        borderRight: (theme) => `3px solid blue` ,
                                                       // borderRadius: 1,
                                                       // bgcolor: 'background.paper',
                                                        color: 'text.secondary',
                                                        '& svg': {
                                                            m: 1.5,
                                                        },
                                                        '& hr': {
                                                            mx: 0.5,
                                                        },
                                                    }}
                                                    style={{marginTop:"7px"}}
                                                >
                                                    <div style={{ marginRight: "5px" }}>

                                                    <Divider orientation="vertical" variant="middle" flexItem />


                                                    <Avatar style={{ marginTop: "15px" }} alt="Remy Sharp" src="./imgInComment/bill.jpg" />
                                                    <a style={{ position: "relative", top: "-33px", right: "47px" }}>{replyexa.user}</a>


                                                    <p style={{ position: "relative", top: "-10px", right: "5px" }}>{replyexa.reply_text}</p>


                                                    </div>
                                        </Box>
                                        
                                               
                                        </div>
                                    ))}
                            </Grid>




                        </Grid>
                        <Grid item xs={0.5} ></Grid>
                    </Grid>


                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
        </SimpleContext.Provider >



    )


}
export default Comment;