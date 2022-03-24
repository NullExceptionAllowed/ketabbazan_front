import React, { useState, useEffect } from "react";
import { baseUrl } from "../../Variable";

const Profile = () => {
  const [nickname, setnickname] = useState("");
  const token = "JWT" + localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    fetch(`${baseUrl}/accounts/profile/`, {
      crossDomain: true,
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        var data = await response.json();
        console.log(data);
      })
  }, []);

  return (
    <div>
      <h2 style={{textAlign:"center"}}>خوش آمدی</h2>
    </div>
  );
};

export default Profile;
