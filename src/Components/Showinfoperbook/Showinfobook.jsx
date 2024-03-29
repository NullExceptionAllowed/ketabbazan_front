import React, { useState, useEffect, createContext } from "react";
import {
  Link,
  NavLink,
  Redirect,
  Route,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Variable";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import Navbar2 from '../Navbar/Nav2';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Navbar from "../Navbar/Nav";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import PdfViewer from "./../PdfViewer/PdfViewer";
import showToast from "../../Service/toastservice";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const book_id = createContext();

const Showinfo = () => {
  const [apiLoading, setApiLoading] = useState(false);
  const [bookinfo, setbookinfo] = useState([]);
  const params = useParams();
  const id = params.id;
  const [value, setValue] = React.useState(2);
  const [to, setto] = React.useState(null);

  useEffect(() => {
    setApiLoading(true);
    axios.get(`${baseUrl}/read_book/info/${id}`).then((response) => {
      setbookinfo(response.data.book_info);
      console.log(response.data.book_info);
      setApiLoading(false);
    });
  }, []);

  const handleLoginForReadPdf = () =>{

    let flag = localStorage.getItem("token")

    if(flag === null){      
      setto("/showbookinfo/"+params.id)
      return to;
    }
    else{
      setto("/ReadPdf/"+params.id)
      return to;
    }
}

    let temp = null;
    let flag = localStorage.getItem('token');
    if (flag === null) {
        temp = (
            <Navbar/>
        );
    }
    else{
        console.log(flag)
        temp = (
            <Navbar2/>
        );
    }

  return (
    <div style={{ direction: "rtl" }}>
      {temp}
      <Grid
        sx={{
          direction: "rtl",
          p: 2,
          maxWidth: 500,
          marginTop: "80px",
        }}
      >
        <Grid
          container
          style={{ display: "flex", justifyContent: "center" }}
          spacing={3}
        >
          <Grid item xs={5}>
            <ButtonBase>
              <img
                alt="complex"
                src={bookinfo.image_url}
                style={{ borderRadius: "2%", width: "190px", height: "280px" }}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={7}>
            <Paper
              sx={{
                p: 2,
                height: "280px",
                width: "75vw",
                backgroundColor: "#F5F5F5",
                borderRadius: "2%",
              }}
            >
              <Grid item container style={{ display: "flex" }} xs={12}>
                <Grid item xs={7.5}>
                  <Typography style={{ fontSize: "22px" }}>
                    {"دانلود و خرید کتاب" + " " + bookinfo.name}
                  </Typography>
                  <Typography style={{ marginTop: "10%", color: "#666681" }}>
                    {"نویسنده:" + " " + bookinfo.author}
                  </Typography>

                  <Typography style={{ marginTop: "2px", color: "#666681" }}>
                    {"انتشارات" + " " + bookinfo.publisher}
                  </Typography>

                  <div style={{ marginTop: "10%", display: "flex" }}>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      style={{ color: "#666666" }}
                    />
                    <span style={{ marginRight: "1px", color: "#666666" }}>
                      {" "}
                      امتیاز 2 از 3700 نظر
                    </span>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <Typography style={{ textAlign: "center", fontSize: "20px" }}>
                    {bookinfo.price} ریال
                  </Typography>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      height: "190px",
                      justifyContent: "space-around",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "290.6px",
                        borderRadius: "32px",
                        height: "45px",
                      }}
                    >
                      خرید کتاب
                    </Button>

                    <Button
                      variant="outlined"
                      style={{
                        width: "290.6px",
                        borderRadius: "32px",
                        height: "45px",
                      }}
                      to={handleLoginForReadPdf}
                      component={Link}
                    >
                      مطالعه کتاب
                    </Button>

                    <Button
                      variant="outlined"
                      style={{
                        width: "290.6px",
                        borderRadius: "32px",
                        height: "45px",
                      }}
                    >
                      افزودن به لیست علاقمندی ها
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Showinfo;
export { book_id };
