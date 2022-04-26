import React, { useState, useEffect } from "react";
import {Box, Button, Grid, Paper, Typography } from "@mui/material";
import {Link,useParams,} from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Variable";
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CreateIcon from '@mui/icons-material/Create';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';  
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Alert from '@mui/material/Alert';
import ChangeNav from './../Navbar/changeNav';

const BookInfo = () => {

    let paper1style = {
        height: '73vh',
        width: "45vw",
        margin: "100px 30px auto 30px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#ffffff",
    }
    let paper2style= {
      height: "73vh",
      width: "25vw",
      margin: "100px 60px auto 30px",
      borderRadius: "15px",
      backgroundColor: "#ffffff" //"#F2F1F1",
    }
    let paper3style = {
      height: "73vh",
      width: "25vw",
      margin:"100px auto auto 120px",
      border: "none",
      borderRadius: "15px",
        backgroundColor: "#ffffff",
    }
    let imgstyle = {
        width: 230,
        height: 280,
        margin: "20px auto auto auto",
        borderRadius: "7px",
        border: "1px solid "
    }
    let typo0 = {
      margin: "30px 10px auto auto",
      fontSize: 23
    }
    let typo1 = {
      margin: "10px auto auto auto",
      fontSize:"17px"
    }
    let typo2 = {
      margin: "10px 10px auto auto",
      fontSize:"32px",
      color: "#000000"
    }
    let typo3 = {
      margin: "10px 10px auto auto",
      fontSize: 16,
    }
    let typo4 = {
      margin: "15px 30px auto auto",
      fontSize: 20
    }
    let typo5 = {
      margin: "15px 30px auto auto",
      fontSize: 20,
    }
    let typo6 = {
      margin: "40px 30px auto auto",
      fontSize: 20
    }
    let typo7 = {
      margin: "10px 30px auto auto",
      fontSize: 15,
      width:"400px",
      border: "1px solid #ffffff"
    }
    let typo8 = {
      margin: "55px auto auto auto"
    }
    let typo9 = {
      //margin: "0px 660px auto auto",
      fontSize: 23,
      color: "#0052cc"
    }

    const handleLoginForReadPdf = () =>{

      let flag = localStorage.getItem("token")
  
      if(flag === null){      
        setto("/bookinfo/"+params.id)
        return to;
      }
      else{
        setto("/ReadPdf/"+params.id)
        return to;
      }
    }
    
    const [apiLoading, setApiLoading] = useState(false);
    const [bookinfo, setbookinfo] = useState([]);
    const params = useParams();
    const id = params.id;
    const [value, setValue] = React.useState(2);
    const [to, setto] = React.useState(null);

    useEffect(() => {
        setApiLoading(true);
        axios.get(`${baseUrl}/read_book/info/3`).then((response) => {
          setbookinfo(response.data.book_info);
          console.log(response.data.book_info);
          setApiLoading(false);
        });
    }, []);


    return ( 
        <div>
          
          <ChangeNav/>

          <Box sx={{display: 'flex', direction:"rtl"}} >

          <Paper variant="outlined" style={paper2style}>
            <center>
              <Grid>
                <img alt="complex" src={bookinfo.image_url} style={imgstyle}/>
              </Grid>
              <Grid>
                  <Typography style={typo1}>
                    امتیاز شما به این محصول !؟
                  </Typography>
                  <Rating style={{direction:"ltr", top:"10px",}} size="large" name="no-value" precision={0.5} value={null} />
                  <Button
                    startIcon={<CreateIcon style={{margin: "auto -40px auto auto"}}/>}
                    variant="outlined"
                    component={Link}
                    to={`/article/${id}`}
                    style={{
                      backgroundColor: "CAE5F3",
                      borderRadius: "10px",
                      margin: "25px auto auto auto",
                      fontWeight: 800,
                      width: "200px",
                      height: "40px",
                      
                    }}
                  >
                    نوشتن مقاله
                  </Button>
              </Grid>
            </center>
          </Paper>

            <Paper variant="outlined" style={paper1style}>

              <Grid>
                  <box >
                    <Typography style={typo2}>
                      {bookinfo.name}
                    </Typography>
                  </box>
                  <Typography style={typo3}>
                   امتیاز محصول : 4.5 از 5 <span style={{color:"#0052cc"}}>( 52 نفر امتیاز داده است )</span>
                  </Typography>

                  <Typography style={typo0}>
                    مشخصات کتاب :
                  </Typography>

                  <Typography style={typo5}>
                    {"دسته بندی : " + bookinfo.genre_name}
                  </Typography>

                  <Typography style={typo4}>
                  {"نویسنده : " + bookinfo.author}
                  </Typography>

                  <Typography style={typo5}>
                    {"انتشارات : " + bookinfo.publisher}
                  </Typography>

                  
                  <Typography style={typo6}>
                    خلاصه کتاب :
                  </Typography>
                  
                  
                    <Typography style={typo7}>
                      {bookinfo.summary}
                    
                    </Typography>
                  
              </Grid>
            
            </Paper >



            <Paper variant="outlined" style={paper3style}>

              <center>
                <Button
                  startIcon={<PictureAsPdfIcon style={{margin: "auto -65px auto auto"}}/>}
                  variant="outlined"
                  style={{
                  backgroundColor: "CAE5F3",
                  margin: "20px auto auto auto",
                  borderRadius: "10px",
                  fontWeight: 800,
                  width: "200px",
                  height: "40px",       
                  }}
                  to={handleLoginForReadPdf}
                  component={Link}
                >
                  مطالعه کتاب
                </Button>

                <Typography style={{margin:"60px auto auto auto"}}>
                  آیا کتاب را خوانده اید !؟
                </Typography>

                <Button
                    startIcon={<MarkChatReadIcon style={{margin: "auto -65px auto auto"}}/>}
                    variant="outlined"
                    component={Link}
                    style={{
                      backgroundColor: "CAE5F3",
                      margin: "10px auto auto auto",
                      borderRadius: "10px",
                      fontWeight: 800,
                      width: "200px",
                      height: "40px",
                      
                    }}
                  >
                    خوانده ام
                </Button>

                <Button
                    startIcon={<AutoStoriesIcon style={{margin: "auto -50px auto auto"}}/>}
                    variant="outlined"
                    component={Link}
                    style={{
                      backgroundColor: "CAE5F3",
                      margin: "7px auto auto auto",
                      borderRadius: "10px",
                      fontWeight: 800,
                      width: "200px",
                      height: "40px",
                      
                    }}
                  >
                    در حال خواندنم
                </Button>

                <Button
                    startIcon={<MenuBookIcon style={{margin: "auto -65px auto auto"}}/>}
                    variant="outlined"
                    component={Link}
                    style={{
                      backgroundColor: "CAE5F3",
                      margin: "7px auto auto auto",
                      borderRadius: "10px",
                      fontWeight: 800,
                      width: "200px",
                      height: "40px",
                      
                    }}
                  >
                    نخوانده ام
                </Button>

                <Typography style={typo8}>
                  قیمت محصول:
                </Typography>
                <Typography style={typo9}>
                  {bookinfo.price} <span style={{fontSize:"10"}}> تومان</span>
                </Typography>

                <Button
                    startIcon={<AddShoppingCartIcon style={{margin: "auto -40px auto auto"}}/>}
                    variant="contained"
                    component={Link}
                    style={{
                      backgroundColor: "CAE5F3",
                      margin: "7px auto auto auto",
                      borderRadius: "10px",
                      fontWeight: 800,
                      width: "200px",
                      height: "40px",
                      
                    }}
                  >
                    افزودن به سبد خرید
                </Button>

              </center>

            </Paper>

          </Box>

        </div>
     );
}
 
export default BookInfo;