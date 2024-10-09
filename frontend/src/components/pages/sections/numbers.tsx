import React from "react";

import SectionContainer from "~/components/section-container";
import Text from "~/components/text";
import { cn } from "~/lib/utils";

const numbers = [
  {
    number: "1830",
    description: "Project Created"
  },
  {
    number: "220",
    description: "Invested Projects"
  },
  {
    number: "390",
    description: "Project Executed"
  },
  {
    number: "834+",
    description: "Satisfied customers"
  }
];

const NumbersSection = () => {
  return (
    <SectionContainer loading={false}>
      <div className="bg-primary my-20">
        <div className="container px-10 mx-auto">
          <div className="flex items-center py-20">
            {numbers.map((item, index) => (
              <div
                className={cn(
                  "w-1/4 px-10 py-5 flex flex-col items-center justify-center",
                  index !== numbers.length - 1 ? "border-r border-white/20" : undefined
                )}
                key={index}
              >
                <Text text={item.number} className="text-center text-5xl text-white" />
                <Text
                  text={item.description}
                  className="text-center text-base text-white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default NumbersSection;
