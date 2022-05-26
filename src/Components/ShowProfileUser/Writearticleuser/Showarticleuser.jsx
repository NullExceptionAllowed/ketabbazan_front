import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../../Variable";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import image from "../../../assets/Image/image.png";
import Grid from "@mui/material/Grid";
import "./style.css";
import Profileimg from "../../../assets/Image/image.png";
import { width } from "@mui/system";

const Showarticleuser = ({ articleuser }) => {
  return (
    <div
      style={{
        direction: "rtl",
      }}
    >
      {articleuser.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            fontSize: "19px",
          }}
        >
          مقاله نوشته شده ای موجود نیست
        </div>
      )}
      <div
        style={{
          direction: "rtl",
          marginBottom: "50px",
          marginTop: "1%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          className="showarticleuser_fa"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {articleuser.map((info, index) => (
            <div>
              <Grid
                style={{
                  marginTop: "2%",
                  display: "flex",
                  textDecoration: "none",
                }}
                key={index}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "150px",
                  }}
                >
                  <Link to={`/articleinfo/${info.id}`}>
                    <img
                      src={info.image}
                      alt="img"
                      style={{
                        objectFit :"cover",
                        width: "140px",
                        height: "100%",
                        borderRadius: "2px",
                      }}
                    />
                  </Link>
                  <div>
                    <Link
                      to={`/articleinfo/${info.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Grid
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginRight: "10px",
                          color: "black",
                        }}
                      >
                        {info.title}
                      </Grid>
                    </Link>
                    <Link
                      to={`/articleinfo/${info.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Grid
                        style={{
                          marginTop: "2%",
                          marginRight: "10px",
                          color: "#757C86",
                          fontSize: "14px",
                          overflow: "Hidden",
                          whiteSpace: "normal",
                          textOverflow: "ellipsis",
                          width: "65%",
                          height: "28%",
                        }}
                      >
                        {info.summary}
                      </Grid>
                      <Grid
                        style={{
                          marginTop: "1%",
                          marginRight: "10px",
                          color: "#757C86",
                          fontSize: "12px",
                        }}
                      >
                        {"تاریخ مقاله:" + info.created_jalali}
                      </Grid>
                    </Link>
                    <Link
                      to={`/ShowProfileuser/${info.owner_id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          marginRight: "10px",
                          marginTop: "2.5%",
                          display: "flex",
                        }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src={Profileimg}
                          sx={{ width: 20, height: 20 }}
                        />
                        <div
                          style={{
                            marginRight: "5px",
                            fontSize: "13px",
                            color: "#0057D9",
                          }}
                        >
                          {info.owner}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Grid>
              <Divider
                style={{ color: "red", width: "100%", marginTop: "2%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showarticleuser;
