import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";

const Profile = () => {
  const [photo, setPhoto] = useState("");
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/v1/fetchdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AuthToken: localStorage.getItem("AuthToken"),
      },
    });
    const r = await response.json();
    // console.log(r.userData.firstName);
    setPhoto(r.userData.photo);
  };
  useEffect(() => {
    if (!localStorage.getItem("AuthToken")) {
      console.log("Error");
    } else {
      fetchData();
    }
  }, []);
  console.log(photo);

  return (
    <div>
      <h1>Profile</h1>
      {photo && (
        <Avatar
          sx={{
            width: 150,
            height: 150,
            border: "2px solid blue",
            // alignContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          alt="Profile pic"
          src={photo}
        />
      )}
    </div>
  );
};

export default Profile;
