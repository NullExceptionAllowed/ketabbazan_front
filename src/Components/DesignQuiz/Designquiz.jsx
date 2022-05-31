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
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import "./quiz.css";
import { baseUrl } from "../../Variable";
import axios from "axios";
import showToast from "../../Service/toastservice";
import { ToastContainer } from "react-toastify";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const classes = styled((theme) => ({
  textField: {
    borderRadius: "20px",
    height: "300px",
    width: "80%",
  },
}));
const DesignQuiz = () => {
  const theme = useTheme();
  const checkpx = useMediaQuery(theme.breakpoints.down(900));
  const [question, setquesion] = useState("");
  const [test1, settest1] = useState("");
  const [test2, settest2] = useState("");
  const [test3, settest3] = useState("");
  const [test4, settest4] = useState("");
  const [correctans, setcorrectans] = useState("1");
  const [aftersubmit, setaftersubmit] = useState(false);
  let errors = [];
  let check = true;
  if (!question) {
    check=false;
    errors.question = "صورت سوال نباید خالی باشد.";
  } else if (question.length < 10) {
    check=false;
    errors.question = "صورت سوال نباید از 10 کاراکتر کمتر باشد.";
  }
  if(!test1){
    check=false;
    errors.test1="صورت سوال گزینه نباید خالی باشد."
  }
  if(!test2){
    check=false;
    errors.test2="صورت سوال گزینه نباید خالی باشد."
  }
  if(!test3){
    check=false;
    errors.test3="صورت سوال گزینه نباید خالی باشد."
  }
  if(!test4){
    check=false;
    errors.test4="صورت سوال گزینه نباید خالی باشد."
  }
  const SetCorrectans = (event) => {
    setcorrectans(event.currentTarget.value);
  };
  const SetQuestion = (event) => {
    setquesion(event.target.value);
  };

  const SetTest1 = (event) => {
    settest1(event.target.value);
  };

  const SetTest2 = (event) => {
    settest2(event.target.value);
  };

  const SetTest3 = (event) => {
    settest3(event.target.value);
  };

  const SetTest4 = (event) => {
    settest4(event.target.value);
  };

  const  handlesentinfo =async () => {
    setaftersubmit(true);
    const info = {
      question: question,
      op1: test1,
      op2: test2,
      op3: test3,
      op4: test4,
      ans: correctans,
      book: "23",
    };
    console.log(info);
    const token = "Token " + localStorage.getItem("token");
    if(check){
    try {
      const response =await axios.post(`${baseUrl}/quiz/propose/`, info, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      console.log(response.status);
      console.log(response);
      if (response.status === 201) {

        showToast("success", "با موفقیت وارد شدی");
      }
    } catch (ex) {
      showToast("error", "مشکلی پیش آمده است");
    }

    // axios.post(`${baseUrl}/quiz/propose/`, info,{
    //           headers: {
    //       "Content-Type": "application/json",
    //       Authorization: token,
    //     },
    // })
    // .then(function (response) {
    //   if(response.status===201)
    //   showToast("success", "با موفقیت وارد شدی");
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
  };

  return (
    <div style={{ direction: "rtl" }}>
      <ChangeNav />
      <CacheProvider value={cacheRtl}>
        <div style={{ marginTop: "90px" }}>
          <Grid container>
            <Grid item md={0.4} xs={0.2}></Grid>
            <Grid item md={5.3} style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", fontSize: "24px" }}>
                <AddIcon style={{ fontWeight: "bold", marginTop: "8px" }} />
                <span> {"    "}</span>
                <span>طرح سوال</span>
              </div>
              <Divider style={{ marginTop: "25px", width: "88vw" }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <TextField
                    variant="outlined"
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
                <TextField
                  variant="outlined"
                  style={{ width: "100%", marginTop: "16px" }}
                  rows={3.2}
                  id="outlined-basic"
                  label="صورت سوال"
                  multiline
                  dir="rtl !important"
                  value={question}
                  onChange={SetQuestion}
                  error={aftersubmit ? Boolean(errors.question) : false}
                  helperText={aftersubmit ? errors.question : null}
                />

                <FormControl style={{ width: "100%" }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group"
                    value={correctans}
                    onChange={SetCorrectans}
                  >
                    <TextField
                      id="outlined-basic"
                      placeholder="گزینه اول"
                      variant="outlined"
                      size="small"
                      style={{
                        width: "100%",
                        borderRadius: "20%",
                        marginTop: "16px",
                      }}
                      value={test1}
                      onChange={SetTest1}
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 10,
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FormControlLabel
                              value="1"
                              control={<Radio />}
                              label=""
                              style={{}}
                            />
                          </InputAdornment>
                        ),
                      }}
                      error={aftersubmit ? Boolean(errors.test1) : false}
                      helperText={aftersubmit ? errors.test1 : null}
                    />

                    <TextField
                      id="outlined-basic"
                      placeholder="گزینه دوم"
                      variant="outlined"
                      size="small"
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 100,
                        },
                      }}
                      value={test2}
                      onChange={SetTest2}
                      style={{
                        width: "100%",
                        borderRadius: "20%",
                        marginTop: "16px",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FormControlLabel
                              value="2"
                              control={<Radio />}
                              label=""
                            />
                          </InputAdornment>
                        ),
                      }}
                      error={aftersubmit ? Boolean(errors.test2) : false}
                      helperText={aftersubmit ? errors.test2 : null}
                    />

                    <TextField
                      id="outlined-basic"
                      placeholder="گزینه سوم"
                      variant="outlined"
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 100,
                        },
                      }}
                      value={test3}
                      onChange={SetTest3}
                      size="small"
                      style={{
                        width: "100%",
                        borderRadius: "20%",
                        marginTop: "16px",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FormControlLabel
                              value="3"
                              control={<Radio />}
                              label=""
                              //   style={{backgroundColor:"blue"}}
                            />
                          </InputAdornment>
                        ),
                      }}
                      error={aftersubmit ? Boolean(errors.test3) : false}
                      helperText={aftersubmit ? errors.test3 : null}
                    />

                    <TextField
                      id="outlined-basic"
                      placeholder="گزینه چهارم"
                      variant="outlined"
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 100,
                        },
                      }}
                      value={test4}
                      onChange={SetTest4}
                      size="small"
                      style={{
                        width: "100%",
                        borderRadius: "20%",
                        marginTop: "16px",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FormControlLabel
                              value="4"
                              control={<Radio />}
                              label=""
                            />
                          </InputAdornment>
                        ),
                      }}
                      error={aftersubmit ? Boolean(errors.test3) : false}
                      helperText={aftersubmit ? errors.test3 : null}
                    />
                  </RadioGroup>
                </FormControl>
                <Button
                  style={{
                    height: "38px",
                    marginTop: "16px",
                    width: "85px",
                  }}
                  size="small"
                  variant="contained"
                  type="submit"
                  onClick={handlesentinfo}
                >
                  ثبت سوال
                </Button>
              </div>
            </Grid>
            <Grid item md={0.4} xs={0}></Grid>
            <Grid item md={5} style={{}}>
              <div className="designquiz_des">
                <div style={{ height: "auto", width: "100%" }}>
                  <div style={{ fontSize: "20px" }}>سرچ کتاب</div>
                  <div
                    style={{
                      color: "#323232",
                      fontSize: "15.5px",
                      marginTop: "10px",
                    }}
                  >
                    لطفا کتابی را که میخواهید از آن سوال طرح کنید سرچ و انتحاب
                    کنید.
                  </div>

                  <div style={{ marginTop: "25px" }}>
                    <div style={{ fontSize: "20px" }}> اصول نگارشی</div>

                    <div
                      style={{
                        color: "#323232",
                        fontSize: "15.5px",
                        marginTop: "10px",
                        marginLeft: "10px",
                      }}
                    >
                      رعایت اصول نگارش یکی از کلیدی ترین و مهمترین مواردی است که
                      باید رعایت کنید. اگر اصول نگارش را رعایت نکنید سوال هرچقدر
                      قوی باشد، جذابیت خود را از دست میدهد زیرا بدون علائم
                      نگارشی خواننده درکی از متن نداشته و به نظرش نامفهوم می
                      آید.
                    </div>
                  </div>

                  <div style={{ marginTop: "25px" }}>
                    <div style={{ fontSize: "20px" }}> طرح سوال</div>

                    <div
                      style={{
                        color: "#323232",
                        fontSize: "15.5px",
                        marginTop: "10px",
                        marginLeft: "10px",
                      }}
                    >
                      دقت کنید حتما از کتابی که انتخاب می کنید سوال طرح کنید
                      سوال طرح شده توسط شما از طرف ادمین سایت چک میشود
                    </div>
                  </div>

                  <div style={{ marginTop: "25px" }}>
                    <div style={{ fontSize: "20px" }}> چگونگی طرح سوال </div>

                    <div
                      style={{
                        color: "#323232",
                        fontSize: "15.5px",
                        marginTop: "10px",
                        marginLeft: "10px",
                      }}
                    >
                      در ابتدا سوال مورد نظر را حتما به زبان فارسی تایپ کنید و
                      در ادامه گزینه های مربوط را نیز تایپ کنید و گزینه مناسب را
                      انتخاب کنید
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={0.4} xs={0.2}></Grid>
          </Grid>
        </div>
      </CacheProvider>
      <ToastContainer rtl={true} />
    </div>
  );
};

export default DesignQuiz;
