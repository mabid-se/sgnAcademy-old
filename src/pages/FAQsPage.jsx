import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import FAQHero from "../components/faqs/FAQHero";
import GeneralFAQs from "../components/faqs/GeneralFAQs";
import PricingFAQS from "../components/faqs/PricingFAQS";
import TrialFAQs from "../components/faqs/TrialFAQS";
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";

const FAQsPage = () => {
  return (
    <>
      <MainNavbar />
      <FAQHero />
      <GeneralFAQs />
      <TrialFAQs />
      <PricingFAQS />
      <MainFooter />
    </>
  );
};

export default FAQsPage;
