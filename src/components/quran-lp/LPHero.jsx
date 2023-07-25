import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";

import Bismillah from "../../assets/images/Bismillah.png";
import dividShape from "../../assets/images/divider-shape.png";
import heroBg from "../../assets/images/lp-hero-bg.jpg";

const LPHeroSection = (props) => {
  const { pricing } = props;
  return (
    <>
      <Box
        sx={{
          paddingY: 14,
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
          spacing={2}
        >
          <Grid item>
            <img src={Bismillah} alt="Bismillah Shareef" />
          </Grid>
          <Grid item marginTop={3}>
            <Typography variant="h4" color="white">
              Know the Real
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" color="white">
              Tafseer of Qur'an
            </Typography>
          </Grid>
          <Grid item>
            <img src={dividShape} alt="hero-divider" />
          </Grid>
          <Grid item>
            <Typography variant="h6" color="white" textAlign="center">
              When things are too hard to handle, retreat
              <br /> & count your blessings instead
            </Typography>
          </Grid>
          <Grid item marginTop={4}>
            <Button
              disableRipple
              onClick={() => pricing()}
              sx={{
                border: 2,
                borderColor: "white",
                paddingY: 1,
                paddingX: 3,
                color: "white",
                "&:hover": {
                  borderColor: "success.main",
                  backgroundColor: "success.main",
                  fontWeight: 600,
                  letterSpacing: 1,
                },
              }}
            >
              see packages
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LPHeroSection;
