import React, {useEffect, useState} from 'react';
import axios from "axios";
import {baseUrl} from "../../../Variable";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Paper} from '@mui/material';
import {Grid} from '@mui/material';
import './QuizzPage.css'
import question_mark from "../../../assets/Image/question-mark.jpg"
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


const QuizSummery = ({quiz}) => {
    const theme = useTheme();
    let token = "Token " + localStorage.getItem('token');
    /*useEffect(()=>{
        console.log(quiz.id)
        axios.post(`${baseUrl}/admin-panel/quiz/verify/:${quiz.id}`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                }
            }
        ).then(res => console.log(res)).catch(e => console.log(e));
    },[]);*/
    //console.log(quiz.question.length)
    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Paper className="Admin_Quizz_page_inside_box">
                    <Card sx={{ direction:'rtl',display: 'flex', margin: '1%' }}>
                        <CardMedia
                            component="img"
                            sx={{ width:'40%' , height: 'auto' }}
                            image={require('../../../assets/Image/question-mark.jpg')}
                            alt="Live from space album cover"
                        />
                        <Box sx={{width:'50%',direction:'rtl', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    کوییز
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    تعداد سوال : { quiz.question.length
                                }
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <IconButton aria-label="open">
                                    <Button size="small"> مشاهده و تایید</Button>
                                </IconButton>
                            </Box>
                        </Box>

                    </Card>

                </Paper>
            </Grid>
        </React.Fragment>

    );
}
export default QuizSummery ;