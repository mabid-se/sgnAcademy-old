import { Grid } from "@mui/material";
import React, { useRef } from "react";
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";
import ExploreCourses from "../components/quran-lp/ExploreCourses";
import HistoryOfCenter from "../components/quran-lp/HistoryOfCenter";
import LPFAQs from "../components/quran-lp/LPFAQs";
import LPHero from "../components/quran-lp/LPHero";
import OurPricing from "../components/quran-lp/OurPricing";
import OurServices from "../components/quran-lp/OurServices";
import OurTestimonials from "../components/quran-lp/OurTestimonials";
import WhyJoinUsDes from "../components/quran-lp/WhyJoinUsDes";
import WhyJoinUsMob from "../components/quran-lp/WhyJoinUsMob";

const QuranLP = () => {
  const about = useRef();
  const scrollAbout = (e) => {
    e.current.scrollIntoView();
  };
  const aboutSection = () => {
    scrollAbout(about);
  };

  const pricing = useRef();
  const scrollPricing = (e) => {
    e.current.scrollIntoView();
  };
  const pricingSection = () => {
    scrollPricing(pricing);
  };

  const courses = useRef();
  const scrollCourses = (e) => {
    e.current.scrollIntoView();
  };
  const coursesSection = () => {
    scrollCourses(courses);
  };

  return (
    <>
      <MainNavbar
        about={aboutSection}
        pricing={pricingSection}
        courses={coursesSection}
      />

      <LPHero pricing={pricingSection} />

      <div ref={about}>
        <HistoryOfCenter />
      </div>

      <div ref={courses}>
        <ExploreCourses />
      </div>

      <Grid sx={{ display: { xs: "none", md: "block" } }}>
        <WhyJoinUsDes />
      </Grid>

      <Grid sx={{ display: { xs: "block", md: "none" } }}>
        <WhyJoinUsMob />
      </Grid>

      <OurServices />

      <OurTestimonials />

      <div ref={pricing}>
        <OurPricing />
      </div>

      <LPFAQs />

      <MainFooter />
    </>
  );
};

export default QuranLP;
