import React from 'react';
import Navbar from '../Navbar/Nav';
import Header from '../Header/Header';
import Showbook from "../Showbook/showbook";
import Workinfo from '../WorkInfo/workinfo';

const Homepage = () => {
    return ( 
        <div>
            <Navbar/>
            <Header/>
            <Workinfo/>
            <Showbook/>
        </div>
     );
}
 
export default Homepage;
