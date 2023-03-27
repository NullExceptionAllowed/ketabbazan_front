import React from 'react';
import './commentsPage.css';
import SideBar from "../SideBar/SideBar";
import Nav from "../../Navbar/Nav";
import Nav2 from "../../Navbar/Nav2";


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
    return (
        <>
            <ChangeNav></ChangeNav>
            <SideBar />
            <div className="Admin_comments_page">



                <p>cmnt</p>
            </div>
        </>

    );
}

export default Comments;