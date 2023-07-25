import {
  ArrowBackIos,
  Call,
  Close,
  LibraryBooks,
  ManageAccounts,
  MonetizationOn,
  Schedule,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const ModalContent = () => {
  const [mainBtns, setMainBtns] = useState(true);
  const [talkManagerContent, setTalkManagerContent] = useState(false);
  const [scheduleTrialContent, setScheduleTrialContent] = useState(false);

  const handleTalkManagerBtn = () => {
    setMainBtns(false);
    setTalkManagerContent(true);
  };

  const handleBackBtn = () => {
    setMainBtns(true);
    setTalkManagerContent(false);
    setScheduleTrialContent(false);
  };

  const handleScheduleTrialBtn = () => {
    setMainBtns(false);
    setScheduleTrialContent(true);
  };

  return (
    <>
      {/* --- Main Container --- */}
      {mainBtns && (
        <Box
          paddingY={{ xs: 6, md: 6 }}
          paddingX={{ xs: 3, sm: 5, md: 6 }}
          sx={{ width: { xs: "310px", sm: "100%" } }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            // paddingX={{ xs: 4, md: 0 }}
          >
            <Grid item marginX={{ xs: 3, md: 0 }}>
              <Typography variant="h5" fontWeight={600} textAlign="center">
                Get <span style={{ color: "#49bcac" }}>Started</span>
              </Typography>
              <Typography variant="body2" textAlign="center">
                What do you want?
              </Typography>
            </Grid>

            <Grid
              item
              onClick={handleTalkManagerBtn}
              marginTop={5}
              paddingX={{ xs: 4, sm: 6, md: 12 }}
              paddingY={{ xs: 1, md: 2 }}
              style={{ cursor: "pointer" }}
              sx={{
                color: "success.main",
                border: 2,
                borderRadius: { xs: 2, sm: 3, md: 4 },
                borderColor: "success.main",
                "&:hover": {
                  letterSpacing: 1,
                  color: "white",
                  backgroundColor: "success.main",
                },
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Typography variant="body1">
                    <ManageAccounts />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    letterSpacing={1}
                  >
                    Talk to Manager
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              onClick={handleScheduleTrialBtn}
              marginTop={3}
              paddingX={{ xs: 4, sm: 6, md: 12 }}
              paddingY={{ xs: 1, md: 2 }}
              style={{ cursor: "pointer" }}
              sx={{
                color: "success.main",
                border: 2,
                borderRadius: { xs: 2, sm: 3, md: 4 },
                borderColor: "success.main",
                "&:hover": {
                  letterSpacing: 1,
                  color: "white",
                  backgroundColor: "success.main",
                },
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Typography variant="body1">
                    <Schedule />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    letterSpacing={1}
                  >
                    Schedule a Trial
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              onClick={""}
              marginTop={3}
              paddingX={{ xs: 4, sm: 6, md: 12 }}
              paddingY={{ xs: 1, md: 2 }}
              style={{ cursor: "pointer" }}
              sx={{
                color: "success.main",
                border: 2,
                borderRadius: { xs: 2, sm: 3, md: 4 },
                borderColor: "success.main",
                "&:hover": {
                  letterSpacing: 1,
                  color: "white",
                  backgroundColor: "success.main",
                },
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Typography variant="body1">
                    <LibraryBooks />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    letterSpacing={1}
                  >
                    See Courses
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              onClick={""}
              marginTop={3}
              paddingX={{ xs: 4, sm: 6, md: 12 }}
              paddingY={{ xs: 1, md: 2 }}
              style={{ cursor: "pointer" }}
              sx={{
                color: "success.main",
                border: 2,
                borderRadius: { xs: 2, sm: 3, md: 4 },
                borderColor: "success.main",
                "&:hover": {
                  letterSpacing: 1,
                  color: "white",
                  backgroundColor: "success.main",
                },
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Typography variant="body1">
                    <MonetizationOn />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    letterSpacing={1}
                  >
                    See Pricing
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
      {/* --- Talk to Manager Container --- */}
      {talkManagerContent && (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ position: "relative", width: { xs: "310px", sm: "100%" } }}
        >
          <Grid
            item
            onClick={handleBackBtn}
            sx={{
              cursor: "pointer",
              position: "absolute",
              left: 7,
              top: 25,
            }}
          >
            <ArrowBackIos
              sx={{
                color: "black",
                "&:hover": {
                  color: "success.main",
                },
              }}
            />
          </Grid>

          <Grid item paddingX={{ xs: 6, sm: 12 }} paddingY={{ xs: 6, sm: 4 }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              padding={{ sm: 4, md: 6 }}
              marginX={{ sm: 3, md: 0 }}
            >
              <Grid item>
                <Typography variant="h5" fontWeight={600} textAlign="center">
                  <ManageAccounts /> Talk to
                  <span style={{ color: "#49bcac" }}> Manager</span>
                </Typography>
                <Typography variant="body2" textAlign="center">
                  Which is Best For You?
                </Typography>
              </Grid>

              <Grid
                item
                // onClick={""}
                marginTop={6}
                paddingX={{ xs: 3, sm: 6, md: 12 }}
                paddingY={{ xs: 2, sm: 2 }}
                style={{ cursor: "pointer" }}
                sx={{
                  color: "success.main",
                  border: 2,
                  borderRadius: { xs: 2, sm: 3, md: 4 },
                  borderColor: "success.main",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "success.main",
                  },
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Typography variant="body1">
                      <WhatsApp />
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      letterSpacing={1}
                    >
                      WhatsApp
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                // onClick={""}
                marginTop={4}
                paddingX={{ xs: 3, sm: 6, md: 12 }}
                paddingY={{ xs: 2, sm: 2 }}
                style={{ cursor: "pointer" }}
                sx={{
                  color: "success.main",
                  border: 2,
                  borderRadius: { xs: 2, sm: 3, md: 4 },
                  borderColor: "success.main",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "success.main",
                  },
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Typography variant="body1">
                      <Call />
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      letterSpacing={1}
                    >
                      Phone Call
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ cursor: "pointer", position: "absolute", right: 7, top: 25 }}
          >
            <Close
              sx={{
                color: "black",
                "&:hover": {
                  color: "success.main",
                },
              }}
            />
          </Grid>
        </Grid>
      )}
      {/* --- Schedule a Trial Container --- */}
      {scheduleTrialContent && (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ position: "relative", width: { xs: "310px", sm: "100%" } }}
        >
          <Grid
            item
            onClick={handleBackBtn}
            sx={{
              cursor: "pointer",
              position: "absolute",
              left: 7,
              top: 25,
            }}
          >
            <ArrowBackIos
              sx={{
                color: "black",
                "&:hover": {
                  color: "success.main",
                },
              }}
            />
          </Grid>

          <Grid item paddingX={{ xs: 2, md: 12 }} paddingY={{ xs: 6, sm: 4 }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              padding={{ xs: 2, sm: 3, md: 6 }}
            >
              <Grid item marginX={{ xs: 3, md: 6 }}>
                <Typography variant="h5" fontWeight={600} textAlign="center">
                  <ManageAccounts /> Book Your
                  <span style={{ color: "#49bcac" }}> Trial!</span>
                </Typography>
                <Typography variant="body2" textAlign="center">
                  Book a trial & get a response soon.
                </Typography>
              </Grid>
              <Grid item marginTop={6}>
                <FormControl fullWidth>
                  <TextField
                    variant="outlined"
                    id="name"
                    // error={nameError}
                    // value={name}
                    // onChange={(e) => handleChange(e, setName, setNameError)}
                    label="Your Name"
                    type="text"
                    // helperText={nameError ? "Name is required!" : ""}
                    size="large"
                  />
                  <TextField
                    variant="outlined"
                    id="country"
                    // error={countryError}
                    // value={country}
                    // onChange={(e) =>
                    //   handleChange(e, setCountry, setCountryError)
                    // }
                    label="Your Country/State"
                    type="text"
                    // helperText={countryError ? "Country is required!" : ""}
                    size="large"
                    sx={{ marginTop: 2 }}
                  />
                  <TextField
                    variant="outlined"
                    id="phone"
                    // error={phoneError}
                    // value={phone}
                    // onChange={(e) => handleChange(e, setPhone, setPhoneError)}
                    label="Your Contact Number"
                    type="text"
                    // helperText={phoneError ? "Phone is required!" : ""}
                    size="large"
                    sx={{ marginTop: 2 }}
                  />
                  <TextField
                    variant="outlined"
                    id="email"
                    // error={emailError}
                    // value={email}
                    // onChange={(e) => handleChange(e, setEmail, setEmailError)}
                    label="Your Email Address"
                    type="email"
                    // helperText={emailError ? "Email is required!" : ""}
                    size="large"
                    sx={{ marginTop: 2 }}
                  />

                  <Button
                    onClick={""}
                    sx={{
                      marginTop: 4,
                      paddingY: 1,
                      color: "success.main",
                      border: 2,
                      borderRadius: 1,
                      textTransform: "capitalize",
                      "&:hover": {
                        color: "white",
                        fontWeight: 600,
                        letterSpacing: 1,
                        backgroundColor: "success.main",
                      },
                    }}
                  >
                    book now
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ cursor: "pointer", position: "absolute", right: 7, top: 25 }}
          >
            <Close
              sx={{
                color: "black",
                "&:hover": {
                  color: "success.main",
                },
              }}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ModalContent;
