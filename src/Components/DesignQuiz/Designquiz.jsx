import React, { useState, useEffect } from "react";
import ChangeNav from "./../Navbar/changeNav";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import quizpic from "../../assets/Image/designquiz3.jpg";
import TextField from "@mui/material/TextField";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { borderRadius } from "@mui/system";
import QuizIcon from "@mui/icons-material/Quiz";
import { InputAdornment } from "@mui/material";
import { Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Addquestion from "./Addquestion";
import CameraAltSharpIcon from "@mui/icons-material/CameraAltSharp";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import guid from "../../assets/Image/guid.jpg";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const useStyles = styled((theme) => ({
  textField: {
    borderRadius: "20px",
  },
}));
const DesignQuiz = () => {
  const [question, setquestion] = useState([]);
  const [file, setFile] = useState(quizpic);
  const [binaryFile, setBinaryFile] = useState(null);

  const handleaddonequestion = () => {
    console.log("dsfdg");
    const newpque = [...question];
    const x = <Addquestion />;
    newpque.push(x);
    setquestion(newpque);
  };
  const handleDeleteque = () => {
    const newque = [...question];
    const filterque = [];
    for (let i = 0; i < newque.length - 1; i++) {
      filterque.push(newque[i]);
    }
    setquestion(filterque);
  };

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    let picture = e.target.files[0];
    setBinaryFile(picture);
  };
  return (
    <div style={{ direction: "rtl" }}>
      <ChangeNav />
      <CacheProvider value={cacheRtl}>
        <div style={{ marginTop: "90px" }}>
          <div
            style={{ display: "flex", justifyContent: "center", height: "30%" }}
          >
            <img
              src={quizpic}
              alt="homeimg"
              style={{
                height: "30vh",
                width: "90%",
                position: "absolute",
                objectFit: "cover",
                justifyContent: "center",
                borderRadius: "10px",
                zIndex: "-1",
              }}
            />
            <div
              style={{
                display: "flex",
                textAlign: "center",
                color: "white",
                fontSize: "40px",
                alignItems: "center",
                height: "30vh",
              }}
            >
              طراحی سوال؟؟
            </div>
          </div>
          <Grid
            container
            style={{
              marginRight: "5%",
              marginLeft: "5%",
              marginTop: "3%",
              marginBottom: "20px",
            }}
          >
            <Grid item sm={3} xs={12}>
              <div
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px",
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  paddingBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{
                      width: "120px",
                      height: "30%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    src={guid}
                    alt="Readbook"
                  />
                </div>
                <center style={{ fontSize: "19px" }}>راهنمای طرح سوال</center>
                <center style={{ fontSize: "13px" }}>
                  <div style={{ marginTop: "5px" }}>
                    لطفا کتابی که از آن سوال طرح میکنید سرچ کنید
                  </div>
                  <div style={{ marginTop: "5px" }}>
                    حتما سوالات را به زبان فارسی تایپ کنید{" "}
                  </div>
                  <div style={{ marginTop: "5px" }}>
                    از توضیح اضافه درباره سوال پرهیز کنید{" "}
                  </div>
                  <div style={{ marginTop: "5px" }}>
                    سوال قابل مفهوم و غلط نگارشی نداشته باشد{" "}
                  </div>
                </center>
              </div>
            </Grid>
            <Grid item sm={7.3} style={{ marginRight: "40px", marginBottom:"0px" }}>
              <div
                style={{
                  boxShadow: "rgba(0, 0, 0,0) 0px 2px 10px",
                  width: "100%",
                  height: "300px",
                  borderRadius: "10px",
                  paddingBottom: "20px",
                }}
              >
                <div style={{ color: "#1565C0" }}>
                  کتاب مورد نظرتان را سرچ کنید و اضافه کنید
                </div>
                <div style={{ display: "flex" }}>
                  <TextField
                    variant="outlined"
                    InputLabelProps={{
                      style: { width: "50vw" },
                    }}
                    style={{ width: "50%" }}
                    size="small"
                    id="outlined-basic"
                    label="نام کتاب"
                    multiline
                    dir="rtl !important"
                    margin="normal"
                  />
                  <Button
                    style={{
                      height: "38px",
                      marginTop: "16px",
                      marginRight: "10px",
                      width: "70px",
                    }}
                    size="small"
                    variant="contained"
                    type="submit"
                  >
                    سرچ
                  </Button>
                </div>

                <div style={{ marginTop: "25px" }}>
                  <TextField
                    variant="outlined"
                    InputLabelProps={{
                      style: { width: "50vw" },
                    }}
                    style={{ width: "80%" }}
                    rows={2}
                    id="outlined-basic"
                    label="سوال.."
                    multiline
                    dir="rtl !important"
                    margin="normal"
                  />
                  <FormControl style={{ width: "100%" }}>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <TextField
                        id="outlined-basic"
                        placeholder="گزینه اول"
                        variant="outlined"
                        size="small"
                        style={{
                          width: "80%",
                          borderRadius: "20%",
                          marginTop: "16px",
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label=""
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <TextField
                        id="outlined-basic"
                        placeholder="گزینه دوم"
                        variant="outlined"
                        size="small"
                        style={{
                          width: "80%",
                          borderRadius: "20%",
                          marginTop: "16px",
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FormControlLabel
                                value="female1"
                                control={<Radio />}
                                label=""
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <TextField
                        id="outlined-basic"
                        placeholder="گزینه سوم"
                        variant="outlined"
                        size="small"
                        style={{
                          width: "80%",
                          borderRadius: "20%",
                          marginTop: "16px",
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FormControlLabel
                                value="female2"
                                control={<Radio />}
                                label=""
                                //   style={{backgroundColor:"blue"}}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <TextField
                        id="outlined-basic"
                        placeholder="گزینه چهارم"
                        variant="outlined"
                        size="small"
                        style={{
                          width: "80%",
                          borderRadius: "20%",
                          marginTop: "16px",
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FormControlLabel
                                value="female3"
                                control={<Radio />}
                                label=""
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </CacheProvider>
    </div>
  );
};

export default DesignQuiz;
