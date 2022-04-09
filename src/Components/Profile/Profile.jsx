import React, { useState, useEffect } from "react";
import { baseUrl } from "../../Variable";


const Profile = () => {
  const [nickname, setnickname] = useState("");
  const token = "JWT" + localStorage.getItem("token");


  return (
    <div>
      <h2 style={{ textAlign: "center" }}>خوش آمدی</h2>
    </div>
  );
};

export default Profile;
