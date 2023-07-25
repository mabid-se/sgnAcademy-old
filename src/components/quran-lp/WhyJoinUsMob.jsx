import { useTheme } from "@emotion/react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  MobileStepper,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import React, { useState } from "react";

const steps = [
  {
    label: "Dedicated Teacher",
    descriptionOne:
      "The thing that affects the growth of any student the most is the shuffling of teachers. Every teacher has a unique way of teaching and what most academies do is they keep changing the teachers due to a lack of staff and training new teams but it leaves maleficent effects on a student's progress.",
    descriptionTwo:
      "At SGN academy, we dedicate a well-experienced teacher to every student and check the quality of classes to ensure constant learning for our students.",
  },
  {
    label: "Teacher Absenteeism",
    descriptionOne:
      "Consistency is the key and it transforms average into excellence but most of the academies lack it. According to parents the teachers take days off and academies neither take care of it nor provide a substitute teacher.",
    descriptionTwo:
      "We have teachers available 24/7 and they are committed to their work and in case they have to take a day off we have a lot of teachers available to fill their shoes so that the student’s progress isn’t compromised.",
  },
  {
    label: "Learning Environment",
    descriptionOne:
      "A student can learn more effectively if the teacher is encouraging him/her to give their best instead of being rude and strict when they make mistakes. Online academies don’t know what’s happening during the classes and don’t ensure a friendly learning environment.",
    descriptionTwo:
      "At SGN academy all the classes are recorded and parents have access to it. We use AI to measure the quality of the class, the teacher’s behavior, and every aspect of the class to provide a safe and healthy learning environment.",
  },
  {
    label: "Monthly Assessment",
    descriptionOne:
      "How do you measure the performance of your child when there’s no analysis and estimate of how is the kid reading and learning?",
    descriptionTwo:
      "We conduct tests of our students on a weekly and monthly basis to find out how is the student performing and in which areas he/she require more attention. We make reports of these assessments and send them to parents every month.",
  },
  {
    label: "Felxible Timing",
    descriptionOne:
      "A lot of parents complain that the timing of class is not appropriate for their kids, their kids come from school, and then immediately it’s time for Quran class which can be exhausting for kids. Many academies fail in providing flexible time due to a lack of teachers and time management.",
    descriptionTwo:
      "At SGN we teach the Quran worldwide and have excess teachers available all the time, we manage the time so effectively that you can take the class when you’re feasible and relaxed.",
  },
];
const WhyJoinUsMob = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Box paddingY={4} paddingX={4}>
        <Typography
          variant="h3"
          sx={{
            color: "success.main",
            fontWeight: 600,
            textAlign: "center",
            marginBottom: 7,
          }}
        >
          Why Join Us?
        </Typography>

        <Paper elevation={8}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            paddingY={3}
            paddingX={4}
          >
            <Grid item>
              <Typography
                variant="h5"
                sx={{
                  color: "black",
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                {steps[activeStep].label}
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1">
                {steps[activeStep].descriptionOne}
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1">
                {steps[activeStep].descriptionTwo}
              </Typography>
            </Grid>

            <Grid item>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                    endIcon={<KeyboardArrowRight />}
                    sx={{
                      color: "success.main",
                      fontWeight: 600,
                      border: 1,
                      paddingX: 1,
                      marginX: 2,
                    }}
                  >
                    Next
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    startIcon={<KeyboardArrowLeft />}
                    sx={{
                      color: "success.main",
                      fontWeight: 600,
                      border: 1,
                      paddingX: 1,
                      marginX: 2,
                    }}
                  >
                    Back
                  </Button>
                }
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default WhyJoinUsMob;
