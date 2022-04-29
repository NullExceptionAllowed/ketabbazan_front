import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Navbar2 from "../Navbar/Nav2";
import { baseUrl } from "../../Variable";
import axios from "axios";
import Navbar from "../Navbar/Nav";
import "./showbookall.css";
import Skeleton from "@mui/material/Skeleton";
import { useHistory } from "react-router-dom";
import ChangeNav from "../Navbar/changeNav";
import Pagination from "@mui/material/Pagination";

const Showbook = () => {
  const [apiLoading, setApiLoading] = useState(false);
  const [bookinfo, setbookinfo] = useState([]);
  const [pagenum, setpagenum] = useState(1);
  const [numpage, setnumpage] = useState(1);

  const history = useHistory();
  useEffect(() => {
    setApiLoading(true);
    axios({
      url: `${baseUrl}/read_book/all_books/page_count`,
    }).then((response) => {
      setnumpage(response.data);
    });
    axios({
      url: `${baseUrl}/read_book/all_books/${pagenum}`,
    }).then((response) => {
      setbookinfo(response.data);
      setApiLoading(false);
    });
  }, [pagenum]);
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  // console.log(bookinfo.length);

  const handlePagination = (e, p) => {
    setpagenum(p);
    console.log(p);
    history.replace(`/Book/page=${p}`);
    window.scroll(0, 0);
  };

  return (
    <div className="showbookall_fa">
      <ChangeNav />
      <div style={{ marginTop: "6%" }}>
        {apiLoading && (
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
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {Array.from(Array(22)).map((_, index) => (
                <Grid
                  key={index}
                  sx={{
                    direction: "rtl",
                  }}
                  style={{
                    width: "155px",
                    height: "202px",
                    marginRight: "10px",
                    marginTop: "40px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    width="120px"
                    height="150px"
                  />
                  <div
                    className="showbookall_name"
                    variant="subtitle1"
                    component="div"
                    style={{ color: "black" }}
                  >
                    <Skeleton
                      variant="rectangular"
                      width="100px"
                      height="12px"
                    />
                  </div>

                  <div
                    variant="body2"
                    style={{ color: "#757C86", fontSize: "13px" }}
                    className="showbookall_author"
                  >
                    <Skeleton
                      variant="rectangular"
                      width="80px"
                      height="12px"
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
        {!apiLoading && (
          <>
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
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {bookinfo.map((info, index) => (
                  <Grid
                    className="showbookall_paper"
                    key={index}
                    to={`/bookinfo/${info.id}`}
                    component={Link}
                    sx={{
                      direction: "rtl",
                    }}
                    style={{
                      marginTop: "40px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <ButtonBase
                      style={{ display: "flex", alignItems: "center" }}
                    >
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
                      style={{ color: "black" }}
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
          </>
        )}
        {numpage > 1 ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={numpage}
              style={{
                marginTop: "-30px",
                marginBottom: "30px",
                padding: "10px 80px",
              }}
              variant="outlined"
              color="primary"
              onChange={handlePagination}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Showbook;
