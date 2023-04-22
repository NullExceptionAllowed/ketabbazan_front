import React, {useEffect, useState} from 'react';
import './UsersPage.css'
import SideBar from "../SideBar/SideBar";
import Nav from "../../Navbar/Nav";
import Nav2 from "../../Navbar/Nav2";
import axios from "axios";
import {baseUrl} from "../../../Variable";

import AddandDelUser from "./AddandDelUser";

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
    let token = "Token " + localStorage.getItem('token');
    useEffect(() => {
        axios.get({
            url: `${baseUrl}/admin-panel/user`,
            config: {
                headers: {
                    'Content-Type': 'application/json ',
                    "Authorization": token
                }
            }
        }).then((response) => {
            setusers(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <>
            <ChangeNav></ChangeNav>
            <SideBar />
            <div className="Admin_Users_page">
                {
                    users.map(
                        (usr) => {
                            return <AddandDelUser  article={usr} />
                        }
                    )
                }

            </div>
        </>

    );
}

export default Root_Users;