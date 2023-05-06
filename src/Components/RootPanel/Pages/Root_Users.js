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
const Root_Users =(props)=> {
    const [users, setusers] = useState(["کاربری وجود ندارد"]);
    let token = "Token " + localStorage.getItem('token');


    const [show,setshow] = useState();
    useEffect(() => {
        axios.get(`${baseUrl}/admin-panel/user`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },

        }).then((response) => {
            setusers(response.data);
            setshow(<div>
                <h6 style={{color:"blue"}}>پنل مدیریتی کاربران</h6>
                {
                    response.data.map(
                        (usr) => {
                            return <AddandDelUser  user={usr} />
                            console.log(usr.nickname)
                        }
                    )
                }
            </div>)
            console.log(response.data);
        });

    }, []);
    const Test = ()=>{
        return show;
    }
    return (
       <div>
            <ChangeNav></ChangeNav>
            <SideBar />
            <center>
            <div className="Admin_Users_page">
            {Test()}




            </div>
            </center>
            </div>

    );
}

export default Root_Users;