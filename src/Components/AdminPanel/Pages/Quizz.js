import React from 'react';
import './QuizzPage.css'
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
function Quizz(props) {
    return (
        <>
            <ChangeNav></ChangeNav>
            <SideBar />
            <div className="Admin_Quizz_page">

                <p>qiz</p>
            </div>
        </>

    );
}

export default Quizz;