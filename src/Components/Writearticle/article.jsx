import React, { Component } from 'react';
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
import { Editor } from 'react-draft-wysiwyg';


const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const Article = () => {
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
          <Grid style={{ marginRight: "10vw" }}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              ارسال مقاله جدید
            </Typography>
            <Typography style={{ color: "#949494" }}>
              از طریق تکمیل این فرم میتوانید مقاله ای درباره کتاب قاسم بنویسید.
            </Typography>
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
                  style: { fontSize: 17, fontFamily: "BYekan", width: "50vw" },
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
                  style: { height: "1000px", width: "50vw" },
                }}
                rows={3}
                id="outlined-basic"
                label="پیش نمایش مقاله"
                multiline
                dir="rtl !important"
                margin="normal"
              />
              {/* <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
              /> */}
            </Grid>
          </Grid>
        </CacheProvider>
      </Grid>
    </div>
  );
};

export default Article;


