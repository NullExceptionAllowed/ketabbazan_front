import { Button, Dialog, IconButton, ToggleButton } from "@mui/material"
import ArticleCard from "../../Comment/tabContent/articleCard"
import { Divider, Grid } from "@mui/material"
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import {useEffect, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import CheckIcon from '@mui/icons-material/Check';
import { baseUrl } from "../../../Variable";
import Avatar from '@mui/material/Avatar';


const AddandDelUser = ({ user}) => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down(550));


    const [status, setstatus]=useState(false) ;
    const { email, id, is_admin, is_super_admin, nickname, username} = user ;
    const changeStatus =()=>{
        setstatus(!status)
        axios.post(`${baseUrl}/admin-panel/user/change-role/:${id}`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                }
            }
        ).then(res => console.log(res)).catch(e => console.log(e))
    }

    let token = "Token " + localStorage.getItem('token');





        return (
            <>
                <div>
                    <center >
                        <Avatar  sx={{ width: 140, height: 140 }}  style={{   marginTop:"25px"}} alt="Remy Sharp" src={`${baseUrl}/profile/getimage/?username=${username}`} />
                        <p  style={{  marginTop:"15px" , fontSize:"20px"  }}>{nickname}</p>
                        <ToggleButton
                            value="check"
                            onChange={() => {
                                changeStatus()
                            }}
                        >
                            <CheckIcon/>
                        </ToggleButton>
                    </center>
                    {/*<Grid
                        style={{
                            marginTop: "3px",
                            display: "flex",
                            textDecoration: "none",
                        }}
                        key={id}
                    >
                        <p>{nickname}</p>
                        <p>{email}</p>

                        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>

                            <ToggleButton
                                value="check"
                                onChange={() => {
                                    changeStatus()
                                }}
                            >
                                <CheckIcon/>
                            </ToggleButton>
                        </div>
                    </Grid>*/}
                </div>
            </>
        );
    }

export default AddandDelUser;