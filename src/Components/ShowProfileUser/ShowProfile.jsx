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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
});

const ShowProfileuser = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(760));

  const params = useParams();
  const id = params.id;
  const [apiLoading, setApiLoading] = useState(false);
  const [infouser, setinfouser] = useState([]);
  const [articleuser, setarticleuser] = useState([]);
  const [bio, setbio] = useState();

  useEffect(() => {
    setApiLoading(true);
    axios.get(`${baseUrl}/showprofile/?id=${id}`).then((response) => {
      setbio(response.data.profile.profile.bio);
      setinfouser(response.data.profile);
      setarticleuser(response.data.user_articles);
      console.log("@@@");
      console.log(response.data.user_articles);
      setApiLoading(false);
    });
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <div
          style={{
            marginTop: "120px",            
          }}
        >
          <center style={{backgroundColor:"#FAFAFA"}}>
            <Avatar
              alt="Remy Sharp"
              src={Profileimg}
              sx={{ width: 100, height: 100 }}
            />
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontWeight: "bold",
                fontSize: "19px",
                width: "120px",
              }}
            >
              فاطمه عسکری
            </div>
            <div
              className="Showprofile_bio"
              style={{ marginTop: "0.5%", color: "#626462", fontSize: "15px" }}
            >
              فاطمه عسکری هستم عاشق تکنولوژی و مطالعه کتاب، تو حوزه کتاب مشغول
              به فعالیت هستم و بخش تکنولوژیه کارو سرو سامون میدم، اینجا میخوام
              بهتون کلی مجموعه کتاب معرفی کنم که ازشون استفاده کنید چرا که راه
              ...
            </div>
          </center>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
              marginTop: "3%",
              direction: "rtl",
            }}
          >
            <ThemeProvider theme={theme}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="مقالات"></Tab>
                <Tab label="کتاب های خوانده شده"></Tab>
              </Tabs>
            </ThemeProvider>
          </Box>

          {value === 0 && (
            <>
              <Showarticleuser />
            </>
          )}
          {value === 1 && <>khoobi</>}
        </div>
      )}
    </div>
  );
};

export default ShowProfileuser;
