import  React,{ useState, useEffect } from "react";

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
import showToast from "E:/Tahlil_Tarahi/courses/react/ketab/ketabbazan_front/src/Service/toastservice.jsx";
import axios from "axios";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import OutlinedInput from '@mui/material/OutlinedInput';
import { Typography, Grid, Stack, Paper, Divider,Input  } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import { baseUrl } from "../../../Variable";
import CreateIcon from "@mui/icons-material/Create";
import { borderRadius } from "@mui/system";
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';




const EditProfile = () => {

    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });

    const [nickName, setnickName] = useState("");
    const [bio, setBio] = useState("");
    const [fullName, setfullName] = useState("");

    const [userrEmail, setuserrEmail] = useState();
    const temp = "";

    const [file, setFile] = useState();
    const [changeImage, setChangeImage] = useState(false);
    const [postimage, setpostimage] = useState(null);
    const [aftersubmit, setaftersubmit] = useState(false);
    const [apiLoading, setApiLoading] = useState(false);

    useEffect(() => { intialize() }, []);
    //useEffect(() => {getProfileImage()}, [])

    let token = "Token " + localStorage.getItem('token');

    const intialize = () => {
        axios.get(`${baseUrl}/profile/info/`, {
          headers: {
            'Content-Type': 'application/json ',
            'Authorization': token
          }
        }).then((res) => {
    
          setnickName(res.data.nickname);
          setfullName(res.data.profile.fullname);
          setBio(res.data.profile.bio);
          setuserrEmail(res.data.email)
        })
    }


    // const getProfileImage = () => {
    
    // axios.get(`${baseUrl}/profile/image/`, {
    //     headers: {
    //       'Content-Type': 'application/json ',
    //       'Authorization': token
    //     }
    //   }).then((res) => {
    //       console.log(res);
    //       setFile(res);
    //   })
    // }

    // async function status() {
    //     const url = `${baseUrl}/profile/image/`
    //     let response = await axios.get(`${baseUrl}/profile/info/`, {
    //         headers: {
    //           'Content-Type': 'application/json ',
    //           'Authorization': token
    //         }
    //       })
    //     return response.data;
    //   }
      //status().then((data) => setFile(data));

    const sethandlerFullName = (e) =>
    {
        setfullName(e.target.value);
    }

    const sethandlerNickName = (event) =>
    {
        setnickName(event.target.value);
    }

    const sethandlerBio = (e) =>
    {
        setBio(e.target.value);
    }

    const user = {
        nickname : nickName ,
        fullname :fullName,
        gender : "M" ,
        born_date : "1380" + "-" + "2" + "-" + "5" ,
        bio : bio
    }

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
        setChangeImage(true);
        console.log(e.target.files[0]);
        setpostimage({
          image: e.target.files,
        });
    };

    // const handlesubmit2 = async (event) => {
    //     event.preventDefault();
    //     setaftersubmit(true);
    //     const formdata = new FormData();
    //     if (postimage !== null) {
    //       formdata.append("image", postimage.image[0]);
    //     }
    //     console.log(JSON.stringify(formdata));
    //     const token = "Token " + localStorage.getItem("token");
    //     console.log(token);
    //     if (true) {
    //       try {
    //         const response = await axios.post(
    //           `${baseUrl}/profile/image/`,
    //           formdata,
    //           {
    //             headers: {
    //               "Content-Type": "application/json",
    //               Authorization: token,
    //             },
    //           }
    //         );
        
    //       }
    //        catch (ex) {
            
    //         console.log(ex);
            
    //       }
    //     }
    //   };

    const handleSubmit = () =>
    {
     //handlesubmit2();
     if(nickName!==""){
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
    ) .then((res) => {

       console.log(res.status); 
       if(res.status===200){
        showToast("success", "اطلاعات با موفقیت ذخیره شد");
      }          
     })  
    }


    return ( 
        <center>
            <Grid lg={10} xs={10} container>
                
                <CacheProvider value={cacheRtl}>
                
                <Stack direction="column" spacing={2}>
                    {/* <Grid item >
                        <Typography style={{fontSize:20, margin: "auto 50px auto auto"}}>ویرایش حساب کاربری</Typography>
                    </Grid> */}

                    <Grid item>

                        <Paper className="Editprofile_divider" elevation={0} style={{backgroundColor:"rgb(225, 228, 228)",margin:"auto 50px auto auto",width:"550px", height:"140px"}}>
                        
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
                                                style={{color:"white",margin:"auto auto auto auto",backgroundColor:"#679aea", borderRadius:"100%"}}
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
                                        src={file}
                                        style={{margin:"20px auto auto auto"}}
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
                        style={{margin:"20px 50px auto auto", width:"250px"}} 
                        size="small" 
                        id="outlined-basic" 
                        label="نام و نام خانوادگی" 
                        variant="outlined"
                        value={fullName} />

                        <TextField 
                        onChange={(e) => (sethandlerNickName(e))}
                        style={{margin:"20px 50px auto auto", width:"250px"}} 
                        size="small" 
                        id="outlined-basic" 
                        label="نام مستعار" 
                        variant="outlined" 
                        value={nickName}/>
                    </Grid>

                    <Grid item>
                        <TextField 
                        InputProps={{
                            readOnly: true,
                          }}
                        style={{margin:"20px 50px auto auto", width:"550px"}} 
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
                           width: "550px", margin:"20px 50px auto auto"
                            , directin: "rtl !important"
                            }}

                        />
                    </Grid>

                    <Grid>
                        <Button onClick={handleSubmit} variant="contained" style={{margin:"15px 50px auto auto"}}>ویرایش اطلاعات</Button>
                    </Grid>
                </Stack>
                
                </CacheProvider>
            </Grid>
            
        </center>

        
     );
}

export default EditProfile;