import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material';
import {setCommentState} from '../../../Service/ApiCalls';
export function ValidateComment({comment_id,is_validated}){
    function isValidComment(is_accepted){
        setCommentState({comment_id,is_accepted})
        .then((res)=>{})
        .catch((err)=>{console.log(err)});
    }

    return(


        <div>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button color="success" onClick={()=>isValidComment(true)} ><DoneIcon/></Button>
                <Button color="error" onClick={()=>isValidComment(!true)} ><CloseIcon/></Button>
            </ButtonGroup>
        </div>
    );
}