import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FAQsComp from "../FAQsComp";

const genFaqList = [
  {
    qNo: "faq1",
    question: "How do I get started?",
    answer:
      "Fill out the form on the website's home page, or you may contact us directly via Whatsapp.",
  },
  {
    qNo: "faq2",
    question: "Is there a female teacher available to teach female students?",
    answer: "Yes, female teachers are available for female students.",
  },
  {
    qNo: "faq3",
    question: "Do we need some kind of material for learning online?",
    answer:
      "No, You don’t need any kind of material for learning online. We have digital copies of the courses and other stuff. We will teach you through screen sharing. So you don’t need to buy anything.",
  },
  {
    qNo: "faq4",
    question: "Do you charge per month or per lecture?",
    answer:
      "We charge per month, and there is no specific lecture fee because we pay teachers monthly regardless of whether the student is present or absent.",
  },
];

const GeneralFAQs = () => {
  return (
    <>
      <Box paddingTop={12} paddingBottom={6}>
        <Container>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            paddingX={{ xs: 3, md: 0 }}
          >
            <Grid item>
              <Typography variant="h3" color="success.main" fontWeight={600}>
                General FAQs
              </Typography>
            </Grid>
            <Grid item>
              {genFaqList.map((faqItem) => (
                <FAQsComp data={faqItem} />
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default GeneralFAQs;
