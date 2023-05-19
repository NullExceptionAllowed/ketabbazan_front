import React, {useEffect, useState} from 'react';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material';
import {setCommentState} from '../../../Service/ApiCalls';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {baseUrl} from "../../../Variable";
import ListItemButton from '@mui/material/ListItemButton';
import {FaCommentMedical, FaLeanpub} from 'react-icons/fa';
import axios from "axios";
import {Grid} from '@mui/material';
import List from "@mui/material/List";
import {Paper, useMediaQuery, useTheme} from '@mui/material';
import './commentsPage.css'

const Validatec = ({comment}) => {

    //const {id, user, book, comment_text, created_on, is_verified} = comment ;
    let token = "Token " + localStorage.getItem('token');
    //console.log(user.username.toString(),"  :  ",comment_text.toString())
    const [status, setstatus]=useState(false) ;
    useEffect(()=>{
        console.log(comment.id)
        axios.post(`${baseUrl}/admin-panel/comment/verify/${comment.id}`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                }
            }
        ).then(res => console.log(res)).catch(e => console.log(e));
    },[status]);
    const changeStatus =()=> {
        setstatus(!status)
    }
    const theme = useTheme();
    const isMatch600 = useMediaQuery(theme.breakpoints.down(650));
    const Return_with_paper = ()=>{



    }






    return(


        <div className="one_comment_varify">
            {!isMatch600 &&(
                <>

                    <Grid  item xs={12} wrap="nowrap" spacing={2} className="Admin_comment_page_inside_box">
                        <Grid item>
                            <Avatar alt="user" src={`${baseUrl}/profile/getimage/?username=${comment.user.username}`} />
                        </Grid>

                        <Grid justifyContent="right" item xs zeroMinWidth>
                            <h6 style={{ margin: 0 }}>{comment.user.username}</h6>
                            <p style={{ fontSize:"20px" }}>
                                {comment.comment_text}
                            </p>
                            {/*<p style={{textAlign: "left", color: "gray"}}>
                                {comment.created_on.getMonth()}
                            </p>*/}

                            <Button className="comment_submit_btn" variant="contained"
                                    onClick={() => {setstatus(!status)}}
                                    style={{
                                        backgroundColor: "CAE5F3",
                                        margin: "10px",
                                        fontWeight: 800,
                                    }}>تایید</Button>
                        </Grid>

                    </Grid>
                </>
            )}
            {isMatch600 &&(
                <>
                    <>
                        <Grid item xs={12} wrap="nowrap" spacing={2} className="Admin_comment_page_inside_box">
                            <Grid item>
                                <Avatar alt="user" src={`${baseUrl}/profile/getimage/?username=${comment.user.username}`} />
                            </Grid>

                            <Grid justifyContent="right" item xs zeroMinWidth>
                                <h6 style={{  margin: 0 }}>{comment.user.username}</h6>
                                <p style={{fontSize:"14px" }}>
                                    {comment.comment_text}
                                </p>
                                {/*<p style={{textAlign: "left", color: "gray"}}>
                                    {comment.created_on.getMonth()}
                                </p>*/}
                                <Button className="comment_submit_btn" variant="contained"
                                        onClick={() => {setstatus(!status)}}
                                        style={{
                                            backgroundColor: "CAE5F3",
                                            margin: "10px",
                                            fontWeight: 800,
                                        }}>تایید</Button>
                            </Grid>

                        </Grid>
                    </>

                </>
            )}




        </div>
    );
}

export default Validatec;