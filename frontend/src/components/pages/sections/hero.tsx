import React from "react";

import {
  AppButton,
  AppImage,
  ClientsLogo,
  KeyPointIcon,
  LeftHero,
  RightHero,
  SectionContainer,
  Text,
  Triangle,
  WhyUsIcon1,
  WhyUsIcon2,
  WhyUsIcon3
} from "~/components";
import { useGetHeroContent } from "~/hooks";
import { extractAssetUrl } from "~/lib/utils";

const keyPoints = [
  {
    title: "Comprehensive Project Management",
    description:
      "Offering project auditing, resource allocation, and milestone tracking to ensure efficient execution."
  },
  {
    title: "Global Investment Platform:",
    description:
      "Facilitating connections between developers and investors across various industries such as energy, infrastructure, and more."
  },
  {
    title: "Transparency & Trust",
    description:
      "Acting as an independent auditor, we ensure clear communication and mutual trust between stakeholders."
  },
  {
    title: "Expert Consulting Services",
    description:
      "Providing strategic guidance from project inception to completion, helping projects meet goals on time and within budget."
  },
  {
    title: "Sustainable Growth Focus",
    description:
      "Dedicated to supporting projects that promote environmental and social sustainability, aligning with global development goals."
  }
];

const whyUs = [
  {
    icon: WhyUsIcon1,
    title: "Expert Guidance",
    description:
      "Benefit from comprehensive consulting services that guide your project from concept to completion, ensuring all milestones are met."
  },
  {
    icon: WhyUsIcon2,
    title: "Transparency & Trust",
    description:
      "Our independent auditing services build trust between investors and developers, creating a reliable environment for partnerships."
  },
  {
    icon: WhyUsIcon3,
    title: "Diverse Opportunities",
    description:
      "Access a wide range of projects across multiple industries, giving you unique investment opportunities tailored to your interests and goals."
  }
];

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

      <div>
        <div className="container px-10 mx-auto">
          <div className="flex items-center justify-between relative -top-20">
            <div className="w-[45%]">
              <Text text="Who We Are" className="text-sm text-primary" />
              <Text
                text="About Nordic PPM Solutions"
                isHeading={true}
                className="text-3xl text-primary my-3"
              />
              <Text text="Nordic PPM Solutions is a platform that connects developers with investors for sustainable project development. It offers a transparent and efficient ecosystem for businesses to thrive. They serve various industries and provide project consulting and investment tools to empower developers and investors." />
              <AppButton text="Learn More" isPrimary={true} className="mt-5" />
            </div>
            <div className="w-[35%] bg-white">
              <div
                className="rounded-md p-8"
                style={{
                  boxShadow: "1px 2px 32.2px rgba(0, 0, 0, 0.25)"
                }}
              >
                <Text
                  text="Key Points About Us"
                  isHeading={true}
                  className="text-primary mb-5"
                />

                {keyPoints.map((item, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex items-center gap-4 mb-1">
                      <KeyPointIcon />
                      <Text text={item.title} className="text-primary" />
                    </div>
                    <Text text={item.description} className="text-base" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-32">
        <div className="absolute top-[-300px] left-0 right-0 z-[-1]">
          <Triangle />
        </div>
        <div className="bg-[#F4F4F4] pb-32">
          <div className="container px-10 mx-auto">
            <div className="mx-auto">
              <Text text="why choose us" className="text-center text-sm text-primary" />
              <Text
                text="Discover What Sets Us Apart"
                isHeading={true}
                className="text-center text-3xl text-primary my-3"
              />
              <Text
                text="Your Trusted Partner in Project Development and Investment Success"
                className="w-[450px] mx-auto text-center text-base"
              />
            </div>
            <div className="flex items-center gap-14 mt-12">
              {whyUs.map((item, index) => (
                <div
                  key={index}
                  className="w-1/3 bg-white rounded-md p-8 border border-[#f4f4f4]"
                >
                  <item.icon />
                  <Text text={item.title} className="text-primary mb-5 mt-8" />
                  <Text text={item.description} className="text-base" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container flex justify-center mx-auto">
        <ClientsLogo />
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
