import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

import bgTest from "../../assets/images/testimonials-bg.jpg";
import nasiraTest from "../../assets/images/nasira-sheikh-test1.jpg";
import maqsoodTest from "../../assets/images/maqsood-ali-test.jpg";
import habibaTest from "../../assets/images/umme-habiba-test.jpg";

const testData = [
  {
    id: 1,
    photo: nasiraTest,
    name: "nasira sheikh",
    description:
      "My both kids are learning to read Quran with proper pronunciation and I am very satisfied. Teachers are very professional and dedicated. I would highly recommend them.",
  },
  {
    id: 2,
    photo: maqsoodTest,
    name: "maqsood ali",
    description:
      "Excellent teachers that keep your child engaged as they learn Quran and Islamic studies. Customer service is also top notch. Highly Appreciated & Recommended!",
  },
  {
    id: 3,
    photo: habibaTest,
    name: "umme habiba",
    description:
      "My son is 5years of age and absolutely loves his classes. His Muallimah is amazing (May Allah SWT grant her barakah Ameen!). He looks forward to his classes which is great! Masha Allah!",
  },
];

const CarouselItem = (props) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      position="relative"
      marginTop={{ xs: 12, md: 16 }}
      paddingX={{ xs: 2, sm: 3, md: 2 }}
      marginBottom={3}
      sx={{
        border: {
          xs: "4px solid #49bcac",
          sm: "3px solid #49bcac",
          md: "2px solid #49bcac",
        },
        borderRadius: { xs: 4, md: 3, lg: 2 },
      }}
    >
      <Grid item position="absolute" sx={{ top: 0, marginTop: -10 }}>
        <img
          src={props.data.photo}
          alt={props.data.name}
          style={{
            width: "115px",
            borderRadius: "50%",
            border: "5px solid #49bcac",
          }}
        />
      </Grid>

      <Grid item marginTop={6}>
        <Typography
          variant="h6"
          textTransform="uppercase"
          fontWeight={600}
          color="white"
        >
          {props.data.name}
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          variant="subtitle1"
          color="white"
          textAlign="center"
          marginBottom={6}
        >
          "{props.data.description}"
        </Typography>
      </Grid>
    </Grid>
  );
};

const OurTestimonials = () => {
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
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h6" color="success.main" fontWeight={600}>
              What Our
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h3" color="white" fontWeight={600}>
              Donators Say
            </Typography>
          </Grid>
        </Grid>

        <Grid paddingX={{ xs: 3, md: 12, lg: 28 }}>
          <Carousel
            navButtonsProps={{
              style: {
                display: "none",
              },
            }}
            indicatorIconButtonProps={{
              "&:hover": { color: "success.main !important" },
            }}
            activeIndicatorIconButtonProps={{
              color: "success.main !important",
            }}
          >
            {testData.map((item) => (
              <Grid container paddingX={5}>
                <CarouselItem data={item} />
              </Grid>
            ))}
          </Carousel>
        </Grid>
      </Box>
    </>
  );
};

export default OurTestimonials;
