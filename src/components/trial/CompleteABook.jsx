import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import trialStdImg from "../../assets/images/trial-student.png";

const CompleteABook = () => {
  return (
    <>
      <Box paddingY={{ xs: 8, lg: 6 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          paddingX={{ xs: 4, sm: 6, md: 12 }}
        >
          <Grid item md={5}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography variant="h3" color="success.main" fontWeight={600}>
                  Want to know how long time will take to compelete a book?
                </Typography>
              </Grid>
              <Grid item marginTop={{ xs: 3, md: 4 }}>
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
                >
                  View More
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={7} marginTop={{ xs: 6, md: 0 }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={trialStdImg}
                alt="trial-student-bg"
                style={{ width: "75%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CompleteABook;
