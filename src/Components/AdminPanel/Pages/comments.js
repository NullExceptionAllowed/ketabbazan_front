import React, {useEffect, useState} from 'react';
import './commentsPage.css';
import SideBar from "../SideBar/SideBar";
import Nav from "../../Navbar/Nav";
import Nav2 from "../../Navbar/Nav2";
import axios from "axios";
import {baseUrl} from "../../../Variable";
import VeriFyArticles from "./VeriFyArticles";
import ValidateComment from "./Validatec";
import List from '@mui/material/List';
import Validatec from "./Validatec";




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
function Comments(props) {
    const [cmnts, setcmnts] = useState(["کامنتی وجود ندارد"]) ;

    let token = "Token " + localStorage.getItem('token');

    const [show,setshow] = useState();
    useEffect(() => {
        axios.get(`${baseUrl}/admin-panel/comment`, {
            headers: {
                'Content-Type': 'application/json ',
                "Authorization": token
            }
        }).then((response) => {
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
            //console.log(response.data);
        });
    }, [])

    const test = ()=>{
        return show;
    }
    return (
        <>
            <ChangeNav></ChangeNav>
            <SideBar />
            <div className="Admin_comments_page">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
                </List>
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

export default Comments;