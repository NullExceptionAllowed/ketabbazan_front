import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Variable";
import parse from "html-react-parser";
import ChangeNav from "./../Navbar/changeNav";
import image from "../../assets/Image/image.png";
import "./Articleinfo.css";
import Avatar from "@mui/material/Avatar";
import ReactLoading from "react-loading";

const ArticleInfo = () => {
  const params = useParams();
  const parse = require("html-react-parser");
  const id = params.id;
  const [articleinfo, setarticleinfo] = useState([]);
  const [body, setbody] = useState("");
  const [apiLoading, setApiLoading] = useState(false);

  useEffect(() => {
    setApiLoading(true);
    axios.get(`${baseUrl}/write_article/${id}`).then((response) => {
      setarticleinfo(response.data);
      setbody(parse(response.data.body));
      console.log(response.data);
      setApiLoading(false);
    });
  }, []);
  return (
    <div style={{ direction: "rtl" }}>
      <ChangeNav />
      {apiLoading && (
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReactLoading
            type="bars"
            color="#1565C0"
            height={'20%'} width={'10%'}
          />
        </div>
      )}
      <div className="Artcleinfo-head" style={{ marginTop: "85px" }}>
        {!apiLoading && (
          <>
            <div style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src={image}
                sx={{ width: 100, height: 100 }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {articleinfo.owner}
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    color: "#757C86",
                  }}
                >
                  تاریخ مقاله:{articleinfo.created_jalali}
                </div>
              </div>
            </div>

            <div style={{ marginTop: "4%" }}>
              <h2>{articleinfo.title}</h2>
              <div style={{ marginTop: "2%" }}>{body}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ArticleInfo;
