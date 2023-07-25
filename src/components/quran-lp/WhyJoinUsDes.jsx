import { Box, Typography, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";

const WhyJoinUsDes = () => {
  const [isActive, setIsActive] = useState({ id: "divOne" });
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  const hideShowDiv = (e) => {
    setIsActive({ id: e.target.id });
  };

  return (
    <>
      <Box paddingY={{ xs: 5, md: 8 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          paddingX={18}
        >
          <Grid item>
            <Typography
              variant="h3"
              sx={{
                color: "success.main",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Why Should Join Us?
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              sx={{
                color: "lightBlack",
                textAlign: "center",
                marginTop: 2,
              }}
            >
              Online Quran Academy is a rapidly expanding and beneficial
              learning resource for children and adults. And most people
              genuinely believe that learning the Quran online is appropriate.
              Thus they join and learn the Quran online.
              <br />
              Following a survey, we discovered why people quit the online Quran
              academy after registering, and we received several inquiries from
              clients.
            </Typography>
          </Grid>

          <Grid item marginTop={3}>
            <Paper elevation={8}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item md={4}>
                  <Paper elevation={6}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="stretch"
                    >
                      <Grid
                        item
                        paddingY={2}
                        paddingLeft={4}
                        sx={
                          isActive.id === "divOne"
                            ? {
                                cursor: "pointer",
                                color: "white",
                                backgroundColor: "success.main",
                                border: 2,
                                borderColor: "success.main",
                              }
                            : {
                                cursor: "pointer",
                                color: "black",
                                "&:hover": {
                                  color: "success.main",
                                },
                              }
                        }
                      >
                        <Typography
                          variant="h6"
                          id="divOne"
                          onClick={(e) => hideShowDiv(e)}
                          fontWeight={600}
                        >
                          Dedicated Teacher
                        </Typography>
                      </Grid>

                      <Grid
                        item
                        paddingY={2}
                        paddingLeft={4}
                        sx={
                          isActive.id === "divTwo"
                            ? {
                                cursor: "pointer",
                                color: "white",
                                backgroundColor: "success.main",
                                border: 2,
                                borderColor: "success.main",
                              }
                            : {
                                cursor: "pointer",
                                color: "black",
                                "&:hover": {
                                  color: "success.main",
                                },
                              }
                        }
                      >
                        <Typography
                          variant="h6"
                          id="divTwo"
                          onClick={(e) => hideShowDiv(e)}
                          fontWeight={600}
                        >
                          Teacher Absenteeism
                        </Typography>
                      </Grid>

                      <Grid
                        item
                        paddingY={2}
                        paddingLeft={4}
                        sx={
                          isActive.id === "divThree"
                            ? {
                                cursor: "pointer",
                                color: "white",
                                backgroundColor: "success.main",
                                border: 2,
                                borderColor: "success.main",
                              }
                            : {
                                cursor: "pointer",
                                color: "black",
                                "&:hover": {
                                  color: "success.main",
                                },
                              }
                        }
                      >
                        <Typography
                          variant="h6"
                          id="divThree"
                          onClick={(e) => hideShowDiv(e)}
                          fontWeight={600}
                        >
                          Learning Environment
                        </Typography>
                      </Grid>

                      <Grid
                        item
                        paddingY={2}
                        paddingLeft={4}
                        sx={
                          isActive.id === "divFour"
                            ? {
                                cursor: "pointer",
                                color: "white",
                                backgroundColor: "success.main",
                                border: 2,
                                borderColor: "success.main",
                              }
                            : {
                                cursor: "pointer",
                                color: "black",
                                "&:hover": {
                                  color: "success.main",
                                },
                              }
                        }
                      >
                        <Typography
                          variant="h6"
                          id="divFour"
                          onClick={(e) => hideShowDiv(e)}
                          fontWeight={600}
                        >
                          Monthly Assessment
                        </Typography>
                      </Grid>

                      <Grid
                        item
                        paddingY={2}
                        paddingLeft={4}
                        sx={
                          isActive.id === "divFive"
                            ? {
                                cursor: "pointer",
                                color: "white",
                                backgroundColor: "success.main",
                                border: 2,
                                borderColor: "success.main",
                              }
                            : {
                                cursor: "pointer",
                                color: "black",
                                "&:hover": {
                                  color: "success.main",
                                },
                              }
                        }
                      >
                        <Typography
                          variant="h6"
                          id="divFive"
                          onClick={(e) => hideShowDiv(e)}
                          fontWeight={600}
                        >
                          Flexible Timing
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                <Grid item md={8}>
                  <div
                    style={
                      isActive.id === "divOne"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <Grid
                      container
                      direciton="column"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      spacing={2}
                      paddingX={4}
                    >
                      <Grid item>
                        <Typography variant="h5" color="black">
                          Dedicated Teachers
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          The thing that affects the growth of any student the
                          most is the shuffling of teachers. Every teacher has a
                          unique way of teaching and what most academies do is
                          they keep changing the teachers due to a lack of staff
                          and training new teams but it leaves maleficent
                          effects on a student's progress.
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          At SGN academy, we dedicate a well-experienced teacher
                          to every student and check the quality of classes to
                          ensure constant learning for our students.
                        </Typography>
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
                    <Grid
                      container
                      direciton="column"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      spacing={2}
                      paddingX={4}
                    >
                      <Grid item>
                        <Typography variant="h5" color="black">
                          Teacher Absenteeism
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          Consistency is the key and it transforms average into
                          excellence but most of the academies lack it.
                          According to parents the teachers take days off and
                          academies neither take care of it nor provide a
                          substitute teacher.
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          We have teachers available 24/7 and they are committed
                          to their work and in case they have to take a day off
                          we have a lot of teachers available to fill their
                          shoes so that the student’s progress isn’t
                          compromised.
                        </Typography>
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
                    <Grid
                      container
                      direciton="column"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      spacing={2}
                      paddingX={4}
                    >
                      <Grid item>
                        <Typography variant="h5" color="black">
                          Friendly learning environment
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          A student can learn more effectively if the teacher is
                          encouraging him/her to give their best instead of
                          being rude and strict when they make mistakes. Online
                          academies don’t know what’s happening during the
                          classes and don’t ensure a friendly learning
                          environment.
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          At SGN academy all the classes are recorded and
                          parents have access to it. We use AI to measure the
                          quality of the class, the teacher’s behavior, and
                          every aspect of the class to provide a safe and
                          healthy learning environment.
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                  <div
                    style={
                      isActive.id === "divFour"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <Grid
                      container
                      direciton="column"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      spacing={2}
                      paddingX={4}
                    >
                      <Grid item>
                        <Typography variant="h5" color="black">
                          Monthly assessment of children’s progress
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          How do you measure the performance of your child when
                          there’s no analysis and estimate of how is the kid
                          reading and learning?
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          We conduct tests of our students on a weekly and
                          monthly basis to find out how is the student
                          performing and in which areas he/she require more
                          attention. We make reports of these assessments and
                          send them to parents every month.
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                  <div
                    style={
                      isActive.id === "divFive"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <Grid
                      container
                      direciton="column"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      spacing={2}
                      paddingX={4}
                    >
                      <Grid item>
                        <Typography variant="h5" color="black">
                          Flexible Timing OR Your desired timing and days
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          A lot of parents complain that the timing of class is
                          not appropriate for their kids, their kids come from
                          school, and then immediately it’s time for Quran class
                          which can be exhausting for kids. Many academies fail
                          in providing flexible time due to a lack of teachers
                          and time management.
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          At SGN we teach the Quran worldwide and have excess
                          teachers available all the time, we manage the time so
                          effectively that you can take the class when you’re
                          feasible and relaxed.
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WhyJoinUsDes;
