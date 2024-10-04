import React from "react";

import { IoLocation } from "react-icons/io5";

import { SectionContainer } from "~/components";

const MapSection = () => {
  return (
    <SectionContainer loading={false}>
      <div className="py-20">
        <div className="container">
          <div className="flex items-center mt-4 justify-center">
            <IoLocation className="text-2xl" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default MapSection;
