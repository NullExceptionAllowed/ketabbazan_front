import React, {useEffect, useState} from 'react';
import './UsersPage.css'
import SideBar from "../SideBar/SideBar";
import Nav from "../../Navbar/Nav";
import Nav2 from "../../Navbar/Nav2";
import axios from "axios";
import {baseUrl} from "../../../Variable";


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
function Root_Users(props) {
    const [users, setusers] = useState(["کاربری وجود ندارد"]);

    useEffect(() => {
        axios({
            url: `${baseUrl}/admin-panel/user`,
        }).then((response) => {
            setusers(response.data);
            console.log("-----------users:-------------")
            console.log(response.data);
        });
    }, []);

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

export default Root_Users;