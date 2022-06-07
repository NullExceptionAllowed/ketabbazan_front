import React, { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import "../Profile.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import showToast from "../../../Service/toastservice";
import axios, { post } from 'axios';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import OutlinedInput from '@mui/material/OutlinedInput';
import { Typography, Grid, Stack, Paper, Divider } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import { baseUrl } from "../../../Variable";
import CreateIcon from "@mui/icons-material/Create";
import { borderRadius } from "@mui/system";
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import { ToastContainer } from "react-toastify";




const EditProfile = () => {

    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });

    const [nickName, setnickName] = useState("");
    const [bio, setBio] = useState("");
    const [fullName, setfullName] = useState("");
    const [username, setusername] = useState("");

    const [userrEmail, setuserrEmail] = useState();
    const temp = "";

    const [file, setFile] = useState();
    const [file2, setFile2] = useState();

    const [changeImage, setChangeImage] = useState(false);
    const [postimage, setpostimage] = useState(null);
    const [getimage, setgetimage] = useState();
    const [aftersubmit, setaftersubmit] = useState(false);
    const [apiLoading, setApiLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState('');
    const [flag, setFlag] = useState(0);
    const [image, setimage] = useState('');
    


    useEffect(() => {

        axios.get(`${baseUrl}/profile/info/`, {
            headers: {
                'Content-Type': 'application/json ',
                'Authorization': token
            }
        }).then((res) => {

            setnickName(res.data.nickname);
            setfullName(res.data.profile.fullname);
            setBio(res.data.profile.bio);
            setuserrEmail(res.data.email);
            setusername(res.data.username);
            console.log(res.data.username);
           setimage( `http://94.101.185.252/profile/getimage/?username=${res.data.username}`);
           
            // axios.get(`${baseUrl}/profile/getimage/?username=${res.data.username}`, {
            //     headers: {
            //         'Content-Type': 'application/json ',
            //         'Authorization': token
            //     }
            // }).then((res) => {
            //     console.log(res.data);
            //    // setFile(res);
            //  setgetimage(res.data);
            //  //setgetimage(URL.createObjectURL(getimage));
            // });
        });
       



        // axios.get(`${baseUrl}/profile/getimage/?username=${username}`, {
        //     headers: {
        //         'Content-Type': 'application/json ',
        //         'Authorization': token
        //     }
        // }).then((res) => {
        //     console.log(res); console.log(username);
        //     setFile(res);
        // });
    }, []);
    //useEffect(() => { getProfileImage() }, []);

    let token = "Token " + localStorage.getItem('token');
 
    const intialize = () => {
        //getProfileImage();

        // axios.get(`${baseUrl}/profile/info/`, {
        //   headers: {
        //     'Content-Type': 'application/json ',
        //     'Authorization': token
        //   }
        // }).then((res) => {

        //   setnickName(res.data.nickname);
        //   setfullName(res.data.profile.fullname);
        //   setBio(res.data.profile.bio);
        //   setuserrEmail(res.data.email);
        //   setusername(res.data.username);
        // })


        // axios.get(`http://derakhshan.pythonanywhere.com/profile/getimage/?username=${username}`, {
        //         headers: {
        //           'Content-Type': 'application/json ',
        //           'Authorization': token
        //         }
        //       }).then((res) => {
        //           console.log(res);console.log(username);
        //           setFile(res);
        //       })


        //     axios.get(`http://derakhshan.pythonanywhere.com/profile/getimage/?username=${username}`, {
        //     headers: {
        //       'Content-Type': 'application/json ',
        //       'Authorization': token
        //     }
        //   }).then((res) => {
        //       console.log(res);console.log(username);
        //       setFile(res);
        //   })
    }

    // const getProfileImage = () => {

    // axios.get(`http://derakhshan.pythonanywhere.com/profile/getimage/?username=${username}`, {
    //     headers: {
    //       'Content-Type': 'application/json ',
    //       'Authorization': token
    //     }
    //   }).then((res) => {
    //       console.log(res);console.log(username);
    //       setFile(res);
    //   })
    // }

    const sethandlerFullName = (e) => {
        setfullName(e.target.value);
    }

    const sethandlerNickName = (event) => {
        setnickName(event.target.value);
    }

    const sethandlerBio = (e) => {
        setBio(e.target.value);
    }

    const handleChange = (e) => {
        setimage(URL.createObjectURL(e.target.files[0]));
        setChangeImage(true);
        console.log(e.target.files[0]);
        // setpostimage({
        //     image: e.target.files,
        // });
        setpostimage(
            e.target.files[0]
        );

     // setimage( `http://94.101.185.252/profile/getimage/?username=${username}`);
    };

    const user = {
        nickname: nickName,
        fullname: fullName,
        gender: "M",
        born_date: "1380" + "-" + "2" + "-" + "5",
        bio: bio
    }

    const onFileChange = (e) => {
        setFile2(e.target.files[0])
    }

    const handleSubmit = async () => {
        if (nickName !== "") {
            localStorage.setItem("nickname", nickName);
        }
        axios.post(
            `${baseUrl}/profile/info/`,
            JSON.stringify(user),
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': token
                }
            }
        ).then((res) => {

            console.log(res.status);
            if (res.status === 200) {
                showToast("success", "اطلاعات با موفقیت ذخیره شد");
            }
        });







        // fileUpload(file);


        const formData = new FormData();
        formData.append('image', postimage);
        const response = await axios.post(
            `${baseUrl}/profile/image/`,
            formData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            }
        );
       
       // setFlag(flag + 1);
      
    };





    const fileUpload = (file) => {
        const url = `${baseUrl}/profile/image/`;
        const formData = new FormData();
        formData.append('image', file);
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Authorization": token
            }
        }
        return post(url, formData, config);
    }




    return (
        <center>
            <Grid lg={10} xs={10} container  >

                <CacheProvider value={cacheRtl}>

                    <Stack direction="column" spacing={2}>
                        {/* <Grid item >
                        <Typography style={{fontSize:20, margin: "auto 50px auto auto"}}>ویرایش حساب کاربری</Typography>
                    </Grid> */}

                        <Grid item>

                            <Paper className="Editprofile_divider" elevation={0} style={{ backgroundColor: "rgb(225, 228, 228)", margin: "auto 50px auto auto", width: "550px", height: "140px" }}>

                                {/* <Divider className="Editprofile_divider" style={{backgroundColor:"lightBlue",margin:"auto auto auto auto"}} textAlign="right"> */}

                                <Badge

                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                    badgeContent={
                                        <IconButton
                                            variant="contained"
                                            component="label"
                                        >
                                            <AddIcon
                                                style={{ color: "white", margin: "auto auto auto auto", backgroundColor: "#679aea", borderRadius: "100%" }}
                                            />
                                            <input
                                                type="file"
                                                hidden
                                                onChange={handleChange}
                                                accept=".jpg,.jpeg,.png"
                                            />
                                        </IconButton>

                                    }
                                >
                                    <Avatar
                                        sx={{ width: 100, height: 100 }}
                                        src={image}

                                        style={{ margin: "20px auto auto auto" }}
                                    />

                                </Badge>
                                {/* <br></br>
                                <Avatar 
                                    sx={{ width: 70, height: 70 }} 
                                    src="photo_2022-05-11_13-23-36.jpg"
                                    style={{margin:"-20px auto auto auto"}}
                                >
                                
                                    
                                </Avatar>
                                
                                <AddIcon style={{color:"white",margin:"-80px auto auto 50px",backgroundColor:"#679aea", borderRadius:"100%"}}/> */}
                                {/* </Divider> */}

                                {/* <Grid dir="rtl">
                                <Typography style={{margin:"20px auto auto auto"}}>
                                    <span style={{color:"#000000"}}>{"ایمیل: "}</span>
                                    samad@gmail.com
                                </Typography>
                                
                            </Grid>   */}

                            </Paper>



                            {/* <Avatar 
                            sx={{ width: 65, height: 65 }} 
                            style={{margin:"20px auto auto auto"}}
                            badgeContent={
                                <AddIcon />
                            }
                        >
                        </Avatar> */}

                            {/* <Badge
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

                        </Badge> */}

                        </Grid>

                        <Grid item >
                            <TextField
                                onChange={(e) => (sethandlerFullName(e))}
                                style={{ margin: "20px 50px auto auto", width: "250px" }}
                                size="small"
                                id="outlined-basic"
                                label="نام و نام خانوادگی"
                                variant="outlined"
                                value={fullName} />

                            <TextField
                                onChange={(e) => (sethandlerNickName(e))}
                                style={{ margin: "20px 50px auto auto", width: "250px" }}
                                size="small"
                                id="outlined-basic"
                                label="نام مستعار"
                                variant="outlined"
                                value={nickName} />
                        </Grid>

                        <Grid item>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                style={{ margin: "20px 50px auto auto", width: "550px" }}
                                size="small"
                                id="outlined-read-only-input"
                                label="ایمیل"
                                defaultValue={"@gmail.com"}
                                value={userrEmail}

                            />
                        </Grid>

                        <Grid>
                            <TextField
                                onChange={sethandlerBio}
                                variant="outlined"
                                id="outlined-basic"
                                label="بیوگرافی"
                                multiline
                                rows={3}
                                value={bio}
                                style={{
                                    width: "550px", margin: "20px 50px auto auto"
                                    , directin: "rtl !important"
                                }}

                            />
                        </Grid>

                        <Grid>
                            <Button onClick={handleSubmit} variant="contained" style={{ margin: "15px 50px auto auto" }}>ویرایش اطلاعات</Button>
                        </Grid>
                    </Stack>

                </CacheProvider>
            </Grid>
            < ToastContainer rtl= {true}/>
        </center>
    );
}

export default EditProfile;
