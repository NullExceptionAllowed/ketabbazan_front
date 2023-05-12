import React, {useEffect, useState} from 'react';
import axios from "axios";
import {baseUrl} from "../../../Variable";
import './QuizzPage.css'

const VarifyQuiz = (props)=>{
    const {  onsubmit , quiz } = props;
    let token = "Token " + localStorage.getItem('token');
    const [status, setstatus]=useState(false) ;
    useEffect(()=>{
        console.log(quiz.id)
        axios.post(`${baseUrl}/admin-panel/quiz/verify/:${quiz.id}`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                }
            }
        ).then(res => console.log(res)).catch(e => console.log(e));
    },[status]);

    const handelsubmit = ()=>{
        setstatus(!status)
        onsubmit();
    }
    return(
        <>
            <div className="Admin_Quizz_page_inside_dialog">
                {quiz.question.map(
                    qstn =>
                        (<p>{qstn.question}</p>)
                )}
            </div>
            <button onClick={handelsubmit}>تایید</button>
        </>
    );


}

export default VarifyQuiz;