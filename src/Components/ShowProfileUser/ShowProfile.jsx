import React from "react";
import ChangeNav from "./../Navbar/changeNav";
import "./style.css";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Profileimg from "../../assets/Image/me.jpg";
import { useMediaQuery, useTheme } from "@mui/material";
import Showarticleuser from './Writearticleuser/Showarticleuser';


const ShowProfileuser = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(760));

  return (
    <div>
      <ChangeNav />
      <div className="ShowProfile_back">
        <div
          style={{
            marginTop: "90px",
            direction: "rtl",
            marginRight: "3%",
            marginLeft: "3%",
          }}
        >
          <h3>فاطمه عسکری</h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Paper style={{ width: "100%", marginTop: "1%", height: "auto",backgroundColor:"#FFFFFF" }}>
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
                      پروفایل فاطمه عسکری
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
                      پروفایل فاطمه عسکری
                    </h4>
                  </>
                )}
                <div style={{ marginTop: "2%" }} className="ShowProfile_bio">
                  فاطمه عسکری هستم;-گرافیست، مونتور و مدرس نرم افزارهای مهم
                  گرافیکی و ویرایش فیلم . -دارای حدود 10 سال سابقه ی فعالیت در
                  حوزه ی طراحی -سابقه‌ی همکاری با شرکت ها و نهادهای مختلف در
                  زمینه ی ساخت تیزر و کلیپ های تبلیغاتی -سابقه‌ی تدریس در
                  آموزشگاه‌های فنی و حرفه ای و همچنین آموزشگاه‌های خصوصی
                </div>
              </div>
            </Paper>
          </div>
          <div style={{ marginTop: "2%", fontSize: "20px", color:"#4666FF" }}>
            مقالات فاطمه عسکری
          </div>
          <div style={{ marginTop: "0%" }}>
            <Showarticleuser/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProfileuser;
