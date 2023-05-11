import React, {useEffect, useState} from 'react';
import './QuizzPage.css'
import SideBar from "../SideBar/SideBar";
import Nav from "../../Navbar/Nav";
import Nav2 from "../../Navbar/Nav2";
import axios from "axios";
import {baseUrl} from "../../../Variable";
import QuizSummery from "./QuizSummery";
import VarifyQuiz from "./VarifyQuiz";



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



    const [quzes, setquz] = useState(["کوییزی وجود ندارد"])

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
                            return <QuizSummery  quiz={quz} />
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

                {/*

                    quzes?.length != 0 && quzes.map(
                        quz =>
                            //console.log("-------------------inside setshow comment : ",typeof(cm) );
                            //(<p>{cm.comment_text}</p>)
                            ( <VarifyQuiz quiz={quz}/>)
                        //console.log(cmnt.comment_text)
                        //return <p>{cm.comment_text}</p>

                    )*/


                }
            </div>
        </>

    );
}

export default Quizz;