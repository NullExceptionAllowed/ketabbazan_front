import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { baseUrl } from "../../Variable";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

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

  SwiperCore.use([Navigation, Pagination]);
  return (
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
        columnSpacing={{ xs: 1, sm: 1, md: 2 }}
      >
        <Swiper
          slidesPerView={6}
          spaceBetween={-30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {bookinfo.map((info, index) => (
            <SwiperSlide key={index}>
              <Link to={`/Showbookinfo/${info.id}`} style={{ textDecoration: "none" }}>
                <Grid
                  key={index}
                  className="showbook_paper"
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
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </div>
  );
}
