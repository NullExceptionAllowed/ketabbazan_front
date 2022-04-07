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
import "./showbook.css";

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
      {!apiLoading && (
        <div
          style={{
            direction: "rtl",
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <Grid
            item
            container
            rowSpacing={1}
            sx={{ display: "flex", justifyContent: "center" }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {bookinfo.map((info, index) => (
              <Paper
                className="showbook_paper"
                key={index}
                to="/login"
                component={Link}
                sx={{
                  direction: "rtl",
                }}
                style={{
                  marginRight: "20px",
                  marginTop: "50px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px",
                }}
              >
                <ButtonBase style={{ display: "flex", alignItems: "center" }}>
                  <Img
                    alt="complex"
                    src={info.image_url}
                    style={{
                      height: "150px",
                      width: "100px",
                      marginRight: "25px",
                      marginTop: "20px",
                    }}
                  />
                </ButtonBase>

                <Typography gutterBottom variant="subtitle1" component="div">
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
              </Paper>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Showbook;
