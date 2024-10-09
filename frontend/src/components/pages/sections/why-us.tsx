import React from "react";

import { Text, Triangle, WhyUsIcon1, WhyUsIcon2, WhyUsIcon3 } from "~/components";
import SectionContainer from "~/components/section-container";

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

const WhyUsSection = () => {
  return (
    <SectionContainer loading={false}>
      <div className="relative pt-32">
        <div className="absolute top-[-300px] left-0 right-0 z-[-1]">
          <Triangle />
        </div>
        <div className="bg-[#F4F4F4] pb-32">
          <div className="container px-10 mx-auto">
            <div className="mx-auto mt-10">
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
    </SectionContainer>
  );
};

export default WhyUsSection;
