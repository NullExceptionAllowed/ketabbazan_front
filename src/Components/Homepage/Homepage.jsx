import React from 'react';
import Navbar from '../Navbar/Nav';
import Navbar2 from '../Navbar/Nav2';
import Header from '../Header/Header';
import Showbook from "../Shownewbook/showbook";
import Workinfo from '../WorkInfo/workinfo';


const Homepage = () => {


    let temp = null;
    let flag = localStorage.getItem('token');
    if (flag === null) {
        temp = (
            <Navbar/>
        );
    }
    else{
        console.log(flag)
        temp = (
            <Navbar2/>
        );
    }

    
    return ( 
        <div>
            {temp}
            <Header/>
            <Workinfo/>
            <Showbook/>
        </div>
     );
}
 
export default Homepage;