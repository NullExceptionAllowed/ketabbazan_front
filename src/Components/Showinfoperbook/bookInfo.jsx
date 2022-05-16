import React, { useState, useEffect } from "react";
import { Button,MenuItem ,Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Variable";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CreateIcon from "@mui/icons-material/Create";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ChangeNav from "./../Navbar/changeNav";
import { useHistory } from "react-router-dom";
import ShowDialog from "./ShowDialog";
import { ToastContainer } from "react-toastify";
import showToast from "../../Service/toastservice";
import ReactLoading from "react-loading";
import CommentApp from "../Comment/CommentApp";
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const options = ['خوانده‌ام', 'در حال خواندنم', 'می‌خواهم بخوانم', 'رها کردم'];

const Emti = () => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
  };

  let s1 = {
    margin: "100px auto auto auto",
    direction: "rtl"
  };
  let p1 = {
    height: "500px",
  };
  let p2 = {
    height: "500px",
    border: "none",
  };
  let p3 = {
    height: "500px",
    border: "none",
  };
  let imgstyle = {
    width: 230,
    height: 280,
    margin: "20px auto auto auto",
    borderRadius: "7px",
    border: "1px solid ",
  };
  let typo0 = {
    margin: "30px 10px auto auto",
    fontSize: 23,
  };
  let typo2 = {
    margin: "auto 10px auto auto",
    fontSize: "30px",
    color: "#000000",
  };
  let typo3 = {
    margin: "auto 10px auto auto",
    fontSize: 14,
  };
  let typo4 = {
    margin: "15px 30px auto auto",
    fontSize: 20,
  };
  let typo5 = {
    margin: "15px 30px auto auto",
    fontSize: 20,
  };
  let typo6 = {
    margin: "40px 30px auto auto",
    fontSize: 20,
  };
  let typo8 = {
    margin: "130px auto auto auto",
    fontSize: 14,
  };
  let typo9 = {
    fontSize: 23,
    color: "#0052cc",
  };

  let flag = localStorage.getItem("token");
  const handleLoginForReadPdf = () => {
    if (flag === null) {
      setOpen(true);
    } else {
      history.push(`/ReadPdf/${id}`);
    }
  };

  const handlearticlecanwrite = () => {
    let nic = localStorage.getItem("nickname");
    console.log(nic + "445");
    if (flag === null) {
      setOpen(true);
    } else if (nic === null) {
      showToast("error", "اطلاعات پروفایل کامل نیست.");
    } else {
      history.push(`/article/${id}`);
    }
  };

  const [apiLoading, setApiLoading] = useState(false);
  const token = "Token " + localStorage.getItem('token');
  const [bookinfo, setbookinfo] = useState([]);
  const [rateinfo, setrateinfo] = useState([]);
  const params = useParams();
  const id = params.id;
  const [to, setto] = React.useState(null);
  const [rate, setrate] = React.useState();
  const [userrate, setuserrate] = React.useState();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const oopen = Boolean(anchorEl);

  const handleCclick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCclose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setApiLoading(true);
    axios.get(`${baseUrl}/read_book/info/${id}`).then((response) => {
      setbookinfo(response.data.book_info);
      console.log(response.data.book_info);
      setApiLoading(false);
    });
  }, [id]);

  useEffect(() => {
    setApiLoading(true);
    axios.get(`${baseUrl}/rate/getrate/?id=${id}`).then((response) => {
    setrateinfo(response.data.rateinfo);
    console.log(response.data.rateinfo);
    setApiLoading(false);
    });
  }, []);

  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  const handleRating = () => {
      const rating = {
          book: id,
          rate: rate
      };
      axios.post("http://98522148.pythonanywhere.com/rate/",
      JSON.stringify(rating),
      {
          headers: {
              "Content-Type": "application/json",
              "Authorization": token
          }
      }
      ).then((res) =>{
          console.log(res.status)
          if(res.status===200){
            showToast("success", "امتیازت با موفقیت ثبت شد");
          }
      })
  }

  return (
    <div dir="rtl">
      <ChangeNav />
      {apiLoading && (
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReactLoading
            type="bars"
            color="#1565C0"
            height={"20%"}
            width={"10%"}
          />
        </div>
      )}
      {!apiLoading && (
        <Grid lg={10} xs={10} container item spacing={2} style={s1}>
          <Grid item lg={3} xs={12}>
            <Paper style={p1} elevation={1}>
              <center>
                <Grid>
                  <img
                    alt="complex"
                    src={bookinfo.image_url}
                    style={imgstyle}
                  />
                </Grid>

                <Grid>
                  <Typography
                    style={{ margin: "20px auto auto auto", fontSize: 14 }}
                  >
                   امتیاز شما به این محصول
                  </Typography>
                </Grid>

                <Grid>
                  <Rating
                    style={{ direction: "ltr", top: "10px" }}
                    size="large"
                    name="no-value"
                    precision={1}
                    value={rate}
                    onChange={(event,newrate) => {setrate(newrate)}}
                  />
                </Grid>

                <Grid>
                  <Button
                    // startIcon={
                    //   <CreateIcon style={{ margin: "auto -40px auto auto" }} />
                    // }
                    variant="outlined"
                    onClick={handleRating}
                    style={{
                      backgroundColor: "CAE5F3",
                      borderRadius: "10px",
                      margin: "25px auto auto auto",
                      fontWeight: 800,
                      width: "200px",
                      height: "40px",
                    }}
                  >
                    ثبت امتیاز
                  </Button>
                  <ShowDialog close={handleClose} open={open} />
                </Grid>

              </center>
            </Paper>
          </Grid>

          <Grid item lg={6} xs={12}>
            <Paper style={p2} elevation={1}>
              <Grid>
                <Typography style={typo2}>{bookinfo.name}</Typography>
              </Grid>

              <Grid>
                <Typography style={typo3}>
                    امتیاز محصول : {round(rateinfo.avg,1)} از 5 <span style={{color:"#0052cc"}}>( {rateinfo.count} نفر امتیاز داده است )</span>
                </Typography>
              </Grid>

              <Grid>
                <Typography style={typo0}>مشخصات کتاب :</Typography>
              </Grid>

              <Grid>
                <Typography style={typo5}>
                  {"دسته بندی : " + bookinfo.genre_name}
                </Typography>
              </Grid>

              <Grid>
                <Typography style={typo4}>
                  {"نویسنده : " + bookinfo.author}
                </Typography>
              </Grid>

              <Grid>
                <Typography style={typo5}>
                  {"انتشارات : " + bookinfo.publisher}
                </Typography>
              </Grid>

              <Grid>
                <Typography style={typo6}>خلاصه کتاب :</Typography>
              </Grid>

              <Grid xs={10}>
                <Typography
                  style={{
                    margin: "10px 30px auto auto",
                    overflow: "Hidden",
                    whiteSpace: "normal",
                    textOverflow: "ellipsis",
                    fontSize: 14,
                    width: "350px",
                    direction: "rtl",
                    height: "70px",
                    border: "1px solid #ffffff",
                  }}
                >
                  {bookinfo.summary}
                </Typography>
              </Grid>
            </Paper>
          </Grid>

          <Grid item lg={3} xs={12}>
            <Paper style={p3} elevation={1}>
              <center>
                <Grid>
                  <Button
                    startIcon={
                      <PictureAsPdfIcon
                        style={{ margin: "auto -65px auto auto" }}
                      />
                    }
                    variant="outlined"
                    style={{
                      backgroundColor: "CAE5F3",
                      margin: "20px auto auto auto",
                      borderRadius: "10px",
                      fontWeight: 800,
                      width: "200px",
                      height: "40px",
                    }}
                    onClick={handleLoginForReadPdf}
                  >
                    مطالعه کتاب
                  </Button>
                  <ShowDialog close={handleClose} open={open} />
                </Grid>

                <Grid>
                  <Button
                    startIcon={
                      <CreateIcon style={{ margin: "auto -65px auto auto" }} />
                    }
                    variant="outlined"
                    onClick={handlearticlecanwrite}
                    style={{
                      backgroundColor: "CAE5F3",
                      borderRadius: "10px",
                      margin: "5px auto auto auto",
                      fontWeight: 800,
                      width: "200px",
                      height: "40px",
                    }}
                  >
                    نوشتن مقاله
                  </Button>
                  <ShowDialog close={handleClose} open={open} />
                </Grid>

                <Grid>
                  <Typography
                    style={{ margin: "60px auto auto auto", fontSize: 14 }}
                  >
                    وضعیت : بدون وضعیت
                  </Typography>
                </Grid>


                <Grid>

                  <Button 
                    startIcon={
                      <KeyboardArrowDownIcon style={{ margin: "auto -60px auto auto" }} />
                    }
                    style={{
                      backgroundColor: "CAE5F3",
                      borderRadius: "10px",
                      margin: "5px auto auto auto",
                      fontWeight: 800,
                      width: "200px",
                      height: "40px",
                    }}
                    variant="outlined"
                    id="demo-positioned-button"
                    aria-controls={oopen ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={oopen ? 'true' : undefined}
                    onClick={handleCclick}
                    >
                      وضعیت کتاب
                  </Button>

                  <Menu
                        id="demo-positioned-menu"
                        
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={oopen}
                        onClose={handleCclose}
                        style={{direction:"rtl", margin: "30px auto auto 33px"}}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                          }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                          }}
                      >
                        <MenuItem component={Link} to="/profile" onClick={handleCclose}>خوانده‌ام</MenuItem>
                        <MenuItem component={Link} to="/profile" onClick={handleCclose}>در حال خواندنم</MenuItem>
                        <MenuItem component={Link} to="/profile" onClick={handleCclose}>می‌خواهم بخوانم</MenuItem>
                        <MenuItem component={Link} to="/profile" onClick={handleCclose}>رها کردم</MenuItem>
                  </Menu>

                </Grid>

                <Grid>
                  <Typography style={typo8}>قیمت محصول:</Typography>
                </Grid>

                <Grid>
                  <Typography style={typo9}>
                    {bookinfo.price}{" "}
                    <span style={{ fontSize: "10" }}> تومان</span>
                  </Typography>
                </Grid>

                <Grid>
                  <Button
                    startIcon={
                      <AddShoppingCartIcon
                        style={{ margin: "auto -40px auto auto" }}
                      />
                    }
                    variant="contained"
                    component={Link}
                    disabled
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
                </Grid>
              </center>
            </Paper>
          </Grid>
        </Grid>
      )}
      <ToastContainer />
      <br/>
      <br/>
      <br/>

      <CommentApp/>
    </div>
  );
};

export default Emti;
