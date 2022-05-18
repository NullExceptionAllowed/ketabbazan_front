import React, { useState, useEffect } from "react";
import ChangeNav from "./../Navbar/changeNav";
import "./style.css";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Profileimg from "../../assets/Image/me.jpg";
import { useMediaQuery, useTheme } from "@mui/material";
import Showarticleuser from "./Writearticleuser/Showarticleuser";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../Variable";
import axios from "axios";

const ShowProfileuser = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(760));

  const params = useParams();
  const id = params.id;
  const [apiLoading, setApiLoading] = useState(false);
  const [infouser, setinfouser] = useState([]);
  const[articleuser,setarticleuser]=useState([]);
  const[bio,setbio]=useState();

  useEffect(() => {
    setApiLoading(true);
    axios.get(`${baseUrl}/showprofile/?id=${id}`).then((response) => {
      setbio(response.data.profile.profile.bio);
      setinfouser(response.data.profile);
      setarticleuser(response.data.user_articles);
      console.log(response.data.user_articles);
      setApiLoading(false);
    });
  }, []);

  return (
    <div>
      <ChangeNav />

      {apiLoading && (
        <div
          style={{
            marginTop: "90px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          loading
        </div>
      )}
      {!apiLoading && (
        <div className="ShowProfile_back">
          <div
            style={{
              marginTop: "90px",
              direction: "rtl",
              marginRight: "3%",
              marginLeft: "3%",
            }}
          >
            <h3>{infouser.nickname}</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Paper
                style={{
                  width: "100%",
                  marginTop: "1%",
                  height: "auto",
                  backgroundColor: "#FFFFFF",
                }}
              >
                {isMatch && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "2%",
                      marginBottom: "2%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={Profileimg}
                        sx={{ width: 98, height: 98 }}
                      />
                      <div
                        style={{
                          marginTop: "4%",
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        {'پروفایل'+' '+infouser.nickname}
                      </div>
                    </div>
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "1%",
                    marginBottom: "3%",
                  }}
                  className="ShowProfile_contain"
                >
                  {!isMatch && (
                    <>
                      <Avatar
                        alt="Remy Sharp"
                        src={Profileimg}
                        sx={{ width: 90, height: 90 }}
                      />
                      <h4 style={{ marginTop: "1%", width: "100%" }}>
                          {'پروفایل'+' '+infouser.nickname}
                      </h4>
                    </>
                  )}
                  <div style={{ marginTop: "2%" }} className="ShowProfile_bio">
                    {bio}
                  </div>
                </div>
              </Paper>
            </div>
            <div
              style={{ marginTop: "2%", fontSize: "20px", color: "#4666FF" }}
            >
              مقالات 
            </div>
            <div style={{ marginTop: "0%" }}>
              <Showarticleuser articleuser={articleuser}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowProfileuser;
