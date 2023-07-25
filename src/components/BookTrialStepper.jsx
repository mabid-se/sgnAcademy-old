import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const steps = ["General", "Student", "Message"];

const BookTrialStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [language, setLanguage] = useState("");
  const [course, setCourse] = useState("");

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const hanldeLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step
            key={label}
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: "success.main", // circle color (COMPLETED)
              },
              "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                {
                  color: "black", // Just text label (COMPLETED)
                },
              "& .MuiStepLabel-root .Mui-active": {
                color: "success.main", // circle color (ACTIVE)
              },
              "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                {
                  color: "black", // Just text label (ACTIVE)
                },
              "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                fill: "white", // circle's number (ACTIVE)
              },
            }}
          >
            <StepLabel>
              <Typography variant="body1">{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginTop={2}
          >
            <Grid item marginTop={1}>
              <Typography variant="subtitle1" color="initial">
                Please provide correct information
              </Typography>
            </Grid>
            <Grid item width="100%" marginTop={2}>
              <FormControl fullWidth>
                {activeStep === 0 && (
                  <>
                    <TextField
                      variant="outlined"
                      id="name"
                      // error={nameError}
                      // value={name}
                      // onChange={(e) => handleChange(e, setName, setNameError)}
                      label="Your Name"
                      type="text"
                      // helperText={nameError ? "Name is required!" : ""}
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

                      sx={{ marginTop: 2 }}
                    />
                  </>
                )}

                {activeStep === 1 && (
                  <>
                    <TextField
                      variant="outlined"
                      id="name"
                      // error={nameError}
                      // value={name}
                      // onChange={(e) => handleChange(e, setName, setNameError)}
                      label="Your Name"
                      type="text"
                      // helperText={nameError ? "Name is required!" : ""}
                    />

                    <TextField
                      select
                      variant="outlined"
                      id="language"
                      label="Language"
                      value={language}
                      onChange={hanldeLanguageChange}
                      sx={{ marginTop: 2 }}
                    >
                      <MenuItem value="english">English</MenuItem>
                      <MenuItem value="urdu">Urdu</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </TextField>

                    <TextField
                      select
                      variant="outlined"
                      id="course"
                      label="Course"
                      value={course}
                      onChange={handleCourseChange}
                      sx={{ marginTop: 2 }}
                    >
                      <MenuItem value="Quran">Quran Course</MenuItem>
                      <MenuItem value="Islamic">Islamic Course</MenuItem>
                      <MenuItem value="Academic">Academic Course</MenuItem>
                    </TextField>
                  </>
                )}

                {activeStep === 2 && (
                  <>
                    <TextField
                      variant="outlined"
                      id="timezone"
                      // error={timezoneError}
                      // value={timezone}
                      // onChange={(e) => handleChange(e, setTimezone, setTimezoneError)}
                      label="Timezone"
                      type="text"
                      // helperText={nameError ? "Timezone is required!" : ""}
                    />
                    <TextField
                      variant="outlined"
                      id="message"
                      // error={messageError}
                      // value={message}
                      // onChange={(e) => handleChange(e, setMessage, setMessageError)}
                      label="Message"
                      type="text"
                      // helperText={nameError ? "Timezone is required!" : ""}
                      sx={{ marginTop: 2 }}
                    />
                  </>
                )}
              </FormControl>
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", flexDirection: "row", marginTop: 4 }}>
            <Button
              disableRipple
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{
                paddingY: 1,
                paddingX: 3,
                color: "black",
                border: 2,
                "&:hover": {
                  color: "white",
                  fontWeight: 600,
                  letterSpacing: 1,
                  backgroundColor: "success.main",
                },
              }}
              startIcon={<ArrowBack />}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === 0 || activeStep === 1 ? (
              <Button
                disableRipple
                endIcon={<ArrowForward />}
                onClick={handleNext}
                sx={{
                  paddingY: 1,
                  paddingX: 3,
                  color: "black",
                  border: 2,
                  "&:hover": {
                    color: "white",
                    fontWeight: 600,
                    letterSpacing: 1,
                    backgroundColor: "success.main",
                  },
                }}
              >
                Next
              </Button>
            ) : (
              <Button
                disableRipple
                sx={{
                  paddingY: 1,
                  paddingX: 3,
                  color: "black",
                  border: 2,
                  "&:hover": {
                    color: "white",
                    fontWeight: 600,
                    letterSpacing: 1,
                    backgroundColor: "success.main",
                  },
                }}
              >
                Finish
              </Button>
            )}
          </Box>
        </>
      </div>
    </Box>
  );
};

export default BookTrialStepper;
