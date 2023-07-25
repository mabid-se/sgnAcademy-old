import { Box, Grid, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ArrowForward } from "@mui/icons-material";

const thirtyPackData = [
  {
    id: 1,
    name: "package 1",
    price: 20,
    det: [
      "2 classes / weekly",
      "8 classes / monthly",
      "30 - minutes each class",
    ],
  },

  {
    id: 2,
    name: "package 2",
    price: 30,
    det: [
      "3 classes / weekly",
      "12 classes / monthly",
      "30 - minutes each class",
    ],
  },
  {
    id: 3,
    name: "package 3",
    price: 40,
    det: [
      "4 classes / weekly",
      "16 classes / monthly",
      "30 - minutes each class",
    ],
  },
  {
    id: 4,
    name: "package 4",
    price: 50,
    det: [
      "5 classes / weekly",
      "20 classes / monthly",
      "30 - minutes each class",
    ],
  },
];

const fortyFivePackData = [
  {
    id: 1,
    name: "package 1",
    price: 30,
    det: [
      "2 classes / weekly",
      "8 classes / monthly",
      "45 - minutes each class",
    ],
  },

  {
    id: 2,
    name: "package 2",
    price: 45,
    det: [
      "3 classes / weekly",
      "12 classes / monthly",
      "45 - minutes each class",
    ],
  },
  {
    id: 3,
    name: "package 3",
    price: 60,
    det: [
      "4 classes / weekly",
      "16 classes / monthly",
      "45 - minutes each class",
    ],
  },
  {
    id: 4,
    name: "package 4",
    price: 75,
    det: [
      "5 classes / weekly",
      "20 classes / monthly",
      "45 - minutes each class",
    ],
  },
];

const sixtyPackData = [
  {
    id: 1,
    name: "package 1",
    price: 40,
    det: [
      "2 classes / weekly",
      "8 classes / monthly",
      "60 - minutes each class",
    ],
  },

  {
    id: 2,
    name: "package 2",
    price: 60,
    det: [
      "3 classes / weekly",
      "12 classes / monthly",
      "60 - minutes each class",
    ],
  },
  {
    id: 3,
    name: "package 3",
    price: 80,
    det: [
      "4 classes / weekly",
      "16 classes / monthly",
      "60 - minutes each class",
    ],
  },
  {
    id: 4,
    name: "package 4",
    price: 100,
    det: [
      "5 classes / weekly",
      "20 classes / monthly",
      "60 - minutes each class",
    ],
  },
];

const OurPricing = () => {
  const [isActive, setIsActive] = useState({ id: "divOne" });
  useEffect(() => {
    // console.log(isActive);
  }, [isActive]);

  const hideShowDiv = (e) => {
    setIsActive({ id: e.target.id });
  };

  return (
    <>
      <Box paddingY={12}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          paddingX={{ xs: 3, sm: 5, md: 10 }}
        >
          <Grid item>
            <Typography variant="h3" fontWeight={600} color="success.main">
              Our Pricing
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="subtitle1"
              textAlign="center"
              color="lightBlack"
            >
              We do not require anyone to pay if they wish to learn the Quran
              online from us. We
              <br />
              are always willing to teach them. We charge for our services since
              we have to pay teachers' wages
              <br /> and operational expenses. Therefore those who can afford it
              can pay us.
            </Typography>
          </Grid>

          <Grid item marginTop={4}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                paddingX: 1,
                paddingY: 1,
                backgroundColor: "black",
                borderRadius: 15,
              }}
            >
              <Grid item>
                <Button
                  variant="text"
                  size="large"
                  disableRipple
                  id="divOne"
                  onClick={(e) => {
                    hideShowDiv(e);
                  }}
                  sx={
                    isActive.id === "divOne"
                      ? {
                          textTransform: "capitalize",
                          fontWeight: 600,
                          letterSpacing: 1,
                          borderRadius: 15,
                          color: "white",
                          backgroundColor: "success.main",
                          backgroundRadius: "50%",
                        }
                      : {
                          textTransform: "capitalize",
                          color: "white",
                          backgroundColor: "transparent",
                        }
                  }
                >
                  30 Minutes
                </Button>
              </Grid>

              <Grid item>
                <Button
                  variant="text"
                  size="large"
                  disableRipple
                  id="divTwo"
                  onClick={(e) => {
                    hideShowDiv(e);
                  }}
                  marginX={1}
                  sx={
                    isActive.id === "divTwo"
                      ? {
                          textTransform: "capitalize",
                          fontWeight: 600,
                          letterSpacing: 1,
                          borderRadius: 15,
                          color: "white",
                          backgroundColor: "success.main",
                          backgroundRadius: "50%",
                        }
                      : {
                          textTransform: "capitalize",
                          color: "white",
                          backgroundColor: "transparent",
                        }
                  }
                >
                  45 Minutes
                </Button>
              </Grid>

              <Grid item>
                <Button
                  variant="text"
                  size="large"
                  disableRipple
                  id="divThree"
                  onClick={(e) => {
                    hideShowDiv(e);
                  }}
                  sx={
                    isActive.id === "divThree"
                      ? {
                          textTransform: "capitalize",
                          fontWeight: 600,
                          letterSpacing: 1,
                          borderRadius: 15,
                          color: "white",
                          backgroundColor: "success.main",
                          backgroundRadius: "50%",
                        }
                      : {
                          textTransform: "capitalize",
                          color: "white",
                          backgroundColor: "transparent",
                        }
                  }
                >
                  60 Minutes
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* --- packages --- */}
          <div
            style={
              isActive.id === "divOne"
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <Grid item marginTop={6}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                paddingX={{ xs: 1, sm: 5, md: 10 }}
              >
                {thirtyPackData.map((packItem) => (
                  <Grid item md={3} key={packItem.id}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={1}
                      sx={{
                        padding: 3,
                        border: 2,
                        borderRadius: 2,
                        color: "black",
                        "&:hover": {
                          color: "white !important",
                          backgroundColor: "success.main",
                        },
                      }}
                    >
                      {/* --- package name --- */}
                      <Grid item>
                        <Typography
                          variant="h4"
                          sx={{
                            textTransform: "capitalize",
                            fontWeight: 500,
                            textAlign: "center",
                            color: "inherit",
                          }}
                        >
                          {packItem.name}
                        </Typography>
                      </Grid>

                      {/* --- package price --- */}
                      <Grid item marginTop={1}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            textAlign: "center",
                            color: "inherit",
                          }}
                        >
                          ${packItem.price}
                          <span style={{ fontSize: "17px", fontWeight: 600 }}>
                            &nbsp;/mo
                          </span>
                        </Typography>
                      </Grid>

                      {/* --- package details --- */}
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            marginLeft: "-30px",
                            color: "inherit",
                          }}
                        >
                          <ul>
                            {packItem.det.map((detItem) => (
                              <li>{detItem}</li>
                            ))}
                          </ul>
                        </Typography>
                      </Grid>

                      {/* --- book trial button --- */}
                      <Grid item>
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
                          Book a trial
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>

          <div
            style={
              isActive.id === "divTwo"
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <Grid item marginTop={6}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                paddingX={{ xs: 1, sm: 5, md: 10 }}
              >
                {fortyFivePackData.map((packItem) => (
                  <Grid item md={3} key={packItem.id}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={1}
                      sx={{
                        padding: 3,
                        border: 2,
                        borderRadius: 2,
                        color: "black",
                        "&:hover": {
                          color: "white !important",
                          backgroundColor: "success.main",
                        },
                      }}
                    >
                      {/* --- package name --- */}
                      <Grid item>
                        <Typography
                          variant="h4"
                          sx={{
                            textTransform: "capitalize",
                            fontWeight: 500,
                            textAlign: "center",
                            color: "inherit",
                          }}
                        >
                          {packItem.name}
                        </Typography>
                      </Grid>

                      {/* --- package price --- */}
                      <Grid item marginTop={1}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            textAlign: "center",
                            color: "inherit",
                          }}
                        >
                          ${packItem.price}
                          <span style={{ fontSize: "17px", fontWeight: 600 }}>
                            &nbsp;/mo
                          </span>
                        </Typography>
                      </Grid>

                      {/* --- package details --- */}
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            marginLeft: "-30px",
                            color: "inherit",
                          }}
                        >
                          <ul>
                            {packItem.det.map((detItem) => (
                              <li>{detItem}</li>
                            ))}
                          </ul>
                        </Typography>
                      </Grid>

                      {/* --- book trial button --- */}
                      <Grid item>
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
                          Book a trial
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>

          <div
            style={
              isActive.id === "divThree"
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <Grid item marginTop={6}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                paddingX={{ xs: 1, sm: 5, md: 10 }}
              >
                {sixtyPackData.map((packItem) => (
                  <Grid item md={3} key={packItem.id}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={1}
                      sx={{
                        padding: 3,
                        border: 2,
                        borderRadius: 2,
                        color: "black",
                        "&:hover": {
                          color: "white !important",
                          backgroundColor: "success.main",
                        },
                      }}
                    >
                      {/* --- package name --- */}
                      <Grid item>
                        <Typography
                          variant="h4"
                          sx={{
                            textTransform: "capitalize",
                            fontWeight: 500,
                            textAlign: "center",
                            color: "inherit",
                          }}
                        >
                          {packItem.name}
                        </Typography>
                      </Grid>

                      {/* --- package price --- */}
                      <Grid item marginTop={1}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            textAlign: "center",
                            color: "inherit",
                          }}
                        >
                          ${packItem.price}
                          <span style={{ fontSize: "17px", fontWeight: 600 }}>
                            &nbsp;/mo
                          </span>
                        </Typography>
                      </Grid>

                      {/* --- package details --- */}
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            marginLeft: "-30px",
                            color: "inherit",
                          }}
                        >
                          <ul>
                            {packItem.det.map((detItem) => (
                              <li>{detItem}</li>
                            ))}
                          </ul>
                        </Typography>
                      </Grid>

                      {/* --- book trial button --- */}
                      <Grid item>
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
                          Book a trial
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Box>
    </>
  );
};

export default OurPricing;
