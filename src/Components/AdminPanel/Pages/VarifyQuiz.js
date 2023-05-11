import React, {useEffect, useState} from 'react';
import axios from "axios";
import {baseUrl} from "../../../Variable";


const VarifyQuiz = ({quiz})=>{
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
    const changeStatus =()=> {
        setstatus(!status)
    }


}

export default VarifyQuiz;