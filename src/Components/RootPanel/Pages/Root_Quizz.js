import React, {useEffect, useState} from 'react';
import '../../AdminPanel/Pages/QuizzPage.css'
import SideBar from "../SideBar/SideBar";
import Nav from "../../Navbar/Nav";
import Nav2 from "../../Navbar/Nav2";
import axios from "axios";
import {baseUrl} from "../../../Variable";
import QuizSummery from "../../AdminPanel/Pages/QuizSummery";

import {Paper, useMediaQuery, useTheme} from '@mui/material';
import {Grid} from '@mui/material';
import VarifyQuiz from "../../AdminPanel/Pages/VarifyQuiz";


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
const Root_Quizz=({props})=> {

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
            /*setshow(<>
                {
                    response.data.map(
                        (quz) => {
                            //return <QuizSummery quiz={quz} />
                        }
                    )
                }
            </>)*/
            //console.log(response.data);
        });
    }, [])
    const theme = useTheme();
    const isMatch600 = useMediaQuery(theme.breakpoints.down(650));

    const test = ()=>{
        return show;
    }
    return (
        <>
            <ChangeNav></ChangeNav>
            <SideBar />
            <div className="Admin_Quizz_page">
                <div className="Admin_Quizz_page_inside">
                    {!isMatch600 && (
                        <>
                            <Grid container  xs={12}  spacing={3}>
                                {

                                    quzes?.length != 0 && quzes.map(
                                        quz =>
                                            //console.log("-------------------inside setshow comment : ",typeof(cm) );
                                            //(<p>{cm.comment_text}</p>)
                                            ( <QuizSummery quiz={quz}/>)
                                        //console.log(cmnt.comment_text)
                                        //return <p>{cm.comment_text}</p>
                                    )
                                }
                            </Grid>
                        </>
                    )}

                    {isMatch600 && (
                        <>
                            <Grid container  xs={12}  spacing={3}>
                                {

                                    quzes?.length != 0 && quzes.map(
                                        quz =>
                                            //console.log("-------------------inside setshow comment : ",typeof(cm) );
                                            //(<p>{cm.comment_text}</p>)
                                            ( <QuizSummery quiz={quz}/>)
                                        //console.log(cmnt.comment_text)
                                        //return <p>{cm.comment_text}</p>
                                    )
                                }
                            </Grid>

                        </>
                    )}

                </div>
            </div>
        </>

    );
}

export default Root_Quizz;