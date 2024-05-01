import React, { useState } from "react";

function Base64UploadImage() {
  const [image, setImage] = useState([]);
  const [allImages, setAllImages] = useState([]);
  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    console.log(e.target.files);
    if (e.target.files[0].size >= 1500000) {
      window.alert("Size must be less than 1.5 MB");
    } else {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        console.log(reader.result);
        setImage(reader.result);
      };
      reader.onerror = () => {
        console.log("ERROR");
      };
    }
  }
  const handleOnClick = async () => {
    const data = {
      image: image,
    };

    const response = await fetch("http://localhost:5000/api/v1/upload-img", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const r = await response.json();
    console.log(r);
  };
  const FetchAllImages = async () => {
    console.log("FETCHED");
    const response = await fetch("http://localhost:5000/api/v1/get-all-img", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const r = await response.json();
    console.log(r);
    setAllImages(r);
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={convertToBase64} />
      <img height={100} width={100} alt="No Uploads" src={image} />
      <br />
      <button onClick={handleOnClick}>Upload Image</button>
      <br />
      <button onClick={FetchAllImages}>See all Uploaded images</button>
      <br />
      {allImages &&
        allImages.map((i, idx) => {
          return (
            <img
              height={100}
              width={100}
              alt="No Uploads"
              key={idx}
              src={i.imgb64}
            />
          );
        })}

      {/*         
                 <CardContent>
                            <Grid item xs={12}>
                              {i.photo ? (
                                // <Avatar
                                //   sx={{
                                //     width: 150,
                                //     height: 150,
                                //     border: "2px solid blue",
                                //     // alignContent: "center",
                                //     marginLeft: "auto",
                                //     marginRight: "auto",
                                //     objectFit: "contain",
                                //     overflow: "hidden",
                                //   }}
                                //   alt="Profile pic"
                                //   src={i.photo}
                                // />
                                <img
                                  height={80}
                                  width={80}
                                  alt="Logo"
                                  src={i.photo}
                                  style={{
                                    borderRadius: "50%", // Make the image circular
                                    objectFit: "cover", // Fit the image properly
                                    border: "0.5px solid black",
                                    overflow: "hidden", // Ensure no overflow
                                  }}
                                />
                              ) : (
                                // <img
                                //   height={100}
                                //   width={100}
                                //   alt="Logo"
                                //   src={i.photo}
                                //   style={{
                                //     borderRadius: "50%", // Make the image circular
                                //     objectFit: "cover", // Fit the image properly
                                //     border: "0.5px solid black",
                                //   }}
                                // />
                                <>
                                  <Avatar
                                    sx={{
                                      width: 80,
                                      height: 80,
                                      border: "0.5px solid black",
                                      // alignContent: "center",
                                      marginLeft: "auto",
                                      marginRight: "auto",
                                    }}
                                    alt="D"
                                  >
                                    {
                                      <BusinessCenterIcon
                                        sx={{
                                          width: 60,
                                          height: 60,
                                          // border: "2px solid blue",
                                          // alignContent: "center",
                                          marginLeft: "auto",
                                          marginRight: "auto",
                                        }}
                                      />
                                    }
                                  </Avatar>
                                </>
                              )}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                              <Typography
                                variant="h5"
                                component="div"
                                align="left"
                              >
                                {i.CompanyName}
                              </Typography>
                              <Typography
                                sx={{ mb: 1.5 }}
                                color="text.secondary"
                                align="left"
                              >
                                {i.JobProfile}, {i.JobLocation}
                              </Typography>
                            </Grid>

                            <Typography variant="body2" align="left">
                              Eligibility CPI: {i.mincpi}
                              <br />
                              CTC: {i.ctc} LPA
                              <br />
                              Eligible Branches:
                              {/* {i.BranchAllowed.map((x) => {
                                return <>x</>;
                              // })} 
                              <br />
                              Last Date to Apply: {i.LastDatetoApply}
                            </Typography>
                          </CardContent> */}

      {/* admin card
                          
                          
                              <CardContent>
            {/* Image 
            <Grid container spacing={2}>
              <Grid item>
                {photo ? (
                  // <Avatar
                  //   sx={{
                  //     width: 150,
                  //     height: 150,
                  //     border: "2px solid blue",
                  //     // alignContent: "center",
                  //     marginLeft: "auto",
                  //     marginRight: "auto",
                  //     objectFit: "contain",
                  //     overflow: "hidden",
                  //   }}
                  //   alt="Profile pic"
                  //   src={photo}
                  // />
                  <img
                    height={80}
                    width={80}
                    alt="Logo"
                    src={photo}
                    style={{
                      borderRadius: "50%", // Make the image circular
                      objectFit: "cover", // Fit the image properly
                      border: "0.5px solid black",
                      overflow: "hidden", // Ensure no overflow
                    }}
                  />
                ) : (
                  // <img
                  //   height={100}
                  //   width={100}
                  //   alt="Logo"
                  //   src={photo}
                  //   style={{
                  //     borderRadius: "50%", // Make the image circular
                  //     objectFit: "cover", // Fit the image properly
                  //     border: "0.5px solid black",
                  //   }}
                  // />
                  <>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        border: "0.5px solid black",
                        // alignContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      alt="D"
                    >
                      {
                        <BusinessCenterIcon
                          sx={{
                            width: 60,
                            height: 60,
                            // border: "2px solid blue",
                            // alignContent: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        />
                      }
                    </Avatar>
                  </>
                )}
              </Grid>
            </Grid>

            <Grid item xs={12} sm={9}>
              <Typography variant="h5" component="div" align="left">
                {companyName}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary" align="left">
                {JobProfile}, {JobLocation}
              </Typography>
            </Grid>

            <Typography variant="body2" align="left">
              CTC: {ctc} LPA
            </Typography>

            <Typography variant="body2" align="left">
              <br />
              <strong>Applied Candidates:</strong>
              <FormGroup>
                {AppliedCandidates.map((candidate, idx) => (
                  <>
                    <FormControlLabel
                      key={idx}
                      control={<Checkbox key={idx} />}
                      label={`${candidate["FirstName"]} ${candidate["LastName"]}`}
                      onChange={(e) => {
                        handleonClick(e, candidate.id);
                        console.log(candidate);
                      }}
                    />
                  </>
                ))}
              </FormGroup>
            </Typography>

            <Typography variant="body2" align="left">
              {/* Add more details as needed 
            </Typography>
          </CardContent>

                          
                          
                          
                          */}
    </div>
  );
}

export default Base64UploadImage;
