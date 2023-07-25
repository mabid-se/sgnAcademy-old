import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const TrialClassPurpose = () => {
  return (
    <>
      <Box
        paddingY={{ xs: 10, md: 12 }}
        //  paddingX: { xs: 4, sm: 6, md: 12 },
        // paddingX={{ xs: 6, lg: 8 }}
        paddingX={{ xs: 4, sm: 6, md: 12 }}
      >
        <Grid
          container
          dirction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item md={6}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
              paddingX={{ lg: 6 }}
            >
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{
                    color: "success.main",
                    fontWeight: 600,
                    textAlign: "left !important",
                  }}
                >
                  Trial Class Purpose
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" textAlign="justify">
                  SGN Academy always provides solutions to ensure client
                  happiness. The major purpose of a trial class is to assess
                  student's capacities, learning skills, and behaviors. All of
                  this is essential in order to assign the best teacher for a
                  student.
                </Typography>
              </Grid>
              <Grid item marginTop={2}>
                <Button
                  disableRipple
                  //   onClick={() => navigate("/faqs")}
                  sx={{
                    color: "black",
                    border: 2,
                    borderColor: "black",
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
                  Book Trial
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} paddingX={{ lg: 4 }} marginTop={{ xs: 4, sm: 0 }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item>
                <Paper elevation={6}>
                  <Grid
                    container
                    dirction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    paddingY={{ xs: 2, lg: 4 }}
                    paddingX={{ xs: 4, lg: 6 }}
                  >
                    <Grid item>
                      <Typography variant="h4" fontWeight={600}>
                        Explore Teaching Method
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" textAlign="justify">
                        SGN Academy always provides solutions to ensure client
                        happiness. The major purpose of a trial class is
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        disableRipple
                        //   onClick={() => navigate("/faqs")}
                        sx={{
                          color: "black",
                          border: 2,
                          borderColor: "black",
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
                      >
                        Learn More
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item marginTop={{ xs: 2, md: 4 }}>
                <Paper elevation={6}>
                  <Grid
                    container
                    dirction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    paddingY={{ xs: 2, lg: 4 }}
                    paddingX={{ xs: 4, lg: 6 }}
                  >
                    <Grid item>
                      <Typography variant="h4" fontWeight={600}>
                        Explore Growth Timeline
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" textAlign="justify">
                        SGN Academy always provides solutions to ensure client
                        happiness. The major purpose of a trial class is
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        disableRipple
                        //   onClick={() => navigate("/faqs")}
                        sx={{
                          color: "black",
                          border: 2,
                          borderColor: "black",
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
    </>
  );
};

export default TrialClassPurpose;
