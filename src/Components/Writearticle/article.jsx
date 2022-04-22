import React, { useState } from "react";
import Navbar from "../Navbar/Nav";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import TextField from "@mui/material/TextField";
import {
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./article.css";
import article from "../../assets/Image/article.png";
import "@ckeditor/ckeditor5-build-classic/build/translations/ar";
import SendIcon from '@mui/icons-material/Send';
//  import TextPartLanguage from "@ckeditor/ckeditor5-language/src/textpartlanguage";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Article = () => {
  const theme = useTheme();
  const [writearticle, setwritearticle] = useState("");
  const [file, setFile] = useState(article);
  const [changeImage, setChangeImage] = useState(false);
  const [binaryFile, setBinaryFile] = useState(null);
  const isMatch = useMediaQuery(theme.breakpoints.down(1000));
  console.log(isMatch);
  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setChangeImage(true);

    let picture = e.target.files[0];

    setBinaryFile(picture);
  };

  const SetwriteArticle = (event, editor) => {
    const data = editor.getData();
    setwritearticle(data);
    console.log(writearticle);
  };
  return (
    <div style={{ direction: "rtl" }}>
      <Navbar />
      <Grid
        style={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CacheProvider value={cacheRtl}>
          <Grid style={{ marginRight: "7vw", marginLeft: "7vw" }}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              ارسال مقاله جدید
            </Typography>
            <Typography style={{ color: "#949494" }}>
              از طریق تکمیل این فرم میتوانید مقاله ای درباره کتاب قاسم بنویسید.
            </Typography>
            <Grid container spacing={isMatch ? 6 : 9}>
              <Grid
                style={{
                  marginTop: "8vh",
                  display: "flex",
                  flexDirection: "column",
                }}
                item
                md={8}
                xs={12}
              >
                <TextField
                  InputLabelProps={{
                    style: {
                      fontSize: 17,
                      fontFamily: "BYekan",
                      width: "50vw",
                    },
                  }}
                  size="small"
                  dir="rtl !important"
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="عنوان مقاله"
                  name="titlearticle"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  InputLabelProps={{
                    style: { width: "50vw" },
                  }}
                  rows={3}
                  id="outlined-basic"
                  label="پیش نمایش مقاله"
                  multiline
                  dir="rtl !important"
                  margin="normal"
                />
                <div
                  style={{
                    marginTop: "18px",
                    marginBottom: "20px",
                    direction: "rtl",
                  }}
                >
                  <CKEditor
                    editor={ClassicEditor}
                    onChange={SetwriteArticle}
                    value={writearticle}
                    config={{}}
                  />
                </div>
              </Grid>
              <Grid
                style={{
                  marginTop: "8vh",
                  display: "flex",
                  flexDirection: "column",
                }}
                item
                md={4}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Button
                    variant="contained"
                    style={{
                      color: "#1565C0",
                      border: "2px solid #1565C0",
                      backgroundColor: "#fff",
                      fontWeight: 800,
                      width: "118px",
                      marginRight:"calc(100% - 118px)",
                      marginTop:"-10vh",
                      marginBottom:"4vh"
                    }}
                  >
                    <SendIcon style={{ marginLeft: 8, fontSize:"small" }} />
                    ارسال مقاله                    
                  </Button>
                  <Typography style={{ color: "#949494", marginBottom: "1vh" }}>
                    تصویر مقاله
                  </Typography>
                  <img
                    src={file}
                    alt="imgarticle"
                    style={{
                      height: "60%",
                      width: "100%",
                      borderRadius: "5px",
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      variant="contained"
                      component="label"
                      sx={{
                        color: "white",
                        width: "100px",
                        mt: 2,
                      }}
                    >
                      <p style={{ fontSize: "0.8rem" }}>انتخاب عکس</p>
                      <input
                        type="file"
                        hidden
                        onChange={handleChange}
                        accept=".jpg,.jpeg,.png"
                      />
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </CacheProvider>
      </Grid>
    </div>
  );
};

export default Article;
