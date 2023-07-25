import React from "react";
import MainNavbar from "../components/MainNavbar";
import TrialHero from "../components/trial/TrialHero";
import TrialClassPurpose from "../components/trial/TrialClassPurpose";
import ExploreCourses from "../components/quran-lp/ExploreCourses";
import TrialFAQsSect from "../components/trial/TrialFAQsSect";
import MainFooter from "../components/MainFooter";
import LikeToExploreCourses from "../components/trial/LikeToExploreCourses";
import CompleteABook from "../components/trial/CompleteABook";
import BookTrial from "../components/trial/BookTrial";

const TrialPage = () => {
  return (
    <>
      <MainNavbar />
      <TrialHero />
      <TrialClassPurpose />
      <LikeToExploreCourses />
      <TrialFAQsSect />
      <BookTrial />
      <CompleteABook />
      <MainFooter />
    </>
  );
};

export default TrialPage;
