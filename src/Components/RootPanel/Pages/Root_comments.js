import React, {useEffect, useState} from 'react';
import '../../AdminPanel/Pages/commentsPage.css';
import SideBar from "../SideBar/SideBar";
import Nav from "../../Navbar/Nav";
import Nav2 from "../../Navbar/Nav2";
import AboutUs from "../../AboutUs/AboutUs";
import axios from "axios";
import {baseUrl} from "../../../Variable";
import Validatec from "../../AdminPanel/Pages/Validatec";
import List from "@mui/material/List";
import {Paper, useMediaQuery, useTheme , Grid} from '@mui/material';





const ChangeNav = () => {

    let temp = null;
    let flag = localStorage.getItem('token');
    if (flag === null) {
        temp = (
            <Nav/>
        );
    }
    else{
        console.log(flag)
        temp = (
            <Nav2/>
        );
    }

    return (
        <div>
            {temp}
        </div>
    );
}
function Root_Comments(props) {
    const [cmnts, setcmnts] = useState([]);

    let token = "Token " + localStorage.getItem('token');

    const [show,setshow] = useState();

    useEffect(() => {
        axios.get(`${baseUrl}/admin-panel/comment`, {
            headers: {
                'Content-Type': 'application/json ',
                "Authorization": token
            }
        }).then((response) => {
            //setcmnts(response.data);
            console.log("-------------------------comments :",response.data);
            setcmnts(response.data);

            {/*
                setshow(<>
                        {
                            response.data.map(
                                (cm) => {
                                    //console.log("-------------------inside setshow comment : ",typeof(cm) );
                                    //return <p>{cm.comment_text}</p>
                                    return <Validatec.js comment={cm}/>
                                    //console.log(cmnt.comment_text)
                                }
                            )
                        }
                    </>
                );*/
            }
        });
    }, []);
    useEffect(()=>{
        console.log("------------------test of cmnts :",cmnts);
    },[cmnts])

    const Testsh = ()=>{

        return show;
    }
    return (
        <>
            <ChangeNav></ChangeNav>
            <SideBar />
            <div className="Admin_comments_page">
                <div style={{ padding: "40px 20px",flexGrow: 1 }}>
                    <Grid container  xs={12}  spacing={3}>
                        {

                            cmnts?.length != 0 && cmnts.map(
                                cm =>
                                    //console.log("-------------------inside setshow comment : ",typeof(cm) );
                                    //(<p>{cm.comment_text}</p>)
                                    ( <Validatec comment={cm}/>)
                                //console.log(cmnt.comment_text)
                                //return <p>{cm.comment_text}</p>

                            )


                        }
                    </Grid>
                </div>
                {/*
                <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <Avatar alt="Remy Sharp" src={`${baseUrl}/profile/getimage/?username=${comment.user.username}`} />
                </Grid>
                <ListItemButton
                    onClick={changeStatus()}
                >
                    <FaCommentMedical style={{color: "#0D9ECF"}}/>
                </ListItemButton>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>{comment.user.username}</h4>
                    <p style={{ textAlign: "left" }}>
                        {comment.comment_text}
                    </p>
                    <p style={{ textAlign: "left", color: "gray" }}>
                        {comment.created_on}
                    </p>
                </Grid>
            </Grid>

            <Divider variant="inset" component="li" />
                */}
            </div>
        </>

    );
}

export default Root_Comments;