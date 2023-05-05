import React, {useEffect, useState} from 'react';
import '../../AdminPanel/Pages/commentsPage.css';
import SideBar from "../SideBar/SideBar";
import Nav from "../../Navbar/Nav";
import Nav2 from "../../Navbar/Nav2";
import AboutUs from "../../AboutUs/AboutUs";
import axios from "axios";
import {baseUrl} from "../../../Variable";
import ValidateComment from "../../AdminPanel/Pages/ValidateComment";
import List from "@mui/material/List";




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
    const [cmnts, setcmnts] = useState({});

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
            setshow(
                <>
                <List sx={{width: '100%', maxWidth: 500}}>
                        {
                            response.data.map(
                                (cm) => {
                                    //console.log("-------------------inside setshow comment : ",typeof(cm) );
                                    //return <p>{cm.comment_text}</p>
                                    return <ValidateComment  comment={cm} />
                                    //console.log(cmnt.comment_text)
                                }
                                )
                        }
                    </List>
                </>
            );
        });
    }, []);

    const testsh = ()=>{

        return show;
    }
    return (
        <>
            <ChangeNav></ChangeNav>
            <SideBar />
            <div className="Admin_comments_page">
                {
                    testsh()
                }
            </div>
        </>

    );
}

export default Root_Comments;