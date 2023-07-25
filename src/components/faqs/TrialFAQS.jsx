import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FAQsComp from "../FAQsComp";

const trialFaqList = [
  {
    qNo: "faq1",
    question: "How to request a free trial class?",
    answer:
      "You can fill out a trial form or you can contact us via WhatsApp & call.",
  },
  {
    qNo: "faq2",
    question: "Is there a fee for a trial class?",
    answer: "No, we don’t charge for a trial class.",
  },
  {
    qNo: "faq3",
    question: "How many trial classes does SGN Academy offer?",
    answer:
      "SGN Academy offers 5 days trial. If our customer isn’t satisfied, we offer more than one trial, but if it is satisfied, they can be registered for regular classes.",
  },
  {
    qNo: "faq4",
    question: "What is the duration of trial classes?",
    answer: "The duration of the trial class is 30 minutes.",
  },
];

const TrialFAQs = () => {
  return (
    <>
      <Box paddingY={6}>
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
                Trial FAQs
              </Typography>
            </Grid>
            <Grid item>
              {trialFaqList.map((faqItem) => (
                <FAQsComp data={faqItem} />
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TrialFAQs;
