import React from "react";
import { Typography, Grid, Paper, Container } from "@mui/material";
import VJTI from "../../assets/images/VJTI.jpg";

const AboutVjti = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2} marginBottom={10}>
          <Paper elevation={6} sx={{ p: 3 }} align={"center"}>
            <img
              // src="https://vjti.ac.in/wp-content/uploads/2021/07/VJTI-LandingPageV3.jpg"
              src={VJTI}
              alt="VJTI"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                marginBottom: "30px",
              }}
            />
            <Typography
              variant="h5"
              align="left"
              color="primary"
              style={{
                borderBottom: "2px solid black",
                marginBottom: "15px",
                maringtop: "40px",
              }}
            >
              <br />
              Vision & Mission
            </Typography>

            <Typography variant="body1" paragraph align="left" marginTop={3}>
              Established in 1887 as Victoria Jubilee Technical Institute, VJTI
              Mumbai has pioneered India’s Engineering education, research and
              training ecosystem and has been shifting itself from a training
              institute to capacity building institute with focus on research,
              innovation, and technology for society.
            </Typography>

            <Typography
              variant="h5"
              align="left"
              style={{
                borderBottom: "2px solid black",
                marginBottom: "10px",
                marginTop: "40px",
              }}
            >
              Vision
            </Typography>

            <Typography variant="body1" paragraph align="left">
              <ul>
                <li>
                  To establish global leadership in the field of Technology and
                  develop competent human resources for providing service to
                  society
                </li>
              </ul>
            </Typography>

            <Typography
              variant="h5"
              align="left"
              style={{
                borderBottom: "2px solid black",
                marginBottom: "10px",
                marginTop: "40px",
              }}
            >
              Mission
            </Typography>

            <Typography variant="body1" paragraph align="left">
              <ul>
                <li>
                  To provide students with comprehensive knowledge of principles
                  of engineering with a multi-disciplinary approach
                </li>
                <li>
                  To create an intellectually stimulating environment for
                  research, scholarship, creativity, innovation and professional
                  activity.
                </li>
                <li>
                  To foster relationship with other leading institutes of
                  learning and research, alumni and industries in order to
                  contribute to National and International development.
                </li>
              </ul>
            </Typography>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutVjti;
