import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import book from "../../assets/Image/book.jpg";
import { fontSize } from "@mui/system";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../Variable";
import axios from "axios";

const Showbook = () => {
  const [apiLoading, setApiLoading] = useState(false);
  const [bookinfo, setbookinfo] = useState([]);
  useEffect(() => {
    setApiLoading(true);
    fetch(`${baseUrl}/read_book/newest_books`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setbookinfo(data);
        setApiLoading(false);
      });    
  }, []);
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  for (let i = 0; i < bookinfo.length; i++) {
    console.log(bookinfo[i]);
    console.log("*");
  }

  return (
    <div>
      <Typography
        variant="h5"
        style={{
          fontWeight: 800,
          color: "#1565C0",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        جدیدترین کتاب ها
      </Typography>
      {apiLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "auto",
            marginTop: 96,
            marginBottom: 96,
          }}
        >
          <ReactLoading
            type="spinningBubbles"
            color={"#1565C0"}
            height={100}
            width={100}
          />
        </div>
      )}
      {!apiLoading &&  (
        <div
          style={{
            direction: "rtl",
            display: "flex",
            justifyContent: "center",
            marginRight: "3%",
            marginLeft: "3.5%",
            marginBottom: "50px",
          }}
        >
          <Grid
            item
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {bookinfo.map((info, index) => (
              <Paper
                key={index}
                to="/login"
                component={Link}
                sx={{
                  direction: "rtl",
                  p: 2,
                  maxWidth: 250,
                  flexGrow: 1,
                  textDecoration: "none",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                  marginTop: "50px",
                  marginRight: "20px",
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Img
                        alt="complex"
                        src={info.image_url}
                        style={{
                          height: "150px",
                          width: "100px",
                          marginRight: "25px",
                        }}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs sx={{ marginRight: "20px" }}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {info.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          gutterBottom
                          style={{ color: "#757C86", fontSize: "13px" }}
                        >
                          {info.author}
                        </Typography>

                        <Typography
                          variant="body2"
                          gutterBottom
                          style={{ color: "#4DB200", fontSize: "17px" }}
                        >
                          {info.price} ریال
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Showbook;
