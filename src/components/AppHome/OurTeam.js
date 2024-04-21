import React from "react";
import Avatar from "@mui/material/Avatar";
import {
  Container,
  Grid,
  Paper,
  Typography,
  CardActionArea,
  CardMedia,
  Button,
  CardContent,
  CardActions,
} from "@mui/material";
import Card from "@mui/material/Card";
import { OpenInNew } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Lottie from "react-lottie";
import animationData1 from "../../animations/one.json";
import animationData2 from "../../animations/two.json";
import animationData3 from "../../animations/three.json";
import animationData5 from "../../animations/five.json";
import animationData6 from "../../animations/six.json";
import animationData7 from "../../animations/seven.json";

const OurTeam = () => {
  return (
    <Container>
      <Grid container spacing={2} marginBottom={10}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom>
            Our Team <Diversity3Icon />
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={6} sx={{ p: 3 }} align={"center"}>
            <Grid container spacing={2} justifyContent="center">
              {/* <Grid item xs={12}>
                <Typography variant="h6" align="left" color="primary">
                  Our Team
                </Typography>
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <br />

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      paddingTop="20px"
                      paddingBottom="5px"
                    >
                      Industry Liaison Officer (TPO VJTI)
                      <hr
                        style={{
                          borderColor: "rgba(0, 0, 0, 0.6)",
                          margin: "10px",
                        }}
                      />
                    </Typography>
                    <div
                      style={{
                        padding: "16px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image="https://media.licdn.com/dms/image/C5103AQHe0-DIDdpXJg/profile-displayphoto-shrink_400_400/0/1537113765976?e=1718236800&v=beta&t=w6I57wYcMPHp7KOduqko8pVGKaN8qpKJriC2yqc1jZA"
                        alt="Swapnil Sir"
                        style={{ objectFit: "cover" }}
                      />
                      {/* <Lottie
                        options={{
                          loop: true,
                          autoplay: true,
                          animationData: animationData1,
                        }}
                        height={200} // Adjust the height as needed
                        width={"100%"} // Make the animation responsive
                      /> */}
                    </div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Mr. Swapnil Shinde
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://www.linkedin.com/in/swapnil-shinde-41995a170/"
                      target="_blank"
                    >
                      <OpenInNew />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <br />

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      paddingTop="20px"
                      paddingBottom="5px"
                    >
                      Prof. Incharge (TPO VJTI)
                      <hr
                        style={{
                          borderColor: "rgba(0, 0, 0, 0.6)",
                          margin: "10px",
                        }}
                      />
                    </Typography>
                    <div
                      style={{
                        padding: "16px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image="https://i1.rgstatic.net/ii/profile.image/518814028374016-1500706311519_Q512/Nitin-Gulhane.jpg"
                        alt="Nitin Sir"
                        style={{ objectFit: "cover" }}
                      />
                      {/* <Lottie
                        options={{
                          loop: true,
                          autoplay: true,
                          animationData: animationData2,
                        }}
                        height={200} // Adjust the height as needed
                        width={"100%"} // Make the animation responsive
                      /> */}
                    </div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Dr. Nitin Gulhane
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://www.linkedin.com/in/nitin-gulhane-4036558a/"
                      target="_blank"
                    >
                      <OpenInNew />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>

            {/* Next */}

            <Grid item xs={12}>
              <Typography
                variant="h5"
                align="left"
                color="primary"
                style={{
                  borderBottom: "2px solid black",
                  marginBottom: "10px",
                }}
              >
                <br />
                <br />
                TPO Coordinators
              </Typography>
            </Grid>

            {/* TPO COORDINATORS */}

            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <br />
                {/* ///////////////////////////////// */}
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <Grid item>
                    {/* <Avatar
                      alt="Travis Howard"
                      src="https://placehold.co/600x400"
                      sx={{ width: 150, height: 150 }}
                    /> */}
                    <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationData3,
                      }}
                      height={200} // Adjust the height as needed
                      width={"100%"} // Make the animation responsive
                    />
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      align="center"
                    >
                      Mr. Suhas Parab
                    </Typography>
                  </Grid>
                  <Grid item>
                    {/* <Avatar
                      alt="Travis Howard"
                      src="https://placehold.co/600x400"
                      sx={{ width: 150, height: 150 }}
                    /> */}
                    <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationData5,
                      }}
                      height={200} // Adjust the height as needed
                      width={"100%"} // Make the animation responsive
                    />
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      align="center"
                    >
                      Mr. Yogesh Tambe
                    </Typography>
                  </Grid>
                </Stack>
                {/* ///////////////////////////////// */}
              </Grid>
            </Grid>

            {/* Student TPO Cr's */}

            <Grid item xs={12}>
              <Typography
                variant="h5"
                align="left"
                color="primary"
                style={{
                  borderBottom: "2px solid black",
                  marginBottom: "10px",
                }}
              >
                <br />
                {/* <br /> */}
                Student TPO Cr's
              </Typography>
            </Grid>

            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <br />
                {/* ///////////////////////////////// */}
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <Grid item>
                    {/* <Avatar
                      alt="Travis Howard"
                      src="https://media.licdn.com/dms/image/D4D03AQEOUuEgOZ2u-A/profile-displayphoto-shrink_800_800/0/1692934433876?e=1718236800&v=beta&t=jS_jQwOapAJJOqkoiaLf_D6UyaEizjsF_YgaKfUPrmU"
                      sx={{ width: 150, height: 150 }}
                    /> */}
                    <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationData6,
                      }}
                      height={200} // Adjust the height as needed
                      width={"100%"} // Make the animation responsive
                    />
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      align="center"
                    >
                      Sidharth Varier
                    </Typography>
                  </Grid>
                  <Grid item>
                    {/* <Avatar
                      alt="Travis Howard"
                      src="https://media.licdn.com/dms/image/D5603AQGc3PW0knKe4A/profile-displayphoto-shrink_800_800/0/1688032935603?e=1718236800&v=beta&t=hIxJxHvDcncHh7r0YV3ET9SXFaIpZD0-a6l89AMP7lc"
                      sx={{ width: 150, height: 150 }}
                    /> */}
                    <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationData7,
                      }}
                      height={200} // Adjust the height as needed
                      width={"100%"} // Make the animation responsive
                    />
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      align="center"
                    >
                      Kimaya Mutha
                    </Typography>
                  </Grid>
                </Stack>

                {/* ///////////////////////////////// */}
              </Grid>
            </Grid>
            {/* ///////////////////////////// */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurTeam;
