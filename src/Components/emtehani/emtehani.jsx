import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { baseUrl } from "../../Variable";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

export default function SimpleSlider() {
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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div style={{ direction: "rtl" }}>
      <Swiper
        spaceBetween={-50}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {bookinfo.map((info, index) => (
          <SwiperSlide key={index}>
            <Grid
              key={index}
              className="showbook_paper"
              to={`/profile/${index}`}
              sx={{
                direction: "rtl",
              }}
              style={{
                marginRight: "20px",
                marginTop: "30px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  alt="complex1"
                  className="showbook_img"
                  src={info.image_url}
                  style={{
                    marginTop: "20px",
                    height: "150px",
                    width: "120px",
                  }}
                />
              </div>

              <div
                className="showbook_name"
                variant="subtitle1"
                component="div"
              >
                {info.name}
              </div>
              <div
                variant="body2"
                gutterBottom
                style={{ color: "#757C86", fontSize: "13px" }}
                className="showbook_author"
              >
                {info.author}
              </div>

              <div
                variant="body2"
                gutterBottom
                style={{ color: "#4DB200", direction: "rtl" }}
                className="showbook_price"
              >
                {info.price + " " + "ریال"}
              </div>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
