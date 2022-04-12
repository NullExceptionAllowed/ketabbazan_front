import React, { useState, useEffect } from "react";

import "../Profile.css"; 
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';




const Edit = () =>
{
return(

    <div>
    <div className="section edit">
    <div className="title">
      <p style={{fontSize:"18px"}}>ویرایش حساب کاربری</p>
    </div>
     <div className="content" style={{paddingTop:"10px"}}>
   
        <form>
        <TextField  style={{marginRight:"40px", marginTop:"10px",marginBottom:"20px", width:"400px" , direction:"ltr"}} id="outlined-basic" label="نام مستعار" variant="outlined" 
        placeholder="نام مستعار فعلی"/>

<TextField
          id="outlined-multiline-static"
          label="تاریخ تولد"
          multiline
          rows={1}
          placeholder=" 1379/11/3"
          style={{marginRight:"100px", marginTop:"10px",marginBottom:"20px", width:"200px" , direction:"ltr" , 
          }}
           />
        <br/>
        <TextField
          id="outlined-multiline-static"
          label="بیوگرافی"
          multiline
          rows={4}
          defaultValue=" بیوگرافی فعلی"
          style={{marginRight:"40px", marginTop:"10px",marginBottom:"20px",  direction:"ltr" , width:"400px" , 
         }}
           />
        
          <br/>
          <div style={{marginRight:"40px"}}>
          <FormControl >
            <FormLabel id="demo-radio-buttons-group-label">جنسیت</FormLabel>
            <RadioGroup
             aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
         name="radio-buttons-group"
        >
        <FormControlLabel value="female" control={<Radio />} label="زن" />
        <FormControlLabel value="male" control={<Radio />} label="مرد" />
        <FormControlLabel value="other" control={<Radio />} label="نامعلوم" />
       
       </RadioGroup>
       </FormControl>
       </div>
        </form>
       

       

 

 
    

      </div>
      </div>

      </div>
)



}

export default Edit;