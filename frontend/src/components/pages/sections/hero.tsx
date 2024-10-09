import React from "react";

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
            borderRadius: "0px 0px 200px 220px",
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #E2E9F0 67%, #F1F5F8 99.99%, #5481AA 100%)"
          }}
        >
          <div className="absolute left-0 top-[20%] h-full">
            <LeftHero />
          </div>
          <div className="absolute right-0 top-[0] h-full">
            <RightHero />
          </div>
          <div className="container mx-auto">
            <div className="w-60 mx-auto mt-10">
              <AppImage src={extractAssetUrl(hero?.logo)} />
            </div>
            <div className="max-w-[70%] mx-auto mt-10">
              <Text
                text="Transforming Project Concepts into Opportunities"
                isHeading={true}
                className="text-center text-7xl text-primary"
              />
            </div>
            <div className="max-w-[50%] mx-auto mt-14">
              <Text
                text="Building Stronger Futures Through Collaborative Project Management and Investment for Sustainable and Profitable Growth"
                className="text-center text-xl"
              />
            </div>
            <div className="w-fit mx-auto mt-14 flex items-center gap-4">
              <AppButton text="Find Projects" />
              <AppButton text="Create Project" />
            </div>
          </div>
        </div>
      ) : undefined}
    </SectionContainer>
  );
};

export default HeroSection;
/* Vector 5 */

// position: absolute;
// width: 1279.5px;
// height: 643.24px;
// left: 0px;
// top: -2.76px;
