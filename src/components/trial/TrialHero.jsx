import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";

import Bismillah from "../../assets/images/Bismillah.png";

import heroBg from "../../assets/images/testimonials-bg.jpg";

const TrialHero = () => {
  return (
    <>
      <Box
        sx={{
          paddingY: 14,
          paddingX: { xs: 4, md: 0 },
          background: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <img src={Bismillah} alt="Bismillah Shareef" />
          </Grid>

          <Grid item marginTop={3}>
            <Typography variant="h5" color="white">
              Book a trial and get a respnse soon.
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h3"
              color="white"
              textAlign="center"
              fontWeight={700}
              letterSpacing={1}
            >
              Start Your Trial Class With Us!
            </Typography>
          </Grid>

          <Grid item marginTop={3}>
            <Button
              disableRipple
              onClick={""}
              sx={{
                color: "white",
                border: 2,
                borderColor: "white",
                paddingY: 1,
                paddingX: 3,
                "&:hover": {
                  borderColor: "success.main",
                  backgroundColor: "success.main",
                  fontWeight: 600,
                  letterSpacing: 1,
                },
              }}
            >
              Book Trial
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TrialHero;
