import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../Variable";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import "./showarticle.css";
import Avatar from "@mui/material/Avatar";
import image from "../../assets/Image/image.png";


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
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            {articleinfo.map((info, index) => (
              <Paper
                key={index}
                className="shownewarticle-Paper"
                to={`/articleinfo/${info.id}`}
                component={Link}
                sx={{
                  direction: "rtl",
                }}
                style={{
                  marginTop: "10px",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "10px",
                  marginLeft: "10px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <img
                    alt="img"
                    src={info.image}
                    style={{
                      width: "100%",
                      borderRadius: "5px 5px 0px 0px",
                    }}
                    className="shownewarticle-img"
                  />
                </div>
                <div
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
                    fontSize: "15px",
                  }}
                  className="showarticle-summary"
                >
                  {info.summary}
                </div>
                <Divider style={{ marginTop: "20px" }} />
                <div
                  style={{
                    display: "flex",
                    marginTop: "15px",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ flex: 1, marginRight: "10px" }}></div>
                  <Avatar
                    alt="Remy Sharp"
                    src={image}
                    sx={{ width: 20, height: 20 }}
                  />
                  <span
                    style={{
                      marginRight: "5px",
                      fontSize: "13px",
                      color: "#0057D9",
                    }}
                  >
                    {info.owner}
                  </span>
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
