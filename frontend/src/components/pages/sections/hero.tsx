import React from "react";

import AboutUsSection from "./about";
import BlogSection from "./blog";
import ClientsLogoSection from "./clients-logo";
import GetInTouchSection from "./get-in-touch";
import NewsLetterSection from "./newsletter";
import NumbersSection from "./numbers";
import TestimonialsSection from "./testimonials";
import WhyUsSection from "./why-us";
import {
  AppButton,
  AppImage,
  LeftHero,
  RightHero,
  SectionContainer,
  Text
} from "~/components";
import { useGetHeroContent } from "~/hooks";
import { extractAssetUrl } from "~/lib/utils";

const HeroSection = () => {
  const { hero, loading } = useGetHeroContent();
  return (
    <SectionContainer loading={loading}>
      {hero?.__typename ? (
        <div
          className="relative w-full h-[65vh] mb-12 s650:mb-64 mx-auto"
          style={{
            width: "100%",
            borderRadius: "0px 0px 30% 50%",
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #E2E9F0 67%, #F1F5F8 99.99%, #5481AA 100%)"
          }}
        >
          <div className="absolute left-0 top-[15%] h-full z-0">
            <LeftHero />
          </div>
          <div className="absolute right-0 top-[-10%] h-full z-0">
            <RightHero />
          </div>
          <div className="container px-10 mx-auto !z-10">
            <div className="!z-10 w-60 mx-auto mt-10">
              <AppImage src={extractAssetUrl(hero?.logo)} />
            </div>
            <div className="!z-10 max-w-[70%] mx-auto mt-10">
              <Text
                text="Transforming Project Concepts into Opportunities"
                isHeading={true}
                className="!z-10 text-center text-7xl text-primary"
              />
            </div>
            <div className="!z-10 max-w-[50%] mx-auto mt-14">
              <Text
                text="Building Stronger Futures Through Collaborative Project Management and Investment for Sustainable and Profitable Growth"
                className="!z-10 text-center text-xl text-title"
              />
            </div>
            <div className="!z-10 w-fit mx-auto mt-14 flex items-center gap-4">
              <AppButton text="Find Projects" />
              <AppButton text="Create Project" />
            </div>
          </div>
        </div>
      ) : undefined}
      {/*** ------------------------------- this sections is not for the hero ---------------------------------- ***/}
      <AboutUsSection />
      <WhyUsSection />
      <ClientsLogoSection />
      <TestimonialsSection />
      <NumbersSection />
      <BlogSection />
      <GetInTouchSection />
      <NewsLetterSection />
    </SectionContainer>
  );
};

export default HeroSection;
