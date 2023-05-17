import React, {useEffect, useState} from 'react';
import axios from "axios";
import {baseUrl} from "../../../Variable";
import Button from '@mui/material/Button';
import './QuizzPage.css'

const VarifyQuiz = (props)=>{
    const {  onsubmit , quiz } = props;
    let token = "Token " + localStorage.getItem('token');
    const [status, setstatus]=useState(false) ;
    useEffect(()=>{
        if (!status){
            console.log(quiz.id)
            axios.post(`${baseUrl}/admin-panel/quiz/verify/${quiz.id}`,{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    }
                }
            ).then(res => console.log(res)).catch(e => console.log(e));
        }
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
                        (
                            <>
                                <p>{qstn.question}</p>
                                <ul className = "Admin_Quizz_page_inside_dialog_listitems">
                                    <li>{qstn.op1}</li>
                                    <li>{qstn.op2}</li>
                                    <li>{qstn.op3}</li>
                                    <li>{qstn.op4}</li>
                                </ul>
                            </>
                            )
                )}
            </div>
            {/*<button className="quiz_dialog_submit_btn" onClick={handelsubmit}>تایید</button>*/}
            <Button className="quiz_dialog_submit_btn" variant="contained" onClick={handelsubmit}
                    style={{
                        backgroundColor: "CAE5F3",
                        margin: "10px",
                        fontWeight: 800,
                    }}>تایید</Button>

        </>
    );


}

export default VarifyQuiz;