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
            console.log("-------------------------comments :",response.data);
            setshow(<>
                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>

                    {
                        response.data.map(
                            (cmnt) => {
                                return <ValidateComment  comment={cmnt} />
                                //console.log(cmnt.comment_text)
                            })
                    }
                </List>
            </>);
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

                {
                    test()
                }

            </div>
        </>

    );
}

export default Comments;