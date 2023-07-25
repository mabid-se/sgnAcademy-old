import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

import bgTest from "../../assets/images/book-trial-bg6.png";

import BookTrialStepper from "../BookTrialStepper";

const BookTrial = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgTest})`,
          backgroundSize: "cover",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
        paddingY={{ xs: 8, md: 12 }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          paddingX={{ xs: 4, sm: 6, md: 12 }}
        >
          <Grid item md={7} paddingX={{ md: 4 }}>
            <Grid
              container
              direcition="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography variant="h2" color="white" fontWeight={600}>
                  Start today, It's easy
                </Typography>
              </Grid>
              <Grid
                item
                sx={{ paddingX: { md: 6 }, marginTop: { xs: 2, md: 4 } }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    textAlign: { xs: "left", md: "justify" },
                  }}
                >
                  If you want to schedule a trial class there's 24/7 email,
                  chat, and phone support from a Managers.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            md={5}
            sx={{
              width: "100%",
              paddingX: { md: 4 },
              marginTop: { xs: 6, md: 0 },
            }}
          >
            <Paper elevation={6} sx={{ paddingY: 6, paddingX: 4 }}>
              <BookTrialStepper />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BookTrial;
