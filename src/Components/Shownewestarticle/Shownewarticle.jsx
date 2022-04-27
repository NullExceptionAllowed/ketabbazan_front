import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../Variable";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";

const ShownewArticle = () => {
  const [apiLoading, setApiLoading] = useState(false);
  const [articleinfo, setarticleinfo] = useState([]);

  useEffect(() => {
    setApiLoading(true);
    axios.get(`${baseUrl}/write_article/newest_articles/`).then((response) => {
      console.log(response.data);
      setarticleinfo(response.data);
      setApiLoading(false);
    });
  }, []);

  return (
    <div
      className="showbook_fa"
      style={{
        direction: "rtl",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          direction: "rtl",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#1565C0" }}>
          جدیدترین مقاله ها
        </h2>
        <Link
          to={`/Book`}
          style={{
            textAlign: "center",
            textDecoration: "none",
            marginTop: "5px",
          }}
        >
          مشاهده همه{" "}
        </Link>
      </div>
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
            marginBottom: "50px",
          }}
        >
          <Grid
            container
            item
            sx={{
              marginTop: "10px",
              display: "flex",
              flexWrap: "wrap",
            }}
            spacing={2}
          >
            {articleinfo.map((info, index) => (
              <Paper
                key={index}
                sx={{
                  direction: "rtl",
                }}
                style={{
                  marginTop: "10px",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  marginRight:"10px",
                  marginLeft:"10px",
                  height: "357px",
                  width: "290px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="complex1"
                    src={info.image}
                    style={{
                      width: "290px",
                      height: "190px",
                      borderRadius: "5px 5px 0px 0px",
                    }}
                  />
                </div>
                <div
                  variant="body2"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginTop: "20px",
                    marginRight: "10px",
                  }}
                >
                  {info.title}
                </div>
                <div
                  style={{
                    marginRight: "10px",
                    marginLeft: "10px",
                    color: "#757C86",
                  }}
                >
                  {info.summary}
                </div>
                <Divider style={{ marginTop: "20px" }} />
                <div
                  style={{
                    fontSize: "15px",
                    color: "#1565C0",
                    marginTop: "15px",
                    textAlign: "left",
                  }}
                >
                  <Stack style={{marginRight:"170px"}} direction="row" alignItems="left" gap={0}>
                    <PersonIcon />
                    {info.owner}
                  </Stack>
                </div>
              </Paper>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ShownewArticle;
