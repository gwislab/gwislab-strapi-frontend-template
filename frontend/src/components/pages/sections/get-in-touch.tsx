import React from "react";

import AppButton from "~/components/button";
import SectionContainer from "~/components/section-container";
import Text from "~/components/text";

const GetInTouchSection = () => {
  return (
    <SectionContainer loading={false}>
      <div className="bg-[#F4F4F4] py-32 mt-32">
        <div className="container px-10 mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="mx-auto">
              <Text text="get in touch" className="text-center text-sm text-primary" />
              <Text
                text="Do you any help from us?"
                isHeading={true}
                className="text-center text-3xl text-primary my-3"
              />
              <Text
                text="Let’s Work Together to Bring Your Vision to Life"
                className="w-[450px] mx-auto text-center text-base"
              />
            </div>

            <div className="!z-10 w-fit mx-auto mt-8 flex items-center gap-4">
              <AppButton isPrimary={true} text="Contact Us" />
              <AppButton isPrimary={true} text="View Price Tier" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default GetInTouchSection;
