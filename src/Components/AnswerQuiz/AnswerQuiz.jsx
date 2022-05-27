import React, { useState, useEffect } from "react";
import {TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Variable";


const AnswerQuiz = () => {

    const [quizNum, setquizNum] = useState("");
    const [quizInfo1, setquizInfo1] = useState("");
    const [quizInfo2, setquizInfo2] = useState("");
    const [quizInfo3, setquizInfo3] = useState("");
    const [quizInfo4, setquizInfo4] = useState("");
    const [quizInfo5, setquizInfo5] = useState("");

    let token = "Token " + localStorage.getItem('token');

    useEffect(() => { intialize() }, []);
    const intialize = () => {
        //setquizInfo("");
        axios.get(`${baseUrl}/quiz/generate/41`, {
          headers: {
            'Content-Type': 'application/json ',
            'Authorization': token
          }
        }).then((res) => {
          //console.log(res.data)

          setquizNum(res.data[0])
          setquizInfo1(res.data[1]);
          setquizInfo1(res.data[2]);
          setquizInfo1(res.data[3]);
          setquizInfo1(res.data[4]);
          setquizInfo1(res.data[5]);
        })
    }


    return ( 
        <div>

            <Typography>
                {quizNum.id}
            </Typography>

        </div>
     );
}
 
export default AnswerQuiz;