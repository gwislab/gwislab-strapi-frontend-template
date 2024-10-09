import React from "react";

import SectionContainer from "~/components/section-container";
import { ClientsLogo } from "~/components/svgs";

const ClientsLogoSection = () => {
  return (
    <SectionContainer loading={false}>
      <div className="container flex justify-center mx-auto">
        <ClientsLogo />
      </div>
    </SectionContainer>
  );
};

export default ClientsLogoSection;
