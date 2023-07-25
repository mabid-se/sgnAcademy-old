import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";

import sgnLogo from "../assets/images/logo.png";
import fb from "../assets/images/Facebook.png";
import ig from "../assets/images/Instagram.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/LinkedIn.png";

const MainFooter = () => {
  const useLinks = ["about us", "courses", "pricing", "donate us"];
  const expLinks = [
    "teaching method",
    "growth timeline",
    "pricing",
    "take a trial",
  ];

  return (
    <>
      <Box>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
          >
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              sx={{ paddingX: { xs: 4, lg: 0 } }}
            >
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography component="a" sx={{ cursor: "pointer" }}>
                    <img src={sgnLogo} alt="sgn logo" width="60%" />
                  </Typography>
                </Grid>

                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="space-evenly"
                  >
                    <Grid item mr={1}>
                      <Typography component="a" onClick={""}>
                        <img src={fb} alt="facebook" width="70%" />
                      </Typography>
                    </Grid>

                    <Grid item mx={1}>
                      <Typography component="a" onClick={""}>
                        <img src={ig} alt="instagram" width="70%" />
                      </Typography>
                    </Grid>

                    <Grid item mx={1}>
                      <Typography component="a" onClick={""}>
                        <img src={twitter} alt="twitter" width="70%" />
                      </Typography>
                    </Grid>

                    <Grid item ml={1}>
                      <Typography component="a" onClick={""}>
                        <img src={linkedin} alt="linkedin" width="70%" />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              sx={{ marginTop: { xs: 4, lg: 0 }, paddingX: { xs: 4, lg: 0 } }}
            >
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
              >
                <Grid item marginBottom={{ xs: 0, lg: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "primary",
                      fontWeight: 600,
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Useful Links
                  </Typography>
                </Grid>

                {useLinks.map((useItem) => (
                  <Grid item>
                    <Typography
                      component="a"
                      variant="body2"
                      onClick={""}
                      sx={{
                        fontWeight: 600,
                        textDecoration: "none",
                        textTransform: "capitalize",
                        cursor: "pointer",
                        color: "primary",
                        "&:hover": {
                          color: "success.main",
                          fontWeight: 700,
                          letterSpacing: 1,
                        },
                      }}
                    >
                      {useItem}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              sx={{ marginTop: { xs: 4, lg: 0 }, paddingX: { xs: 4, lg: 0 } }}
            >
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
              >
                <Grid item marginBottom={{ xs: 0, lg: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "primary",
                      fontWeight: 600,
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Explore
                  </Typography>
                </Grid>

                {expLinks.map((expItem) => (
                  <Grid item>
                    <Typography
                      component="a"
                      variant="body2"
                      onClick={""}
                      sx={{
                        fontWeight: 600,
                        textDecoration: "none",
                        textTransform: "capitalize",
                        cursor: "pointer",
                        color: "primary",
                        "&:hover": {
                          color: "success.main",
                          fontWeight: 700,
                          letterSpacing: 1,
                        },
                      }}
                    >
                      {expItem}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              sx={{ marginTop: { xs: 4, lg: 0 }, paddingX: { xs: 4, lg: 0 } }}
            >
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
              >
                <Grid item marginBottom={{ xs: 0, lg: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "primary",
                      fontWeight: 600,
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Contact Us
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    component="a"
                    variant="body2"
                    onClick={""}
                    sx={{
                      fontWeight: 600,
                      textDecoration: "none",
                      textTransform: "capitalize",
                      cursor: "pointer",
                      color: "primary",
                      "&:hover": {
                        color: "success.main",
                        fontWeight: 700,
                      },
                    }}
                  >
                    <span>icon here: </span>+1-646-927-1969
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    component="a"
                    variant="body2"
                    onClick={""}
                    sx={{
                      fontWeight: 600,
                      textDecoration: "none",
                      textTransform: "capitalize",
                      cursor: "pointer",
                      color: "primary",
                      "&:hover": {
                        color: "success.main",
                        fontWeight: 700,
                      },
                    }}
                  >
                    <span>icon here: </span>+1-646-927-1969
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    component="a"
                    variant="body2"
                    onClick={""}
                    sx={{
                      fontWeight: 600,
                      textDecoration: "none",
                      textTransform: "capitalize",
                      cursor: "pointer",
                      color: "primary",
                      "&:hover": {
                        color: "success.main",
                        fontWeight: 700,
                      },
                    }}
                  >
                    <span>icon here: </span>contact@sgnonlineacademy.com
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    component="a"
                    variant="body2"
                    onClick={""}
                    sx={{
                      fontWeight: 600,
                      textDecoration: "none",
                      textTransform: "capitalize",
                      cursor: "pointer",
                      color: "primary",
                      "&:hover": {
                        color: "success.main",
                        fontWeight: 700,
                      },
                    }}
                  >
                    <span>icon here: </span>SGN, Office# UG-34,35, Samamma Star
                    Mall, Gulberg Greens Islamabad
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider
            variant="middle"
            sx={{
              marginTop: 5,
              marginBottom: 2,
              background: "black",
              height: "2px",
            }}
          />

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            paddingBottom={2}
            spacing={1}
          >
            <Grid item>
              <Typography variant="body2" color="black" textAlign="center">
                All Rights Reserved © 2022 &nbsp;| &nbsp;&nbsp;
                <span
                  onClick={""}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  SGN Academy
                </span>
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="subtitle2"
                onClick={""}
                sx={{ color: "black", cursor: "pointer", fontWeight: 600 }}
              >
                Designed & Developed by SGN.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MainFooter;
