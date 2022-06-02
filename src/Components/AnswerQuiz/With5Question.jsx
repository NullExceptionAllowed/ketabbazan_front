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

const With5Question = () => {

    const [quizNum, setquizNum] = useState("");

    const [quizInfo1_q, setquizInfo1_q] = useState("");
    const [quizInfo1_1, setquizInfo1_1] = useState("");
    const [quizInfo1_2, setquizInfo1_2] = useState("");
    const [quizInfo1_3, setquizInfo1_3] = useState("");
    const [quizInfo1_4, setquizInfo1_4] = useState("");

    const [quizInfo2_q, setquizInfo2_q] = useState("");
    const [quizInfo2_1, setquizInfo2_1] = useState("");
    const [quizInfo2_2, setquizInfo2_2] = useState("");
    const [quizInfo2_3, setquizInfo2_3] = useState("");
    const [quizInfo2_4, setquizInfo2_4] = useState("");

    const [quizInfo3_q, setquizInfo3_q] = useState("");
    const [quizInfo3_1, setquizInfo3_1] = useState("");
    const [quizInfo3_2, setquizInfo3_2] = useState("");
    const [quizInfo3_3, setquizInfo3_3] = useState("");
    const [quizInfo3_4, setquizInfo3_4] = useState("");

    const [quizInfo4_q, setquizInfo4_q] = useState("");
    const [quizInfo4_1, setquizInfo4_1] = useState("");
    const [quizInfo4_2, setquizInfo4_2] = useState("");
    const [quizInfo4_3, setquizInfo4_3] = useState("");
    const [quizInfo4_4, setquizInfo4_4] = useState("");

    const [quizInfo5_q, setquizInfo5_q] = useState("");
    const [quizInfo5_1, setquizInfo5_1] = useState("");
    const [quizInfo5_2, setquizInfo5_2] = useState("");
    const [quizInfo5_3, setquizInfo5_3] = useState("");
    const [quizInfo5_4, setquizInfo5_4] = useState("");

    const [value, setValue] = React.useState();
    const handleChange = (event) => {
      setValue(event.currentTarget.value);
    };

    const [value2, setValue2] = React.useState();
    const handleChange2 = (event) => {
      setValue2(event.currentTarget.value2);
    };

    const [value3, setValue3] = React.useState();
    const handleChange3 = (event) => {
      setValue3(event.target.value3);
    };

    const [value4, setValue4] = React.useState();
    const handleChange4 = (event) => {
      setValue4(event.target.value4);
    };

    const [value5, setValue5] = React.useState();
    const handleChange5 = (event) => {
      setValue5(event.target.value5);
    };

    let token = "Token " + localStorage.getItem('token');

    useEffect(() => { intialize() }, []);
    const intialize = () => {
        axios.get(`${baseUrl}/quiz/generate/41`, {
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

          setquizInfo2_q(res.data[2].question);
          setquizInfo2_1(res.data[2].op1);
          setquizInfo2_2(res.data[2].op2);
          setquizInfo2_3(res.data[2].op3);
          setquizInfo2_4(res.data[2].op4);

          setquizInfo3_q(res.data[3].question);
          setquizInfo3_1(res.data[3].op1);
          setquizInfo3_2(res.data[3].op2);
          setquizInfo3_3(res.data[3].op3);
          setquizInfo3_4(res.data[3].op4);

          setquizInfo4_q(res.data[4].question);
          setquizInfo4_1(res.data[4].op1);
          setquizInfo4_2(res.data[4].op2);
          setquizInfo4_3(res.data[4].op3);
          setquizInfo4_4(res.data[4].op4);

          setquizInfo5_q(res.data[5].question);
          setquizInfo5_1(res.data[5].op1);
          setquizInfo5_2(res.data[5].op2);
          setquizInfo5_3(res.data[5].op3);
          setquizInfo5_4(res.data[5].op4);
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
        <Paper style={{height:"1500px"}} elevation={0} >
            
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
                          // aria-labelledby="demo-row-radio-buttons-group-label"
                          // name="row-radio-buttons-group"
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


                <Grid>
                  <Divider>
                      <Chip style={{backgroundColor:"#a8c3f0", color:"black"}} label="سوال 2" />
                  </Divider>

                  <Grid style={{margin:"10px 15px auto auto"}}>
                    <Typography style={{fontSize: 20}}>
                      {quizInfo2_q}
                    </Typography>
                  </Grid>

                  <Grid>
                    <FormControl>
                      <RadioGroup
                          // aria-labelledby="demo-row-radio-buttons-group-label"
                          // name="2row-radio-buttons-group"
                          value={value2}
                          onChange={handleChange2}
                        >
                          <FormControlLabel value="aa" control={<Radio />} label={quizInfo2_1} />
                          <FormControlLabel value="bb" control={<Radio />} label={quizInfo2_2} />
                          <FormControlLabel value="cc" control={<Radio />} label={quizInfo2_3} />
                          <FormControlLabel value="dd" control={<Radio />} label={quizInfo2_4} />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>



                <Grid>
                  <Divider>
                      <Chip style={{backgroundColor:"#a8c3f0", color:"black"}} label="سوال 3" />
                  </Divider>

                  <Grid style={{margin:"10px 15px auto auto"}}>
                    <Typography style={{fontSize: 20}}>
                      {quizInfo3_q}
                    </Typography>
                  </Grid>

                  <Grid>
                    <FormControl>
                      <RadioGroup
                          value={value3}
                          onChange={handleChange3}
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel value="a" control={<Radio />} label={quizInfo3_1} />
                          <FormControlLabel value="b" control={<Radio />} label={quizInfo3_2} />
                          <FormControlLabel value="c" control={<Radio />} label={quizInfo3_3} />
                          <FormControlLabel value="d" control={<Radio />} label={quizInfo3_4} />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>



                <Grid>
                  <Divider>
                      <Chip style={{backgroundColor:"#a8c3f0", color:"black"}} label="سوال 4" />
                  </Divider>

                  <Grid style={{margin:"10px 15px auto auto"}}>
                    <Typography style={{fontSize: 20}}>
                      {quizInfo4_q}
                    </Typography>
                  </Grid>

                  <Grid>
                    <FormControl>
                      <RadioGroup
                          value={value4}
                          onChange={handleChange4}
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel value="a" control={<Radio />} label={quizInfo4_1} />
                          <FormControlLabel value="b" control={<Radio />} label={quizInfo4_2} />
                          <FormControlLabel value="c" control={<Radio />} label={quizInfo4_3} />
                          <FormControlLabel value="d" control={<Radio />} label={quizInfo4_4} />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>



                <Grid>
                  <Divider>
                      <Chip style={{backgroundColor:"#a8c3f0", color:"black"}} label="سوال 5" />
                  </Divider>

                  <Grid style={{margin:"10px 15px auto auto"}}>
                    <Typography style={{fontSize: 20}}>
                      {quizInfo5_q}
                    </Typography>
                  </Grid>

                  <Grid>
                    <FormControl>
                      <RadioGroup
                          value={value5}
                          onChange={handleChange5}
                        >
                          <FormControlLabel value="a" control={<Radio />} label={quizInfo5_1} />
                          <FormControlLabel value="b" control={<Radio />} label={quizInfo5_2} />
                          <FormControlLabel value="c" control={<Radio />} label={quizInfo5_3} />
                          <FormControlLabel value="d" control={<Radio />} label={quizInfo5_4} />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>


                <Grid dir="ltr">

                  <Button dir="ltr" variant="contained" onClick={handleSubmit} style={{margin:"80px auto auto 30px"}}>
                    دیدن نتیجه
                  </Button>

                </Grid>

        </Paper>
     );
}
 
export default With5Question;

