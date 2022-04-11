import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../Variable";
import axios from "axios";
import Navbar from "../Navbar/Nav";
import "./showbookall.css";

const Showbook = () => {
  const [apiLoading, setApiLoading] = useState(false);
  const [bookinfo, setbookinfo] = useState([]);
  useEffect(() => {
    setApiLoading(true);
    axios({
      url: `${baseUrl}/read_book/all_books`,
    }).then((response) => {
      console.log(response.data);
      setbookinfo(response.data);
      setApiLoading(false);
    });
  }, []);
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  console.log(bookinfo.length);
  return (
    <div className="showbookall_fa">
      <Navbar />
      <Typography
        variant="h5"
        style={{
          fontWeight: 800,
          color: "#1565C0",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        همه کتاب ها
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
            sx={{ display: "flex", justifyContent: "center" }}
          >
            
            {bookinfo.map((info, index) => (
              <Grid
                className="showbookall_paper"
                key={index}
                to={`/showbookinfo/${info.id}`}
                component={Link}
                sx={{
                  direction: "rtl",
                }}
                style={{
                  marginRight: "5px",
                  marginTop: "40px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",                  
                }}
              >
                <ButtonBase style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="complex1"
                    className="showbookall_img"
                    src={info.image_url}
                    style={{
                      marginTop: "20px",
                      height: "150px",
                      width: "120px",
                    }}
                  />
                </ButtonBase>

                <div
                  className="showbookall_name"
                  variant="subtitle1"
                  component="div"
                  style={{color:"black"}}
                >
                  {info.name}
                </div>
                <div
                  variant="body2"
                  style={{ color: "#757C86", fontSize: "13px" }}
                  className="showbookall_author"
                >
                  {info.author}
                </div>

              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Showbook;
