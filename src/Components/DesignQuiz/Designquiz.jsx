import React, { useState, useEffect } from "react";
import ChangeNav from "./../Navbar/changeNav";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import quizpic from "../../assets/Image/quiz.jpg";
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

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const DesignQuiz = () => {
  const [question, setquestion] = useState([]);

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
  return (
    <div style={{ direction: "rtl" }}>
      <ChangeNav />
      <CacheProvider value={cacheRtl}>
        <Grid container style={{ marginTop: "80px" }}>
          <Grid item sm={8} xs={12} style={{ marginRight: "6%" }}>
            <div
              style={{ color: "#1565C0", fontSize: "25px", fontWeight: "bold" }}
            >
              طراحی کوییز
            </div>
            <div style={{ display: "flex", marginTop: "5%" }}>
              <Avatar
                alt="Remy Sharp"
                src={quizpic}
                sx={{ width: "120px", height: "120px" }}
              />

              <TextField
                id="outlined-basic"
                label="نام کوییز"
                variant="outlined"
                size="small"
                style={{
                  width: "280px",
                  marginRight: "18px",
                  marginTop: "40px",
                  borderRadius: "20%",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <QuizIcon style={{ color: "#1565C0" }} />
                    </InputAdornment>
                  ),
                }}
                autoFocus
                inputProps={{}}
              />
            </div>
            <Button
              variant="contained"
              component="label"
              sx={{
                color: "white",
                width: "100px",
                mt: 2,
              }}
              style={{ marginRight: "12px" }}
            >
              <p style={{ fontSize: "0.8rem" }}>انتخاب عکس</p>
              <input type="file" hidden accept=".jpg,.jpeg,.png" />
            </Button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                marginRight: "12px",
              }}
            >
              <TextField
                variant="outlined"
                InputLabelProps={{
                  style: { width: "50vw" },
                }}
                style={{ width: "80%" }}
                rows={5}
                id="outlined-basic"
                label="توضیحات کوییز"
                multiline
                dir="rtl !important"
                margin="normal"
              />
              <div
                style={{
                  color: "#1565C0",
                  fontSize: "17px",
                  marginTop: "30px",
                }}
              >
                سوالات:
              </div>
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
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
                {question}
                <div style={{ display: "flex" }}>
                  <Button
                    onClick={handleaddonequestion}
                    style={{ color: "#1565C0", marginTop: "20px" }}
                  >
                    <span> {"اضافه کردن سوال"}</span>
                  </Button>
                  {question.length > 0 && (
                    <Button
                      onClick={handleDeleteque}
                      style={{ color: "#1565C0", marginTop: "20px" }}
                    >
                      <span> {"حذف کردن سوال"}</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            قوانین کوییز
          </Grid>
        </Grid>
      </CacheProvider>
    </div>
  );
};

export default DesignQuiz;
