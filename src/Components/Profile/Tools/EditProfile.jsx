import  React,{ useState, useEffect } from "react";

import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import axios from "axios";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import OutlinedInput from '@mui/material/OutlinedInput';
import { Typography, Grid, Stack } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import CreateIcon from "@mui/icons-material/Create";
import { borderRadius } from "@mui/system";



const EditProfile = () => {

    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });


    return ( 
        <center>
            <Grid lg={10} xs={10} container>
                
                <CacheProvider value={cacheRtl}>
                
                <Stack direction="column" spacing={2}>
                    <Grid item >
                        <Typography style={{fontSize:20, margin: "auto 50px auto auto"}}>ویرایش حساب کاربری</Typography>
                    </Grid>

                    <Grid item>
                        {/* <Avatar 
                            sx={{ width: 65, height: 65 }} 
                            style={{margin:"20px auto auto auto"}}
                            badgeContent={
                                <AddIcon />
                            }
                        >
                        </Avatar> */}

                        <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            badgeContent={
                                <AddIcon style={{color:"white",margin:"auto 85px auto auto",backgroundColor:"#679aea", borderRadius:"100%"}}/>
                            }
                        >
                            <Avatar
                                sx={{ width: 70, height: 70 }} 
                                src="photo_2022-05-11_13-23-36.jpg"
                                style={{margin:"20px 50px auto auto"}}
                            />

                        </Badge>

                    </Grid>

                    <Grid item >
                        <TextField style={{margin:"20px 50px auto auto", width:"250px"}} size="small" id="outlined-basic" label="نام و نام خانوادگی" variant="outlined" />
                        <TextField style={{margin:"20px 50px auto auto", width:"250px"}} size="small" id="outlined-basic" label="نام مستعار" variant="outlined" />
                    </Grid>

                    <Grid item>
                        <TextField style={{margin:"20px 50px auto auto", width:"550px"}} size="small" id="outlined-basic" label="ایمیل" variant="outlined" />  
                    </Grid>

                    <Grid>
                        <TextField
                            variant="outlined"
                            id="outlined-basic"
                            label="بیوگرافی"
                            multiline
                            rows={3}
                            

                            style={{
                           width: "550px", margin:"20px 50px auto auto"
                            , directin: "rtl !important"
                            }}

                        />
                    </Grid>

                    <Grid>
                        <Button variant="contained" style={{margin:"20px 50px auto auto"}}>ویرایش اطلاعات</Button>
                    </Grid>
                </Stack>
                
                </CacheProvider>
            </Grid>
            
        </center>
     );
}

export default EditProfile;