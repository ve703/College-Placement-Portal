import React from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WorkIcon from "@mui/icons-material/Work";

function AlumniCard({ profile }) {
  const {
    degree,
    name,
    jobTitle,
    company,
    Branch,
    passOutYear,
    mobileNumber,
    email,
    userProfilePic,
    socialMediaLinks,
  } = profile;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }} elevation={5}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px", // Adjust top margin as needed
          }}
        >
          <CardMedia
            component="img"
            src={userProfilePic}
            alt={`${name}'s profile picture`}
            style={{
              width: "120px", // Adjust the size as per your requirement
              height: "120px", // Adjust the size as per your requirement
              borderRadius: "50%", // To make it a circle
              objectFit: "cover", // To prevent image distortion
            }}
          />
        </Box>
        <CardContent sx={{ textAlign: "justify" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Degree:</strong> {degree}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Job Type:</strong> {jobTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Company:</strong> {company}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Branch:</strong> {Branch}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>PassOut Year:</strong> {passOutYear}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Mobile:</strong> {mobileNumber}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Email:</strong> {email}
          </Typography>
        </CardContent>
        <CardContent sx={{ textAlign: "center", position: "relative" }}>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            {Object.entries(socialMediaLinks).map(([platform, link]) => (
              <Link
                key={platform}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform === "linkedin" && <LinkedInIcon />}
                {platform === "twitter" && <TwitterIcon />}
              </Link>
            ))}
            <Button
              variant="contained"
              color="primary"
              startIcon={<WorkIcon />}
              href="#"
              sx={{ position: "absolute", right: "1rem" }}
              target="_blank"
            >
              Get Experience
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default AlumniCard;
