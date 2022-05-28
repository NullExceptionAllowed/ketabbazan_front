// import React, { useState, useEffect } from "react";
// import ChangeNav from "./../Navbar/changeNav";
// import Grid from "@mui/material/Grid";
// import Avatar from "@mui/material/Avatar";
// import quizpic from "../../assets/Image/designquiz3.jpg";
// import TextField from "@mui/material/TextField";
// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";
// import { prefixer } from "stylis";
// import { borderRadius } from "@mui/system";
// import QuizIcon from "@mui/icons-material/Quiz";
// import { InputAdornment } from "@mui/material";
// import { Typography, Button, useTheme, useMediaQuery } from "@mui/material";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import Addquestion from "./Addquestion";
// import CameraAltSharpIcon from "@mui/icons-material/CameraAltSharp";
// import IconButton from "@mui/material/IconButton";
// import { styled } from "@mui/material/styles";
// import guid from "../../assets/Image/guid.jpg";

// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [prefixer, rtlPlugin],
// });

// const useStyles = styled((theme) => ({
//   textField: {
//     borderRadius: "20px",
//   },
// }));
// const DesignQuiz = () => {
//   const [question, setquestion] = useState([]);
//   const [file, setFile] = useState(quizpic);
//   const [binaryFile, setBinaryFile] = useState(null);

//   const handleaddonequestion = () => {
//     console.log("dsfdg");
//     const newpque = [...question];
//     const x = <Addquestion />;
//     newpque.push(x);
//     setquestion(newpque);
//   };
//   const handleDeleteque = () => {
//     const newque = [...question];
//     const filterque = [];
//     for (let i = 0; i < newque.length - 1; i++) {
//       filterque.push(newque[i]);
//     }
//     setquestion(filterque);
//   };

//   const handleChange = (e) => {
//     setFile(URL.createObjectURL(e.target.files[0]));
//     let picture = e.target.files[0];
//     setBinaryFile(picture);
//   };
//   return (
//     <div style={{ direction: "rtl" }}>
//       <ChangeNav />
//       <CacheProvider value={cacheRtl}>
//         <div style={{ marginTop: "90px" }}>
//           <div
//             style={{ display: "flex", justifyContent: "center", height: "30%" }}
//           >
//             <img
//               src={quizpic}
//               alt="homeimg"
//               style={{
//                 height: "30vh",
//                 width: "90%",
//                 position: "absolute",
//                 objectFit: "cover",
//                 justifyContent: "center",
//                 borderRadius: "10px",
//                 zIndex: "-1",
//               }}
//             />
//             <div
//               style={{
//                 display: "flex",
//                 textAlign: "center",
//                 color: "white",
//                 fontSize: "40px",
//                 alignItems: "center",
//                 height: "30vh",
//               }}
//             >
//               طراحی سوال؟؟
//             </div>
//           </div>
//           <Grid
//             container
//             style={{
//               marginRight: "5%",
//               marginLeft: "5%",
//               marginTop: "3%",
//               marginBottom: "20px",
//             }}
//           >
//             <Grid item sm={3} xs={12}>
//               <div
//                 style={{
//                   boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px",
//                   width: "100%",
//                   height: "auto",
//                   borderRadius: "10px",
//                   paddingBottom: "20px",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <img
//                     style={{
//                       width: "120px",
//                       height: "30%",
//                       display: "flex",
//                       justifyContent: "center",
//                     }}
//                     src={guid}
//                     alt="Readbook"
//                   />
//                 </div>
//                 <center style={{ fontSize: "19px" }}>راهنمای طرح سوال</center>
//                 <center style={{ fontSize: "13px" }}>
//                   <div style={{ marginTop: "5px" }}>
//                     لطفا کتابی که از آن سوال طرح میکنید سرچ کنید
//                   </div>
//                   <div style={{ marginTop: "5px" }}>
//                     حتما سوالات را به زبان فارسی تایپ کنید{" "}
//                   </div>
//                   <div style={{ marginTop: "5px" }}>
//                     از توضیح اضافه درباره سوال پرهیز کنید{" "}
//                   </div>
//                   <div style={{ marginTop: "5px" }}>
//                     سوال قابل مفهوم و غلط نگارشی نداشته باشد{" "}
//                   </div>
//                 </center>
//               </div>
//             </Grid>
//             <Grid item sm={7.3} style={{ marginRight: "40px", marginBottom:"0px" }}>
//               <div
//                 style={{
//                   boxShadow: "rgba(0, 0, 0,0) 0px 2px 10px",
//                   width: "100%",
//                   height: "300px",
//                   borderRadius: "10px",
//                   paddingBottom: "20px",
//                 }}
//               >
//                 <div style={{ color: "#1565C0" }}>
//                   کتاب مورد نظرتان را سرچ کنید و اضافه کنید
//                 </div>
//                 <div style={{ display: "flex" }}>
//                   <TextField
//                     variant="outlined"
//                     InputLabelProps={{
//                       style: { width: "50vw" },
//                     }}
//                     style={{ width: "50%" }}
//                     size="small"
//                     id="outlined-basic"
//                     label="نام کتاب"
//                     multiline
//                     dir="rtl !important"
//                     margin="normal"
//                   />
//                   <Button
//                     style={{
//                       height: "38px",
//                       marginTop: "16px",
//                       marginRight: "10px",
//                       width: "70px",
//                     }}
//                     size="small"
//                     variant="contained"
//                     type="submit"
//                   >
//                     سرچ
//                   </Button>
//                 </div>

//                 <div style={{ marginTop: "25px" }}>
//                   <TextField
//                     variant="outlined"
//                     InputLabelProps={{
//                       style: { width: "50vw" },
//                     }}
//                     style={{ width: "80%" }}
//                     rows={2}
//                     id="outlined-basic"
//                     label="سوال.."
//                     multiline
//                     dir="rtl !important"
//                     margin="normal"
//                   />
//                   <FormControl style={{ width: "100%" }}>
//                     <RadioGroup
//                       aria-labelledby="demo-radio-buttons-group-label"
//                       defaultValue="female"
//                       name="radio-buttons-group"
//                     >
//                       <TextField
//                         id="outlined-basic"
//                         placeholder="گزینه اول"
//                         variant="outlined"
//                         size="small"
//                         style={{
//                           width: "80%",
//                           borderRadius: "20%",
//                           marginTop: "16px",
//                         }}
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <FormControlLabel
//                                 value="female"
//                                 control={<Radio />}
//                                 label=""
//                               />
//                             </InputAdornment>
//                           ),
//                         }}
//                       />

//                       <TextField
//                         id="outlined-basic"
//                         placeholder="گزینه دوم"
//                         variant="outlined"
//                         size="small"
//                         style={{
//                           width: "80%",
//                           borderRadius: "20%",
//                           marginTop: "16px",
//                         }}
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <FormControlLabel
//                                 value="female1"
//                                 control={<Radio />}
//                                 label=""
//                               />
//                             </InputAdornment>
//                           ),
//                         }}
//                       />

//                       <TextField
//                         id="outlined-basic"
//                         placeholder="گزینه سوم"
//                         variant="outlined"
//                         size="small"
//                         style={{
//                           width: "80%",
//                           borderRadius: "20%",
//                           marginTop: "16px",
//                         }}
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <FormControlLabel
//                                 value="female2"
//                                 control={<Radio />}
//                                 label=""
//                                 //   style={{backgroundColor:"blue"}}
//                               />
//                             </InputAdornment>
//                           ),
//                         }}
//                       />

//                       <TextField
//                         id="outlined-basic"
//                         placeholder="گزینه چهارم"
//                         variant="outlined"
//                         size="small"
//                         style={{
//                           width: "80%",
//                           borderRadius: "20%",
//                           marginTop: "16px",
//                         }}
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <FormControlLabel
//                                 value="female3"
//                                 control={<Radio />}
//                                 label=""
//                               />
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//               </div>
//             </Grid>
//           </Grid>
//         </div>
//       </CacheProvider>
//     </div>
//   );
// };

// export default DesignQuiz;

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
  const[question,setquesion]=useState("");
  const[test1,settest1]=useState("");
  const[test2,settest2]=useState("");
  const[test3,settest3]=useState("");
  const[test4,settest4]=useState("");
  const[correctans,setcorrectans]=useState("1");
  
  const SetCorrectans=(event)=>{
    setcorrectans(event.currentTarget.value);
  }
  const SetQuestion=(event)=>{
    setquesion(event.target.value);
  }

  const SetTest1=(event)=>{
    settest1(event.target.value);
  }

  const SetTest2=(event)=>{
    settest2(event.target.value);
  }

  const SetTest3=(event)=>{
    settest3(event.target.value);
  }

  const SetTest4=(event)=>{
    settest4(event.target.value);
  }

  const handlesentinfo=()=>{
    const info={
      question:question,
      op1:test1,
      op2:test2,
      op3:test3,
      op4:test4,
      ans:correctans,
      book:'23'
    }
    console.log(info);
    const token = "Token " + localStorage.getItem("token");


    try {
      const response = axios.post(
        `${baseUrl}/quiz/propose/`,
        info,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      console.log(response + "*");
      console.log(response.data);
      if (response.status === 200) {
      }
    } catch (ex) {
    }
  }

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
            <Grid item md={5}  style={{}}>
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
    </div>
  );
};

export default DesignQuiz;
