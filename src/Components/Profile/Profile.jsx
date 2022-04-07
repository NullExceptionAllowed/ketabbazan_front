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
import { baseUrl } from "../../Variable";


const Profile = () => {
  const [nickname, setnickname] = useState("");
  const token = "JWT" + localStorage.getItem("token");
  const params = useParams();
  const index = params.index;
  console.log(index);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>خوش آمدی</h2>
    </div>
  );
};

export default Profile;
