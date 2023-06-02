import { Button, Dialog, IconButton, Paper, ToggleButton } from "@mui/material";
import ArticleCard from "../../Comment/tabContent/articleCard";
import { Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import { baseUrl } from "../../../Variable";
import noPicture from "../../../assets/Image/nopic.png";

const VeriFyArticles = ({ article, refresh, renderSquare, justContent }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(550));


  const [dialogStatus, setDialogStatus] = useState(false);

  const {
    id,
    image,
    title,
    summary,
    created_jalali,
    is_verified,
    body,
    owner,
  } = article;
  const { username } = owner;

  const changeStatus = () => {
    let token = "Token " + localStorage.getItem("token");
    axios
      .post(
        `${baseUrl}/admin-panel/article/verify/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json ",
            Authorization: token,
          },
        }
      )
      .then((res) => refresh())
      .catch((e) => console.log(e));
  };

  const RenderImage = () => {
    return (
      <img
        src={image.includes("default") ? noPicture : baseUrl + image}
        alt="img"
        style={{
          width: 152,
          height: 152,
          borderRadius: 4,
          objectFit: "cover",
          marginTop: 4,
          marginLeft: 8,
        }}
      />
    );
  };

  const RenderContent = () => {
    return (
      <div style={{ width: 320, marginLeft: 8 }}>
        <div
          style={{
            marginTop: 6,

            color: "black",
            direction: "rtl",
            fontSize: 14,
            height: 24,
            overflow: "hidden",
          }}
          className="showar_title"
        >
          مقاله
          <span style={{ fontWeight: "bold", fontSize: 16 }}>
            {" " + title + " "}
          </span>
        </div>

        <div
          style={{
            marginTop: 6,
            color: "gray",
            direction: "rtl",
            fontSize: 12,
          }}
        >
          <span style={{ fontSize: 14, color: "black" }}>توسط</span>
          <span style={{ fontWeight: "bold", color: "black", fontSize: 16 }}>
            {" " + username + " "}
          </span>
          در تاریخ:{" "}
          <span style={{ fontWeight: "bold" }}>
            {" " + created_jalali + " "}
          </span>
        </div>
        <div
          style={{
            fontSize: 14,
            direction: "rtl",
            marginTop: 8,
            height: 62,
            overflow: "hidden",
          }}
        >
          پیش نمایش:
          <span style={{ fontSize: 14 }}>{"  " + summary}</span>
        </div>
      </div>
    );
  };

  const RenderButtons = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          onClick={() => {
            setDialogStatus(true);
          }}
          variant="outlined"
        >
          مشاهده مقاله
        </Button>
        {justContent == true ? (
          <></>
        ) : (
          <ToggleButton
            value="check"
            selected={is_verified}
            onChange={() => {
              changeStatus();
            }}
            data-testid="change-status-of-article"
          >
            <CheckIcon data-testid="change-status-of-article2" />
          </ToggleButton>
        )}
      </div>
    );
  };

  return (
    <div style={{ marginLeft: 8, marginRight: 8 }}>
      {renderSquare ? (
        <Paper elevation={2}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: 305,
              width: 340,
              margin: 6,
            }}
          >
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              {RenderImage()}
              <div style={{ marginRight: 32, display: "flex" }}>
                {RenderButtons()}
              </div>
            </div>
            <Divider style={{ marginTop: 8 }} />
            {RenderContent()}
          </div>
        </Paper>
      ) : (
        <Paper elevation={2}>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              height: 160,
              width: 560,
              margin: 6,
            }}
          >
            {RenderImage()}
            {RenderContent()}
            {RenderButtons()}
          </div>
        </Paper>
      )}

      <Dialog
        onClose={() => {
          setDialogStatus(false);
        }}
        open={dialogStatus}
      >
        <div
          style={{ direction: "rtl", padding: "24px", paddingTop: "42px" }}
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <IconButton
          aria-label="close"
          onClick={() => {
            setDialogStatus(false);
          }}
          data-testid="icon-btn-close-dialog"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon  />
        </IconButton>
      </Dialog>
    </div>
  );
};

export default VeriFyArticles;
