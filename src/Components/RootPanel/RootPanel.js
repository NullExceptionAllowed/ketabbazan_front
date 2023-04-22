import React from 'react';
import SideBar from "./SideBar/SideBar";
import Nav from "../Navbar/Nav";
import Nav2 from "../Navbar/Nav2";
import Homepage from "../Homepage/Homepage";
import './RootPanel.css'

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
function RootPanel(props) {
    return (
        <>
            <ChangeNav></ChangeNav>
            <SideBar />
            <Homepage />


        </>
    );
}

export default RootPanel;