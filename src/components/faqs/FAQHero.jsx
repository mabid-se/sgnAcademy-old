import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";

import Bismillah from "../../assets/images/Bismillah.png";
import dividShape from "../../assets/images/divider-shape.png";
import heroBg from "../../assets/images/testimonials-bg.jpg";

const FAQHero = () => {
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
          spacing={3}
        >
          <Grid item>
            <img src={Bismillah} alt="Bismillah Shareef" />
          </Grid>

          <Grid item marginTop={3}>
            <Typography variant="h4" color="white">
              We’ve got you covered with FAQs
              {/* Common questions when considering SGN Academy */}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h2"
              color="white"
              textAlign="center"
              fontWeight={700}
              letterSpacing={1}
            >
              Have a question?
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
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FAQHero;
