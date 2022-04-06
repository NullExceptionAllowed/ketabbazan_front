import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./workinfo.css";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Readbookimage from "../../assets/Image/readbook.jpg";
import Makequestion from "../../assets/Image/makequesion.jpg";
import Makearticle from "../../assets/Image/makearticle.jpg";

const Workinfo = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div
      className="why-section"
      style={{
        direction: "rtl",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontWeight: 800,
          color: "#1565C0",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        چرا کتاب بازان؟
      </Typography>
      {/* <Grid item container spacing={12}>

        <Grid item xs={3}>
          <Paper className="Work_Paper" style={{backgroundColor:"red"}}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="Work_Paper" style={{backgroundColor:"red"}}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="Work_Paper" style={{backgroundColor:"red"}}></Paper>
        </Grid>
      </Grid> */}

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={0.75}></Grid>
          <Grid item xs={3.5} >
            <Paper
              className="Work_Paper"
              style={{ boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px" }}
            >
              <img
                className="workinfo_img"
                src={Readbookimage}
                alt="Readbook"
              />
              <div style={{ marginRight:"20px",marginLeft:"20px"}}>
                <h2 style={{ color: "#1565C0", marginTop: "10px" }}>
                  مطالعه کتاب
                </h2>
                <h3 style={{ marginTop: "20px" }}>
                  می تونی با استفاده از پی دی اف ویوور به کتاب مورد علاقه ات را
                  مطالعه کنی{" "}
                </h3>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3.5}>
            <Paper
              className="Work_Paper"
              style={{ boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px" }}
            >
              <img
                className="workinfo_img"
                src={Makequestion}
                alt="Loginpicture"
              />
              <div style={{ marginRight:"20px",marginLeft:"20px"}}>
                <h2 style={{ color: "#1565C0", marginTop: "10px" }}>
                  طراحی کوییز
                </h2>
                <h3 style={{ marginTop: "20px" }}>
                    میتونی کتابی رو که مطالع کردی ازش سوال طرح کنی
                </h3>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3.5}>
            <Paper
              className="Work_Paper"
              style={{ boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px" }}
            >
              <img
                className="workinfo_img"
                src={Makearticle}
                alt="Loginpicture"
              />
              <div style={{ marginRight:"20px",marginLeft:"20px"}}>
                <h2 style={{ color: "#1565C0", marginTop: "10px" }}>
                    مقاله گذاشتن        
                </h2>
                <h3 style={{ marginTop: "20px" }}>
                    می تونی درباره کتابی که دوست داری مقاله بذاری
                </h3>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={0.75}></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Workinfo;
