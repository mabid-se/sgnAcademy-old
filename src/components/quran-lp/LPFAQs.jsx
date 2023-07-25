import { ArrowForward, Phone } from "@mui/icons-material";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import FAQsComp from "../FAQsComp";

const faqList = [
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

const LPFAQs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box paddingY={10} paddingX={{ xs: 4, md: 16 }}>
        <Typography
          variant="h3"
          marginY={3}
          color="success.main"
          textAlign="center"
          fontWeight={600}
        >
          Find the answers you might need!
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={{ xs: 3, md: 5 }}
          marginTop={{ xs: 2, md: 3 }}
        >
          <Grid item xs={12} md={8} paddingX={{ xs: 3, md: 5 }}>
            <Grid
              container
              direciton="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item>
                {faqList.map((faqItem) => (
                  <FAQsComp data={faqItem} />
                ))}
              </Grid>

              <Grid item marginTop={{ xs: 2, md: 3 }}>
                <Button
                  disableRipple
                  onClick={() => navigate("/faqs")}
                  sx={{
                    color: "black",
                    border: 2,
                    borderColor: "black",
                    paddingY: 1,
                    paddingX: 3,
                    top: { xs: "50%", md: 0 },
                    left: { xs: "50%", md: 0 },
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
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            marginTop={{ xs: 3, md: 0 }}
            paddingX={{ xs: 3, md: 6 }}
          >
            <Paper elevation={5} sx={{ padding: { xs: 3, md: 5 } }}>
              <Grid
                container
                direction="column"
                justifyContent="space-between !important"
                alignItems="center"
                spacing={1}
                paddingY={1}
              >
                <Grid item>
                  <Typography variant="h6" color="success" fontWeight={600}>
                    Do you need help?
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    variant="subtitle1"
                    color="lightBlack"
                    textAlign="center"
                    marginY={2}
                  >
                    You can contact to our manager to arrange a class and ask
                    question.
                  </Typography>
                </Grid>

                <Grid item>
                  <Button
                    disableRipple
                    onClick={""}
                    sx={{
                      color: "black",
                      border: 2,
                      borderColor: "black",
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
                    startIcon={<Phone />}
                  >
                    call us
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LPFAQs;
