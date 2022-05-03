import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../Variable";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import image from "../../assets/Image/image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "./style.css";
import { Calculate } from "@mui/icons-material";

const ShownewArcrousel = () => {
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

  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
  });
  React.useEffect(() => {
      setDimensions({
        width: window.innerWidth,
      });
    console.log(dimensions.width+"@@")
  },[dimensions]);
  SwiperCore.use([Navigation, Pagination]);
  return (
    <div>
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
          to={`/Showallarticle`}
          style={{
            textAlign: "center",
            textDecoration: "none",
            marginTop: "5px",
          }}
        >
          مشاهده همه{" "}
        </Link>
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
      </div>
      {!apiLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              marginTop: "20px",
              direction: "rtl",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Swiper
              spaceBetween={0}
              slidesPerView={(dimensions.width-70)/293}

              // breakpoints={{
              //   800: {
              //     slidesPerView: 2.5,
              //     spaceBetween: 0,
              //   },
              //   850: {
              //     slidesPerView: 2.8,
              //     spaceBetween: 0,
              //   },
              //   923: {
              //     slidesPerView: 3,
              //     spaceBetween: 0,
              //   },
              //   1000: {
              //     slidesPerView: 3.3,
              //     spaceBetween: 0,
              //   },
              //   1100: {
              //     slidesPerView: 3.5,
              //     spaceBetween: 0,
              //   },
              //   1220: {
              //     slidesPerView: 4,
              //     spaceBetween: 0,
              //   },
              //   1400: {
              //     slidesPerView: 5,
              //     spaceBetween: 0,
              //   },
              // }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {articleinfo.map((info, index) => (
                <SwiperSlide key={index}>
                  <Link
                    to={{
                      pathname: `/articleinfo/${info.id}`,
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <Paper
                      key={index}
                      className="shownewarticlecro-Paper"
                      sx={{
                        direction: "rtl",
                      }}
                      style={{
                        marginTop: "10px",
                        textDecoration: "none",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        marginBottom: "70px",
                        width: "293px",
                        height: "350px",
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
                          className="shownewarticlecro-img"
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
                        className="showarticlecro-summary"
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
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShownewArcrousel;
