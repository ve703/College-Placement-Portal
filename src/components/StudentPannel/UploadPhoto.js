import React, { useState } from "react";
import { Avatar, Grid } from "@mui/material";
import { message } from "antd";

const UploadPhoto = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    setSelectedPhoto(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedPhoto);

      const response = await fetch("http://localhost:5000/api/v1/photo", {
        method: "POST",
        headers: {
          AuthToken: localStorage.getItem("AuthToken"),
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Photo uploaded");
        message.success("Profile Uploaded");
        window.location.reload();
      } else {
        console.error("Failed", data.msg);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* <p>Upload Profile</p> */}

      <Grid>
        <Grid item sx={12}>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
          <br />
          <button onClick={handleUpload}>Upload</button>
        </Grid>
      </Grid>

      {selectedPhoto && (
        <div>
          {/* <h2>Preview:</h2> */}
          {/* <img
            src={URL.createObjectURL(selectedPhoto)}
            alt="Selected"
            style={{ maxWidth: "100%" }}
          /> */}
          {/* <Avatar
            sx={{
              width: 150,
              height: 150,
              border: "2px solid blue",
              // alignContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt="Profile pic"
            src={URL.createObjectURL(selectedPhoto)}
          /> */}
        </div>
      )}
    </div>
  );
};

export default UploadPhoto;
