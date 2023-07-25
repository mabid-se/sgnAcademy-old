import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
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

const TrialFAQsSect = () => {
  return (
    <>
      <Box paddingY={{ xs: 8, lg: 6 }}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              color: "success.main",
              fontWeight: 600,
              textAlign: "center ",
            }}
          >
            Top questions about trial class!
          </Typography>

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
              paddingX: { xs: 2, sm: 6, md: 2 },
              marginTop: { xs: 2, lg: 3 },
            }}
          >
            <Grid item>
              {trialFaqList.map((faqItem) => (
                <FAQsComp data={faqItem} />
              ))}
            </Grid>
            <Grid item marginTop={2}>
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
                endIcon={<ArrowForward />}
              >
                View More
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TrialFAQsSect;
