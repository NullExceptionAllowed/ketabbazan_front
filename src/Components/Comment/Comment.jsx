import React, { useEffect, useState, useContext } from "react";
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./AddNewComment";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { ShowerSharp } from "@mui/icons-material";
import axios from "axios";
import { baseUrl } from "../../Variable";
import SimpleContext from "./SimpleContext";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import {Link,useParams,} from "react-router-dom";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import BasicTabs from "./tab.jsx";
import DescriptionIcon from '@mui/icons-material/Description';
import BadgeIcon from '@mui/icons-material/Badge';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Comment = ({ comment_text, user, comment_id, replys ,created_on , like , dislike }) => {
    let token = "Token " + localStorage.getItem('token');
    const [reply, setReply] = useState("");
    const [id, setId] = useState("");
    const [flag1, setFlag1] = useState("0");
    
    const context = useContext(SimpleContext);
    const params = useParams();
    const idid = params.id;
    useEffect(() => {
        intialize();Show();  console.log(context.refresh);
    }, [context.refresh,flag1]);

    const [likeNumber , setlikeNumber]  = useState(0)
    const [dislikeNumber , setdislikeNumber]  = useState(0)
    const [open, setOpen] = React.useState(false);
    const [name , setName] = React.useState("");
    const [bio , setBio]= React.useState("");
    const [image , setImage]= React.useState("");



    const handleSetReply = (e) => {
        setFlag1(1);

        setReply(e.target.value);



    }

    
    const intialize = () => {
   
    

        axios.get(`${baseUrl}/comment/?id=${idid}`, {
            headers: {
               'Content-Type': 'application/json ',
               "Authorization": token
             }
          }).then((res) => {
            
           console.log(res.status);
           context.setComments(res.data.all_comments);
           
           
      
          })

          axios.get(`${baseUrl}/showprofile/?username=${user}`, {
            headers: {
               'Content-Type': 'application/json ',
               "Authorization": token
             }
          }).then((res) => {
            
             setName(res.data.profile.nickname);
             setBio(res.data.profile.profile.bio);
             setImage(res.data.profile.profile.image)

             
          })
      
      
           
      
        }
        





    const addNewReply = () => {




        const Reply = {
            comment: comment_id,
            reply_text: reply,
        }


        axios.post(
            `${baseUrl}/comment/reply/`,
            JSON.stringify(Reply),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }
        ).then((res) => {
            console.log(res.status);


        })
        setReply("");
        setFlag1(0);
        context.setFlag(context.flag+1);
        intialize();
        //context.setRefresh((Math.rnpmandom() * 9999999) + 1);
       
    }
    const sethandler = () => {
        setFlag1(0);
        context.setRefresh((Math.random() * 9999999) + 1);

    }

    const Show = () => {
        let show = null;

        if (flag1 == 1) {
            show = (<div>
                <Button variant="contained" onClick={addNewReply}
                    style={{ marginTop: "12px", marginLeft: "82%", backgroundColor: "transparent", color: "blue" }}>ریپلای </Button>
            </div>)
        }
        return show;
    }


    //const replyShow = (<div>salam</div>) ;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    function SimpleDialog(props) {
        const { onClose, selectedValue, open } = props;
      
        const handleClose = () => {
          onClose(selectedValue);
        };
      
        const handleListItemClick = (value) => {
          onClose(value);
        };


       

        // useEffect(() => {

        //     axios.get(`${baseUrl}/profile/info/`, {
        //         headers: {
        //             'Content-Type': 'application/json ',
        //             'Authorization': token
        //         }
        //     }).then((res) => {
    
        //         setnickName(res.data.nickname);
        //         setfullName(res.data.profile.fullname);
        //         setBio(res.data.profile.bio);
        //         setuserrEmail(res.data.email);
        //         setusername(res.data.username);
        //         console.log(res.data.username);
        //        setimage( `${baseUrl}/profile/getimage/?username=${res.data.username}`);
               
        //     });
           
        // }, []);
        // let token = "Token " + localStorage.getItem('token');


        //   const isnull = bio.isnull;
          let length = 0
          if(bio != null)
          {
           length = bio.length;
          }
          

        if(window.innerWidth <= 600 || length <=20 )
        {
        return (
          
          <Dialog fullScreen={fullScreen}  onClose={handleClose} open={open}>
        
               <center >
               <Avatar  sx={{ width: 140, height: 140 }}  style={{   marginTop:"25px"}} alt="Remy Sharp" src={`${baseUrl}/profile/getimage/?username=${user}`} />
               <p  style={{  marginTop:"15px" , fontSize:"20px"  }}>{name}<BadgeIcon style={{position:"relative", top:"6px", right:"-5px"}}/></p>
             
               
              
               
             
               
              <div style={{width:"65%"  , marginTop:"15px"  }}>
                <p style={{  fontSize:"20px"  , color:"rgb(25,118,210)" }}>بیوگرافی <DescriptionIcon style={{position:"relative", top:"6px"}}/></p>
               <p  style={{  fontSize:"16px"   }}>  {bio}
                  </p>
                 </div>

           
              
              
             
               
                
               </center>
                 

                <br/>

               <BasicTabs />
          </Dialog>
        );
        }
        else {
            return (
          
                <Dialog fullScreen={fullScreen}  onClose={handleClose} open={open}>
              
                     <div >
                     <Avatar  sx={{ width: 140, height: 140 }}  style={{  float:"right" , marginRight:"20px" , marginTop:"25px"}} alt="Remy Sharp" src={`${baseUrl}/profile/getimage/?username=${user}`} />
                     <p  style={{ float:"right" , marginTop:"40px" , fontSize:"20px" , marginRight:"15px" ,  direction:"rtl" }}>{name}<BadgeIcon style={{position:"relative", top:"6px", right:"5px"}}/></p>
                      
                     
                   
                     
                    <div style={{width:"69%"  , marginTop:"23px"  , marginRight:"10px"  , float:"right"}}>
                      <p style={{  fontSize:"20px"  , direction:"rtl" , color:"rgb(25,118,210)" , float:"right" }}>بیوگرافی <DescriptionIcon style={{position:"relative", top:"6px"}}/></p>
                      <br/>
                      <br/>
                      
                      
                     <p  style={{  fontSize:"16px"  , direction:"rtl" , float:"right" ,marginLeft:"100px"  }}>  {bio}
                    
                    
                        </p>
                       </div>
      
                 
                     <br/>
                    
                   
                     
                      
                     </div>
                       
      
                      <br/>
      
                     <BasicTabs />
                </Dialog>
              );


        }
      }

    const comment_id_set = {

        comment_id : comment_id 
    }


    const dislikeFunction = () => {
        axios.post(
            `${baseUrl}/comment/dislike/`,
            JSON.stringify(comment_id_set),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }
        ).then((res) => {
            console.log(res.status);
        })

        axios.get(`${baseUrl}/comment/?id=${idid}`, {
            headers: {
               'Content-Type': 'application/json ',
               "Authorization": token
             }
          }).then((res) => {
            
           console.log(res.status);
           context.setComments(res.data.all_comments);
           context.setRefresh(context.refresh +  1);

           
          
      
          })



    }


    const likeFunction = () => {
        axios.post(
            `${baseUrl}/comment/like/`,
            JSON.stringify(comment_id_set),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }
        ).then((res) => {
            console.log(res.status);
        })

        axios.get(`${baseUrl}/comment/?id=${idid}`, {
            headers: {
               'Content-Type': 'application/json ',
               "Authorization": token
             }
          }).then((res) => {
            
           console.log(res.status);
           context.setComments(res.data.all_comments);
           context.setRefresh(context.refresh +  1);
           
          
      
          })

    }





    const dislikeFunction2 = () => {
        axios.post(
            `${baseUrl}/comment/dislike/`,
            JSON.stringify(comment_id_set),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }
        ).then((res) => {
            console.log(res.status);
        })

        axios.get(`${baseUrl}/comment/?id=${idid}`, {
            headers: {
               'Content-Type': 'application/json ',
               "Authorization": token
             }
          }).then((res) => {
            
           console.log(res.status);
           context.setComments(res.data.all_comments);
           context.setRefresh(context.refresh +  1);

           
          
      
          })
        }



        const likeFunction2 = () => {
            axios.post(
                `${baseUrl}/comment/like/`,
                JSON.stringify(comment_id_set),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token
                    }
                }
            ).then((res) => {
                console.log(res.status);
            })
    
            axios.get(`${baseUrl}/comment/?id=${idid}`, {
                headers: {
                   'Content-Type': 'application/json ',
                   "Authorization": token
                 }
              }).then((res) => {
                
               console.log(res.status);
               context.setComments(res.data.all_comments);
               context.setRefresh(context.refresh +  1);
               
              
          
              })
    
        }








    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
       
      };




    //onClick={context.handleCreateNewComment}

    return (
        
        <div >
         
        <div>
            <Grid container >
                <Grid  item md={0.2} xs={0.2} ></Grid>
                <Grid item md={11.6}  xs={11.6} style={{ borderBottom: "1px solid lightgray", paddingBottom: "10px" }}>

                    
                    <Avatar onClick={handleClickOpen} style={{ marginTop: "15px" }} alt="Remy Sharp" src={`${baseUrl}/profile/getimage/?username=${user}`} />
                    <SimpleDialog
                     
                    open={open}
                     onClose={handleClose}
                     /> 

                  
        
      
                    <Grid container >
                    <Grid xs={1} md={1}>
                    <a style={{ position: "relative", top: "-40px", right: "50px" }}>{user}</a>

                    <p  style={{ position: "relative", top: "-45px", right: "43px" }}>{(new Date(created_on).toLocaleDateString('fa-IR'))}</p>

                    </Grid>
                    <Grid xs={7.5} md={8.6}> </Grid>
                    <Grid xs={0.3} md={0.15}>  <a style={{ position:"relative", top:"6px"}}>{dislike}</a>  </Grid>
                    <Grid data-test="dislike" item xs={0.8} md={0.4}>
                       <IconButton  >
                            <ThumbDownIcon color="primary"  onClick={dislikeFunction} />
                       </IconButton>
                    </Grid>
                    <Grid xs={0.7} sm={0.45} md={0.45}></Grid>

                    {/* </div> */}
                   
                    <Grid xs={0.3} md={0.15}>  <a style={{   position:"relative", top:"6px"}}>{like}</a> </Grid>


                    {/* <div style={{position:"relative" , right:"85%",top:"-12px" , display:"inline" }}> */}
                   
                   <Grid data-test="like" xs={0.8} md={0.4}>
                      <IconButton  children= "no" >
                           <ThumbUpIcon color="primary" onClick={likeFunction}  />  
                      </IconButton>
                   </Grid>
                   
                    
                    {/* </div> */}
                   
                    {/*  */}

                     <Grid xs={0.5} md={0.8}></Grid>
                    
                    </Grid>

                    
                   
                    <br/>
                    <p style={{ position: "relative", top: "-25px", right: "5px" }}>{comment_text}</p>
                    
                    <Grid container>
                        <Grid item xs={0.5} ></Grid>

                        <Grid item xs={11.0} style={{ marginRight: "5px" }}>
                            <TextareaAutosize onChange={handleSetReply}
                                style={{
                                    fontFamily: "Byekan ", fontSize: "15px", resize: "vertical", width: "100%   ", height: "35px"
                                    , lineHeight: "35px",
                                    padding: "0px 10px", marginTop: "5px"
                                }}
                                aria-label="minimum height"
                                value={reply}
                                placeholder="ریپلای"

                            />
                            {Show()}

                            
                            <Grid container >


                                <Grid item xs={12} >

                                    {replys.map(replyexa => (
                                        <div style={{position:"relative"}}>
                                            
                                            <Grid  container >

<Grid  item xs={8.7} md={9.9}></Grid>

<Grid item xs={0.3} md={0.15}>
<a style={{ position:"absolute", top:"21px"}}>{dislike}</a>
</Grid>


<Grid item xs={0.8} md={0.4}>
<IconButton   style={{position:"absolute", top:"15px"}}>
 <ThumbDownIcon color="primary"  onClick={dislikeFunction2} />
</IconButton>
 </Grid>


 <Grid xs={0.7} sm={0.45} md={0.45}></Grid>


 <Grid item xs={0.3} md={0.15}>
<a style={{ position:"absolute", top:"21px"}}>{like}</a>
</Grid>


<Grid item xs={0.8} md={0.4}>
<IconButton   style={{position:"absolute", top:"15px"}}>
 <ThumbUpIcon color="primary"  onClick={likeFunction2} />
</IconButton>
 </Grid>



</Grid>


                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    //width: 'fit-content',
                                                    borderRight: (theme) => `3px solid blue`,
                                                    // borderRadius: 1,
                                                    // bgcolor: 'background.paper',
                                                    // color: 'text.secondary',
                                                    '& svg': {
                                                        m: 1.5,
                                                    },
                                                    '& hr': {
                                                        mx: 0.5,
                                                    },
                                                }}
                                                style={{ marginTop: "7px" }}
                                            >
                                                <div style={{ marginRight: "5px" }}>

                                                    <Divider orientation="vertical" variant="middle" flexItem />


                                                    <Avatar 
                                                            onClick={handleClickOpen} style={{ marginTop: "15px" }} alt="Remy Sharp" 
                                                    src={`${baseUrl}/profile/getimage/?username=${replyexa.user}`} />
                                                      <SimpleDialog
                                                    open={open}
                                                    onClose={handleClose}
                                                         /> 


                                                          
                                                    <a style={{ position: "relative", top: "-45px", right: "47px" }}>{replyexa.user}</a>

                                                    <p  style={{ position: "relative", top: "-48px", right: "43px" }}>{(new Date(created_on).toLocaleDateString('fa-IR'))}</p>


                                                 

                                                    <p style={{ position: "relative", top: "-30px", right: "5px" }}>{replyexa.reply_text}</p>


                                                </div>
                                            </Box>


                                        </div>
                                    ))}
                                </Grid>
                            </Grid>



                        </Grid>
                        <Grid item xs={0.5} ></Grid>
                    </Grid>


                </Grid>
                <Grid  item md={0.2} xs={0.2}></Grid>
            </Grid>
        </div>
         </div >



    )


}
export default Comment;