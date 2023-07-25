import { ArrowForward } from "@mui/icons-material";
import { Box, Grid, Typography, Button, Divider } from "@mui/material";
import React, { useState } from "react";

import QuranShareef from "../../assets/images/Quran-Shareef.png";

const OurServices = () => {
  const [card1hover, setcard1hover] = useState(false);
  const [card2hover, setcard2hover] = useState(false);
  const [card3hover, setcard3hover] = useState(false);
  const [card4hover, setcard4hover] = useState(false);

  const card1MouseEnter = () => {
    setcard1hover(true);
  };

  const card1MouseLeave = () => {
    setcard1hover(false);
  };

  const card2MouseEnter = () => {
    setcard2hover(true);
  };

  const card2MouseLeave = () => {
    setcard2hover(false);
  };

  const card3MouseEnter = () => {
    setcard3hover(true);
  };

  const card3MouseLeave = () => {
    setcard3hover(false);
  };

  const card4MouseEnter = () => {
    setcard4hover(true);
  };

  const card4MouseLeave = () => {
    setcard4hover(false);
  };

  return (
    <>
      <Box paddingY={{ xs: 5, md: 12 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          paddingX={{ xs: 4, md: 10 }}
        >
          <Grid item>
            <Typography
              variant="h6"
              color="blue.main"
              fontWeight={600}
              textAlign="center"
            >
              Our Services
            </Typography>

            <Typography
              variant="h3"
              color="success.main"
              fontWeight={600}
              textAlign="center"
            >
              Serving Humanity
            </Typography>
          </Grid>

          <Grid item>
            <Divider
              sx={{
                borderWidth: "5px",
                color: "#49bcac",
              }}
            />
          </Grid>

          <Grid item marginTop={6}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
              paddingX={{ xs: 3, sm: 5, md: 10 }}
            >
              <Grid item md={3}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  padding={3}
                  sx={{
                    border: card1hover ? 0 : 2,
                    borderRadius: 3,
                    backgroundColor: card1hover ? "#49bcac" : "",
                    color: card1hover ? "white !important" : "",
                  }}
                  onMouseEnter={card1MouseEnter}
                  onMouseLeave={card1MouseLeave}
                >
                  <Grid item>
                    <img
                      src={QuranShareef}
                      alt="Quran-Learning"
                      style={{
                        width: "95%",
                      }}
                    />
                  </Grid>

                  <Grid item marginTop={1}>
                    <Typography variant="h6" fontWeight={600}>
                      Qur'an Learning
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="subtitle2" textAlign="center">
                      Learning Quran facility dolor sit amet, consectetur
                      adipisicing elit, sed do eiu
                    </Typography>
                  </Grid>

                  <Grid item marginTop={2}>
                    <Button
                      disableRipple
                      endIcon={<ArrowForward />}
                      sx={{
                        color: "inherit",
                        paddingX: 2,
                        paddingY: 1,
                        "&:hover": {
                          color: "white",
                          fontWeight: 600,
                          letterSpacing: 1,
                          border: 2,
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={3}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  padding={3}
                  sx={{
                    border: 2,
                    borderRadius: 3,
                    backgroundColor: card2hover ? "#49bcac" : "",
                    color: card2hover ? "white !important" : "",
                  }}
                  onMouseEnter={card2MouseEnter}
                  onMouseLeave={card2MouseLeave}
                >
                  <Grid item>
                    <img
                      src={QuranShareef}
                      alt="Quran-Learning"
                      style={{
                        width: "95%",
                      }}
                    />
                  </Grid>

                  <Grid item marginTop={1}>
                    <Typography variant="h6" fontWeight={600}>
                      Funeral Service
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="subtitle2" textAlign="center">
                      Funeral facility dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod te
                    </Typography>
                  </Grid>

                  <Grid item marginTop={2}>
                    <Button
                      disableRipple
                      endIcon={<ArrowForward />}
                      sx={{
                        color: "inherit",
                        paddingX: 2,
                        paddingY: 1,
                        "&:hover": {
                          color: "white",
                          fontWeight: 600,
                          letterSpacing: 1,
                          border: 2,
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={3}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  padding={3}
                  sx={{
                    border: 2,
                    borderRadius: 3,
                    backgroundColor: card3hover ? "#49bcac" : "",
                    color: card3hover ? "white !important" : "",
                  }}
                  onMouseEnter={card3MouseEnter}
                  onMouseLeave={card3MouseLeave}
                >
                  <Grid item>
                    <img
                      src={QuranShareef}
                      alt="Quran-Learning"
                      style={{
                        width: "95%",
                      }}
                    />
                  </Grid>

                  <Grid item marginTop={1}>
                    <Typography variant="h6" fontWeight={600}>
                      Mosque Renovation
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="subtitle2" textAlign="center">
                      Mosque rebuild facility dol sit amet, consectetur
                      adipisicing elit, sed do eiusm
                    </Typography>
                  </Grid>

                  <Grid item marginTop={2}>
                    <Button
                      disableRipple
                      endIcon={<ArrowForward />}
                      sx={{
                        color: "inherit",
                        paddingX: 2,
                        paddingY: 1,
                        "&:hover": {
                          color: "white",
                          fontWeight: 600,
                          letterSpacing: 1,
                          border: 2,
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={3}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  padding={3}
                  sx={{
                    border: 2,
                    borderRadius: 2,
                    backgroundColor: card4hover ? "#49bcac" : "",
                    color: card4hover ? "white !important" : "",
                  }}
                  onMouseEnter={card4MouseEnter}
                  onMouseLeave={card4MouseLeave}
                >
                  <Grid item>
                    <img
                      src={QuranShareef}
                      alt="Quran-Learning"
                      style={{
                        width: "95%",
                      }}
                    />
                  </Grid>

                  <Grid item marginTop={1}>
                    <Typography variant="h6" fontWeight={600}>
                      Helping Poor
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="subtitle2" textAlign="center">
                      Poor rehab facility dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod
                    </Typography>
                  </Grid>

                  <Grid item marginTop={2}>
                    <Button
                      disableRipple
                      endIcon={<ArrowForward />}
                      sx={{
                        color: "inherit",
                        paddingX: 2,
                        paddingY: 1,
                        "&:hover": {
                          color: "white",
                          fontWeight: 600,
                          letterSpacing: 1,
                          border: 2,
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OurServices;
