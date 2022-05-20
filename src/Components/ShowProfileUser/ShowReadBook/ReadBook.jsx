import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../../Variable";
import axios from "axios";
import Divider from "@mui/material/Divider";

const Readbook = () => {
  const [apiLoading, setApiLoading] = useState(false);
  const [bookinfo, setbookinfo] = useState([]);
  useEffect(() => {
    setApiLoading(true);
    axios({
      url: `${baseUrl}/read_book/newest_books`,
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

  return (
    <div
      style={{
        direction: "rtl",
      }}
    >
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
          {bookinfo.map((info, index) => (
            <div>
              <Grid
                style={{
                  marginTop: "2%",
                  display: "flex",
                  textDecoration: "none",
                }}
                component={Link}
                key={index}
                to={`/bookinfo/${info.id}`}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "150px",
                  }}
                >
                  <img
                    src={info.image_url}
                    alt="img"
                    style={{
                      width: "120px",
                      height: "100%",
                      borderRadius: "2px",
                    }}
                  />
                  <div>
                    <Grid
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        marginRight: "10px",
                        color: "black",
                      }}
                    >
                      {info.name}
                    </Grid>

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
                          height:"28%"
                        }}
                      >
                        {info.summary}
                      </Grid>
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

export default Readbook;
