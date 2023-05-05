import React from "react";
import "./ArticlesPage.css";
import SideBar from "../SideBar/SideBar";
import Nav from "../../Navbar/Nav";
import Nav2 from "../../Navbar/Nav2";
import VeriFyArticles from "./VeriFyArticles";
import { baseUrl } from "../../../Variable";
import axios from "axios";
import { FormControlLabel, Switch } from "@mui/material";

const ChangeNav = () => {
  let temp = null;
  let flag = localStorage.getItem("token");
  if (flag === null) {
    temp = <Nav />;
  } else {
    temp = <Nav2 />;
  }

  return <div>{temp}</div>;
};

function Articles(props) {
  const [articles, setArticles] = React.useState([]);

  const [refreshArticle, setRefresh] = React.useState(false);

  const [renderSquare, setRenderSquare] = React.useState(false);

  const [showAccepted, setShowAccepted] = React.useState(false);

  React.useEffect(() => {
    let token = "Token " + localStorage.getItem("token");
    axios
      .get(`${baseUrl}/admin-panel/article`, {
        headers: {
          "Content-Type": "application/json ",
          Authorization: token,
        },
      })
      .then((res) => setArticles(res.data))
      .catch((e) => console.log(e));
  }, [refreshArticle]);

  const refresh = () => {
    setRefresh(!refreshArticle);
  };

  const handleWindowResize = () => {
    let windowWidth = window.innerWidth;
    if (windowWidth < 600) setRenderSquare(true);
    else setRenderSquare(false);
  };

  window.addEventListener("resize", handleWindowResize);

  return (
    <>
      <ChangeNav></ChangeNav>
      <SideBar />
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "row",
          padding: 32,
          overflow: "auto",
          flexWrap: "wrap",
        }}
        className="Admin_Articles_page"
      >
        {articles.length == 0 ? (
          <>هیچ مقاله ای وجود ندارد</>
        ) : (
          <>
            <div
              style={{ display: "block", width: "100%", textAlign: "center" }}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={showAccepted}
                    onChange={() => {
                      setShowAccepted(!showAccepted);
                    }}
                    name="gilad"
                  />
                }
                label="نمایش  مقاله‌های تایید شده"
              />
            </div>
            {articles
              .filter((a) => {
                if (showAccepted) if (a.is_verified) return a;
                if (!showAccepted) if (!a.is_verified) return a;
              })
              .map((art, i) => {
                return (
                  <VeriFyArticles
                    renderSquare={renderSquare}
                    key={i}
                    refresh={refresh}
                    article={art}
                  />
                );
              })}
          </>
        )}
      </div>
    </>
  );
}

export default Articles;
