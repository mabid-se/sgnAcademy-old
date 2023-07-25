import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FAQsComp from "../FAQsComp";

const pricingFaqList = [
  {
    qNo: "faq1",
    question: "Do you charge per month or per lecture?",
    answer:
      "We charge per month, and there is no specific lecture fee because we pay teachers monthly regardless of whether the student is present or absent.",
  },
  {
    qNo: "faq2",
    question: "How do I pay my fee?",
    answer:
      "We have several options for receiving a fee. You may pay directly on the website with a credit card, or you can send us money using Western Union, Ria Exchange, Bank Account, or PayPal.",
  },
  {
    qNo: "faq3",
    question: "Do I have to give credit card information to anyone?",
    answer:
      "No. You are not forced to provide credit card information to anyone. You will make payments online in a completely safe environment through our website's online payment method.",
  },
  {
    qNo: "faq4",
    question: "Is there any discount for multiple students?",
    answer:
      "Yes, we provide discount offers for those students who enroll same family members or refer other students. Contact us for more details.",
  },
];

const PricingFAQs = () => {
  return (
    <>
      <Box paddingTop={6} paddingBottom={12}>
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
                Pricing FAQs
              </Typography>
            </Grid>
            <Grid item>
              {pricingFaqList.map((faqItem) => (
                <FAQsComp data={faqItem} />
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PricingFAQs;
