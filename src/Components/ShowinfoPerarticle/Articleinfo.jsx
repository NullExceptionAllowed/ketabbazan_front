// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import { baseUrl } from "../../Variable";
// import parse from "html-react-parser";
// import ChangeNav from "./../Navbar/changeNav";
// import image from "../../assets/Image/image.png";
// import "./Articleinfo.css";
// import Avatar from "@mui/material/Avatar";
// import ReactLoading from "react-loading";
// import Paper from "@mui/material/Paper";

// const ArticleInfo = () => {
//   const params = useParams();
//   const parse = require("html-react-parser");
//   const id = params.id;
//   const [articleinfo, setarticleinfo] = useState([]);
//   const [body, setbody] = useState("");
//   const [apiLoading, setApiLoading] = useState(false);

//   useEffect(() => {
//     setApiLoading(true);
//     axios.get(`${baseUrl}/write_article/${id}`).then((response) => {
//       setarticleinfo(response.data);
//       setbody(parse(response.data.body));
//       console.log(response.data);
//       setApiLoading(false);
//     });
//   }, []);
//   return (
//     <div style={{ direction: "rtl" }}>
//       <ChangeNav />
//       {apiLoading && (
//         <div
//           style={{
//             display: "flex",
//             height: "100vh",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <ReactLoading
//             type="bars"
//             color="#1565C0"
//             height={"20%"}
//             width={"10%"}
//           />
//         </div>
//       )}
//       <div className="Artcleinfo-head" style={{ marginTop: "85px" }}>
//         {!apiLoading && (
//           <>
//               <div style={{ display: "flex" }}>
//                 <Avatar
//                   alt="Remy Sharp"
//                   src={image}
//                   sx={{ width: 100, height: 100 }}
//                 />
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     marginTop: "10px",
//                     marginRight: "10px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       fontSize: "15px",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     {articleinfo.owner}
//                   </div>
//                   <div
//                     style={{
//                       marginTop: "10px",
//                       fontSize: "14px",
//                       color: "#757C86",
//                     }}
//                   >
//                     تاریخ مقاله:{articleinfo.created_jalali}
//                   </div>
//                 </div>
//               </div>

//               <div style={{ marginTop: "4%" }}>
//                 <h2>{articleinfo.title}</h2>
//                 <div style={{ marginTop: "2%" }}>{body}</div>
//               </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };
// export default ArticleInfo;

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
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import EventIcon from "@mui/icons-material/Event";

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
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
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
            height={"20%"}
            width={"10%"}
          />
        </div>
      )}

      {!apiLoading && (
        <div
          style={{
            display: "flex",
            boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px",
            marginTop: "85px",
            marginBottom: "20px",            
          }}
          className="Artcleinfo-head"
        >
          <div
            style={{ marginTop: "1%", marginRight: "1.5%", marginLeft: "1.5%",marginBottom:"1.5%" }}
          >
            <div
              style={{
                display: "flex",
                margin: "auto",
                height: "200px",
                width: "100%",
                backgroundColor: "#EFEFEF",
              }}
            >
              <div
                style={{
                  p: 2,
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <img
                  alt="img"
                  src={articleinfo.image}
                  style={{
                    height: "180px",
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: "10px",
                  marginRight: "1%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    color: "#262C7C",
                    fontSize: "22px",
                  }}
                >
                  {articleinfo.title}
                </h3>
                <div
                  style={{
                    marginTop: "3%",
                    height: "30%",
                    marginLeft: "10px",
                    overflow: "Hidden",
                    whiteSpace: "normal",
                    textOverflow: "ellipsis",
                  }}
                >
                  {articleinfo.summary}
                </div>
                <div style={{ marginTop: "2%", display: "flex" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={image}
                    sx={{ width: 20, height: 20 }}
                  />
                  <div style={{ marginRight: "6px", fontSize: "13px" }}>
                    {articleinfo.owner}
                  </div>
                  <div style={{ display: "flex", marginRight: "6%" }}>
                    <EventIcon style={{ color: "gray", fontSize: "20px" }} />
                    <div style={{ fontSize: "13px", marginRight: "6px" }}>
                      {articleinfo.created_jalali}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "3%" }}>{body}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ArticleInfo;
