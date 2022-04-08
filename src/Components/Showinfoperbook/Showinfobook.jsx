import React, { useState, useEffect } from "react";
import {
  Link,
  NavLink,
  Redirect,
  Route,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Variable";
import ButtonBase from "@mui/material/ButtonBase";

const Showinfo = () => {
  const [apiLoading, setApiLoading] = useState(false);
  const [bookinfo, setbookinfo] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    setApiLoading(true);
    const id = params.id;
    axios.get(`${baseUrl}/read_book/info/${id}`).then((response) => {
      setbookinfo(response.data.book_info);
      console.log(response.data.book_info);
      setApiLoading(false);
    });
  }, []);
  return (
    <div style={{direction:"rtl"}}>
      <ButtonBase style={{ display: "flex", alignItems: "center" }}>
        <img
          alt="complex1"
          src={bookinfo.image_url}
          style={{
            marginTop: "20px",
            height: "450px",
            width: "420px",
          }}
        />
      </ButtonBase>
    </div>
  );
};

export default Showinfo;
