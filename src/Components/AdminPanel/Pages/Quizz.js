import React, {useEffect, useState} from 'react';
import './QuizzPage.css'
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
function Quizz(props) {



    const [quz, setquz] = useState(["کامنتی وجود ندارد"])

    let token = "Token " + localStorage.getItem('token');

    const [show,setshow] = useState();
    useEffect(() => {
        axios.get(`${baseUrl}/admin-panel/quiz`, {
            headers: {
                'Content-Type': 'application/json ',
                "Authorization": token
            }
        }).then((response) => {
            setquz(response.data);
            console.log("-------------------------quiz :",response.data)
            setshow(<>
                {
                    response.data.map(
                        (quz) => {
                            //return <ValidateComment  quiz={quz} />
                        }
                    )
                }
            </>)
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
            <div className="Admin_Quizz_page">

                {
                    test()
                }
            </div>
        </>

    );
}

export default Quizz;