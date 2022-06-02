import React, { useState, useEffect } from "react";
import {TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ChangeNav from "./../Navbar/changeNav";
import { baseUrl } from "../../Variable";
import { ListItemButton } from '@mui/material/ListItemButton';
import { Timer, Time, TimerOptions } from 'timer-node';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const With1Question = () => {

    const [quizNum, setquizNum] = useState("");

    const [quizInfo1_q, setquizInfo1_q] = useState("");
    const [quizInfo1_1, setquizInfo1_1] = useState("");
    const [quizInfo1_2, setquizInfo1_2] = useState("");
    const [quizInfo1_3, setquizInfo1_3] = useState("");
    const [quizInfo1_4, setquizInfo1_4] = useState("");

    const [answer1, setanswer1] = useState("");

    const [flag , setflag] =  useState(false);


    const [value, setValue] = React.useState();
    const handleChange = (event) => {
      setValue(event.currentTarget.value);
    };

    let token = "Token " + localStorage.getItem('token');

    useEffect(() => { intialize() }, []);
    const intialize = () => {
        axios.get(`${baseUrl}/quiz/generate/44`, {
          headers: {
            'Content-Type': 'application/json ',
            'Authorization': token
          }
        }).then((res) => {
          //console.log(res.data)

          setquizNum(res.data[0].id)

          setquizInfo1_q(res.data[1].question);
          setquizInfo1_1(res.data[1].op1);
          setquizInfo1_2(res.data[1].op2);
          setquizInfo1_3(res.data[1].op3);
          setquizInfo1_4(res.data[1].op4);
          
        })
    }

    const handleSubmit= () => {

      axios.get(`${baseUrl}/quiz/submit/${quizNum}`, {
        headers: {
          'Content-Type': 'application/json ',
          'Authorization': token
        }
      }).then((res) => {
        console.log(res.data)

        setanswer1(res.data.ans1)
        
      })

      setflag(true)

    }

    let show = null;
    if (flag === false) {
      show = null;
    } else if(flag === true) {
      show = (
        <div>
          <Typography>
            جواب درست گزینه {answer1} است
          </Typography>
        </div>
      )
    }


    return ( 
        <Paper style={{height:"500px"}} elevation={0} >

                <Grid>
                  <Divider>
                      <Chip style={{backgroundColor:"#a8c3f0", color:"black"}} label="سوال 1" />
                  </Divider>

                  <Grid style={{margin:"10px 15px auto auto"}}>
                    <Typography style={{fontSize: 20}}>
                      {quizInfo1_q}
                    </Typography>
                  </Grid>

                  <Grid>
                    <FormControl>
                      <RadioGroup
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel value="a" control={<Radio />} label={quizInfo1_1} />
                          <FormControlLabel value="b" control={<Radio />} label={quizInfo1_2} />
                          <FormControlLabel value="c" control={<Radio />} label={quizInfo1_3} />
                          <FormControlLabel value="d" control={<Radio />} label={quizInfo1_4} />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                </Grid>

                <Grid dir="ltr">

                  <Button dir="ltr" variant="contained" onClick={handleSubmit} style={{margin:"80px auto auto 30px"}}>
                     دیدن نتیجه
                  </Button>

                </Grid>

                {show}

        </Paper>
     );
}
 
export default With1Question;

