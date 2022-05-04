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
import ReactLoading from "react-loading";
import {useParams} from "react-router-dom";

export default function SimilarBooks() {
  const [apiLoading, setApiLoading] = useState(false);
  const [bookinfo, setbookinfo] = useState([]);
  const [bookId, setBookid] = useState("");
  const params = useParams();
 const idid = params.id;

 //const token ="Token " + localStorage.getItem('token');
  useEffect(() => {load() 
  
    
  }, [idid]);

 

 

  
const load = () =>
{
 
 
  
  setApiLoading(true);
  axios.get(
   `${baseUrl}/similar_books/${idid}` ,{
      
  }).then((response) => {
    console.log(response.data);
    setbookinfo(response.data);
    setApiLoading(false);
    console.log("amiri"+response.status);
  });

}

const sethandler = () =>
{
  setBookid(idid);
}

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
        <h2 style={{ textAlign: "center", color: "#1565C0" , marginTop:"20px" }}>
         کتاب های مشابه
        </h2>
        <Link onClick={sethandler}
          to={`/Book`}
          style={{
            textAlign: "center",
            textDecoration: "none",
            marginTop: "5px",
          }}
        >
         {" "}
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
          <div style={{ width: "100%" ,textAlign:"center",
          marginRight:"100px",
          marginLeft:"100px" ,
          paddingRight:"100px",//izadi hastam in ja ro harcheghad khasti padding hasho avaz kon
          paddingLeft:"100px",
         }}>
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                1500: {
                  slidesPerView: 10,
                  spaceBetween: 0,
                },
                // when window width is >= 768px
                1200: {
                  slidesPerView: 8,
                  spaceBetween: 0,
                },
                900: {
                  slidesPerView: 6,
                  spaceBetween: 0,
                },
                600: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
                500: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <div
            
           
            style={{
              marginTop:"10px",
              display: "flex",
              justifyContent: "center",
              width:"100%",
             textAlign:"center"
            }}
          >
              {bookinfo.map((info, index) => (
                <SwiperSlide key={index}>
                  <Link
                    to={{
                      pathname: `/bookinfo/${info.id}`,
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <Grid
                      key={index}
                      className="showbook_paper"
                      sx={{
                        direction: "rtl",
                        marginRight: "40px",
                      }}
                      style={{
                        
                        marginTop: "30px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        height: "340px",
                        
                      }}
                    >
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
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
                        style={{ color: "#757C86", fontSize: "13px" }}
                        className="showbook_author"
                      >
                        {info.author}
                      </div>
                      
                    </Grid>
                  </Link>
                </SwiperSlide>
              ))}
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
