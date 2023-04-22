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


const AddandDelUser = ({ user}) => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down(550));


    const [status, setstatus]=useState(false) ;
    const changeStatus =()=>{
        setstatus(!status)
    }
    const { id, usname} = user
    let token = "Token " + localStorage.getItem('token');
    useEffect(() => {
        axios.post({
            url: `${baseUrl}/admin-panel/user/change-role/:${id}`,
            data: {},
            config: {
                headers: {
                    'Content-Type': 'application/json ',
                    "Authorization": token
                }
            }
        }).then(res => console.log(res)).catch(e => console.log(e))
    }, [status]);




        return (
            <>
                <div>
                    <Grid
                        style={{
                            marginTop: "3px",
                            display: "flex",
                            textDecoration: "none",
                        }}
                        key={id}
                    >
                        <p>{usname}</p>

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
                    </Grid>
                </div>
            </>
        );
    }

export default AddandDelUser;