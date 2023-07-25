import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { ArrowForward } from "@mui/icons-material";

import coursesQ from "../../assets/images/Quran-courses.jpg";
import coursesI from "../../assets/images/islamic-courses.jpg";
import coursesA from "../../assets/images/academic-courses.jpg";

import mdNoorani from "../../assets/images/noorani-qaida.png";
import mdQuran from "../../assets/images/quran-learning.png";

const LikeToExploreCourses = () => {
  return (
    <Box paddingY={{ md: 8 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item paddingX={{ xs: 1, md: 0 }}>
          <Typography
            variant="h3"
            color="success.main"
            fontWeight={600}
            textAlign="center"
          >
            Would you like to explore courses?
          </Typography>
        </Grid>

        <Grid item>
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems={{ xs: "center", md: "stretch" }}
            spacing={5}
            sx={{
              marginTop: { xs: 1, md: 4 },
              paddingX: { xs: 4, sm: 6, md: 12 },
            }}
          >
            <Grid item xs={12} md={4} display="flex">
              <Paper elevation={12}>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <img
                      src={coursesQ}
                      alt="Quran-coures"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item marginTop={2}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "black", fontWeight: 600 }}
                    >
                      Qur'an Courses
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      variant="body2"
                      sx={{
                        marginX: 4,
                        color: "lightBlack",
                        textAlign: "justify",
                      }}
                    >
                      We launched a smart interactive platform that offers
                      virtual Quran classes for all Ages. Register now, Select
                      your course, Pay your monthly fee & start to take our
                      online classes.
                    </Typography>
                  </Grid>

                  <Grid item marginTop={3} marginBottom={4}>
                    <Button
                      disableRipple
                      // onClick={() => navigate("/faqs")}
                      sx={{
                        color: "black",
                        border: 2,
                        paddingY: 1,
                        paddingX: 3,
                        "&:hover": {
                          color: "white",
                          borderColor: "success.main",
                          backgroundColor: "success.main",
                          fontWeight: 600,
                          letterSpacing: 1,
                        },
                      }}
                      endIcon={<ArrowForward />}
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} display="flex">
              <Paper elevation={12}>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <img
                      src={coursesI}
                      alt="Quran-coures"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item marginTop={2}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "black", fontWeight: 600 }}
                    >
                      Islamic Courses
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      sx={{
                        marginX: 4,
                        color: "lightBlack",
                        textAlign: "justify",
                      }}
                    >
                      We are offering more than thirty different Islamic courses
                      for Muslim sisters who can take admission from any corner
                      of the globe and attain Islamic knowledge.
                    </Typography>
                  </Grid>
                  <Grid item marginTop={3} marginBottom={4}>
                    <Button
                      disableRipple
                      // onClick={() => navigate("/faqs")}
                      sx={{
                        color: "black",
                        border: 2,
                        paddingY: 1,
                        paddingX: 3,
                        "&:hover": {
                          color: "white",
                          borderColor: "success.main",
                          backgroundColor: "success.main",
                          fontWeight: 600,
                          letterSpacing: 1,
                        },
                      }}
                      endIcon={<ArrowForward />}
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} display="flex">
              <Paper elevation={12}>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <img
                      src={coursesA}
                      alt="Quran-coures"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item marginTop={2}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "black", fontWeight: 600 }}
                    >
                      Academic Courses
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      variant="body2"
                      sx={{
                        marginX: 4,
                        color: "lightBlack",
                        textAlign: "justify",
                      }}
                    >
                      We offer academic subjects as well including, Math,
                      Islamiyat, Urdu, Science.
                    </Typography>
                  </Grid>

                  <Grid item marginTop={8} marginBottom={4}>
                    <Button
                      disableRipple
                      // onClick={() => navigate("/faqs")}
                      sx={{
                        color: "black",
                        border: 2,
                        paddingY: 1,
                        paddingX: 3,

                        "&:hover": {
                          color: "white",
                          borderColor: "success.main",
                          backgroundColor: "success.main",
                          fontWeight: 600,
                          letterSpacing: 1,
                        },
                      }}
                      endIcon={<ArrowForward />}
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LikeToExploreCourses;
