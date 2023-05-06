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
import List from "@mui/material/List";

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






    return(


        <div>


            <ListItem alignItems="flex-start" >
                <ListItemAvatar>
                    <Avatar alt={comment.user.username} src={`${baseUrl}/profile/getimage/?username=${comment.user.username}`}/>
                </ListItemAvatar>
                <ListItemText
                    primary={comment.user.username}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {comment.comment_text}
                            </Typography>

                        </React.Fragment>
                    }
                />
                <Button
                    onClick={/*changeStatus()*/()=>{setstatus(!status)}}
                >
                    <FaCommentMedical style={{color: "#0D9ECF"}}/>
                </Button>

            </ListItem>
                <Divider variant="inset" component="li" />


        </div>
    );
}

export default Validatec;