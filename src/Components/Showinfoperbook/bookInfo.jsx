import React, { useState, useEffect } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Variable";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CreateIcon from "@mui/icons-material/Create";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChangeNav from "./../Navbar/changeNav";
import { useHistory } from "react-router-dom";
import ShowDialog from "./ShowDialog";
import { ToastContainer } from "react-toastify";
import showToast from "../../Service/toastservice";
import ReactLoading from "react-loading";
import SimilarBooks from "../similarBooks/similarBooks";
import CommentApp from "../Comment/CommentApp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import {MenuItem } from "@mui/material";
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const theme = createTheme({
  direction: "rtl",
});

const Emti = () => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
  };

  let s1 = {
    margin: "100px auto auto auto",
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
  const token = "Token " + localStorage.getItem("token");
  const [bookinfo, setbookinfo] = useState([]);
  const [rateinfocount, setrateinfocount] = useState(null);
  const [rateinfavg, setrateinfoavg] = useState(null);
  const params = useParams();
  const id = params.id;
  const [to, setto] = React.useState(null);
  const [rate, setrate] = React.useState(0);
  const [userrate, setuserrate] = React.useState(null);
  const [changerate, setchangerate] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const oopen = Boolean(anchorEl);

  const [vaziat, setvaziat] = React.useState("بدون وضعیت");

  useEffect(() => {
    setApiLoading(true);
    axios.get(`${baseUrl}/read_book/info/${id}`).then((response) => {
      setbookinfo(response.data.book_info);
      console.log(response.data.book_info);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`${baseUrl}/rate/getrate/?id=${id}`).then((response) => {
      setrateinfocount(response.data.rateinfo.count);
      setrateinfoavg(response.data.rateinfo.avg)
      console.log(response.data.rateinfo);
      if(flag===null){
        setApiLoading(false);
      }
    });
  }, [rateinfocount]);

  useEffect(() => {
    if (flag !== null) {
      axios
        .get(`${baseUrl}/rate/userrate/?book=${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((response) => {
          console.log("+++++");
          console.log(response.data.rate.rate);
          setuserrate(response.data.rate.rate);
          setApiLoading(false);
        });
    }
  }, [rateinfocount]);

  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  const SetRateuser = (event, newrate) => {
    setrate(newrate);
  };

  const handleRating = () => {
    if (flag === null) {
      setOpen(true);
    } else {
      const rating = {
        book: id,
        rate: rate,
      };
      axios
        .post(`${baseUrl}/rate/`, JSON.stringify(rating), {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log(res.status);

          if (res.status === 200) {
            const newinfo = {
              count: rateinfocount + 1,
              avg:
                (rateinfavg * rateinfocount + rate) / (rateinfocount + 1),
            };
            setrateinfoavg(newinfo.avg);
            setrateinfocount(newinfo.count);
            //setchangerate(true);
            showToast("success", "امتیازت با موفقیت ثبت شد");
          }
        });
    }
  };



  const handleHaveRead = () => {
    setAnchorEl(null);
    const haveRead = {
      list_id : 1,
      book_id : id
    };
    axios.post("http://derakhshan.pythonanywhere.com/lists/forceadd/",
      JSON.stringify(haveRead),
      {
          headers: {
              "Content-Type": "application/json",
              "Authorization": token
          }
      }
      ).then((res) =>{
          console.log(res.status)
          if(res.status===200){
            showToast("success", "وضعیت شما با موفقیت ثبت شد");
          }
          // if(res.status===400){
          //   showToast("error", "قبلا وضعیت این کتاب را ثبت کرده‌اید");
          // }
      })
  }

  const handleImReading = () => {
    setAnchorEl(null);
    const reading = {
      list_id : 2,
      book_id : id
    };
    axios.post("http://derakhshan.pythonanywhere.com/lists/forceadd/",
      JSON.stringify(reading),
      {
          headers: {
              "Content-Type": "application/json",
              "Authorization": token
          }
      }
      ).then((res) =>{
          console.log(res.status)
          if(res.status===200){
            showToast("success", "وضعیت شما با موفقیت ثبت شد");
          }
      })
  }

  const handleGoingToRead = () => {
    setAnchorEl(null);
    const goingtoread = {
      list_id : 3,
      book_id : id
    };
    axios.post("http://derakhshan.pythonanywhere.com/lists/forceadd/",
      JSON.stringify(goingtoread),
      {
          headers: {
              "Content-Type": "application/json",
              "Authorization": token
          }
      }
      ).then((res) =>{
          console.log(res.status)
          if(res.status===200){
            showToast("success", "وضعیت شما با موفقیت ثبت شد");
          }
      })
  }

  const handleLeave = () => {
    setAnchorEl(null);
    const leave = {
      list_id : 4,
      book_id : id
    };
    axios.post("http://derakhshan.pythonanywhere.com/lists/forceadd/",
      JSON.stringify(leave),
      {
          headers: {
              "Content-Type": "application/json",
              "Authorization": token
          }
      }
      ).then((res) =>{
          console.log(res.status)
          if(res.status===200){
            showToast("success", "وضعیت شما با موفقیت ثبت شد");
          }
      })
  }

  const handleCclick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCclose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ direction: "rtl" }}>
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
                {userrate === null && (
                  <>
                    <Grid>
                      <Typography
                        style={{ margin: "20px auto auto auto", fontSize: 14 }}
                      >
                        امتیاز شما به این محصول !؟
                      </Typography>
                    </Grid>

                    <Grid>
                      <ThemeProvider theme={theme}>
                        {flag !== null && (
                          <Rating
                            style={{ direction: "rtl", top: "10px" }}
                            size="large"
                            name="no-value"
                            precision={1}
                            value={rate}
                            onChange={SetRateuser}
                          />
                        )}
                        {flag === null && (
                          <Rating
                            style={{ direction: "rtl", top: "10px" }}
                            size="large"
                            name="no-value"
                            value={rate}
                            readOnly
                            onChange={SetRateuser}
                          />
                        )}
                      </ThemeProvider>
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
                  </>
                )}

                {userrate !== null && (
                  <>
                    <Grid style={{ marginTop: "15%" }}>
                      <Typography
                        style={{ margin: "20px auto auto auto", fontSize: 14 }}
                      >
                        امتیاز شما به این محصول:
                      </Typography>
                    </Grid>

                    <Grid>
                      <ThemeProvider theme={theme}>
                        <Rating
                          style={{ direction: "rtl", top: "10px" }}
                          size="large"
                          name="no-value"
                          precision={1}
                          value={userrate}
                          readOnly
                        />
                      </ThemeProvider>
                    </Grid>
                  </>
                )}
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
                  امتیاز محصول : {round(rateinfavg, 1)} از 5{" "}
                  <span style={{ color: "#0052cc" }}>
                    ( {rateinfocount} نفر امتیاز داده است )
                  </span>
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

              <Grid item xs={10}>
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
                    وضعیت : {vaziat}
                  </Typography>
                </Grid>

                <Grid>
                  <Button
                    startIcon={
                      <KeyboardArrowDownIcon
                        style={{ margin: "auto -60px auto auto" }}
                      />
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
                    aria-controls={oopen ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={oopen ? "true" : undefined}
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
                    style={{ direction: "rtl", margin: "30px auto auto 33px" }}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleHaveRead}>خوانده‌ام</MenuItem>
                    <MenuItem onClick={handleImReading}>
                      در حال خواندنم
                    </MenuItem>
                    <MenuItem onClick={handleGoingToRead}>
                      می‌خواهم بخوانم
                    </MenuItem>
                    <MenuItem onClick={handleLeave}>رها کردم</MenuItem>
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
      <ToastContainer rtl={true} />
      <br />
      <br />
      <br />

      <CommentApp />
    </div>
  );
};

export default Emti;
