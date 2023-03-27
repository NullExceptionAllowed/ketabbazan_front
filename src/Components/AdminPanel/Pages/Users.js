import React from 'react';
import './UsersPage.css'
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
function Users(props) {
    return (
        <>
            <ChangeNav></ChangeNav>
            <SideBar />
            <div className="Admin_Users_page">

                <p>usrs</p>
            </div>
        </>

    );
}

export default Users;