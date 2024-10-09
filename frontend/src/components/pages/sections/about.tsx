import React from "react";

import AppButton from "~/components/button";
import SectionContainer from "~/components/section-container";
import { KeyPointIcon } from "~/components/svgs";
import Text from "~/components/text";

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

const AboutUsSection = () => {
  return (
    <SectionContainer loading={false}>
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
    </SectionContainer>
  );
};

export default AboutUsSection;
