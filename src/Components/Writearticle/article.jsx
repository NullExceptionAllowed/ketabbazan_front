import React, { Component, useState } from "react";
import Navbar from "../Navbar/Nav";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import TextField from "@mui/material/TextField";
import {
  AppBar,
  Toolbar,
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

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Article = () => {
  const [writearticle, setwritearticle] = useState("");

  const SetwriteArticle = (event, editor) => {
    const data = editor.getData();

    setwritearticle(data);
    console.log(writearticle);
  };

  ClassicEditor.create(document.querySelector("#editor"), {
    language: {
      // The UI will be English.
      ui: "en",

      // But the content will be edited in Arabic.
      content: "ar",
    },
  })
    .then((editor) => {
      window.editor = editor;
    })
    .catch((err) => {
      console.error(err.stack);
    });

  return (
    <div style={{ direction: "rtl" }}>
      <Grid
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CacheProvider value={cacheRtl}>
          <Grid style={{ marginRight: "10vw" }}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              ارسال مقاله جدید
            </Typography>
            <Typography style={{ color: "#949494" }}>
              از طریق تکمیل این فرم میتوانید مقاله ای درباره کتاب قاسم بنویسید.
            </Typography>
            <Grid container spacing={12}>
              <Grid
                style={{
                  marginTop: "8vh",
                  display: "flex",
                  flexDirection: "column",
                }}
                item
                md={7}
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

                {/* <TextField
                variant="outlined"
                InputLabelProps={{
                  style: { width: "50vw" },
                }}
                rows={8}
                id="outlined-basic"
                label="نوشتن مقاله"
                multiline
                dir="rtl !important"
                margin="normal"
              /> */}
                <div style={{ marginTop: "18px", marginBottom: "20px" }}>
                  <CKEditor
                    editor={ClassicEditor}
                    onInit={(editor) => {
                      editor.editing.view.change((writer) => {
                        writer.setStyle(
                          "height",
                          "500px",
                          editor.editing.view.document.getRoot()
                        );
                      });
                    }}
                    onChange={SetwriteArticle}
                    value={writearticle}
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
                  <Typography>تصویر مقاله</Typography>
                  <img
                    src={article}
                    alt="imgarticle"
                    style={{
                      height:"200px",
                      width:"300px"
                    }}
                  />
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
