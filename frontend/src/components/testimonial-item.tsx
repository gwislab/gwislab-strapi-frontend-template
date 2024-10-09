import React from "react";

import AppImage from "./image";
import Text from "./text";

interface TestimonialItemProps {
  name: string;
  position: string;
  image: string;
  comment: string;
}

const TestimonialItem = ({ image, name, position, comment }: TestimonialItemProps) => {
  return (
    <div className="w-[80%] mx-auto s1100:w-auto gap-4 s650:gap-10 rounded-lg p-8 shadow-lg">
      <div className="w-20 h-20 border-2 border-white rounded-full z-10">
        <AppImage src={image} className="rounded-full" />
      </div>
      <div className="s650:ml-5">
        <div>
          <div className="px-4 s650:px-10 mt-5">
            <Text text={`"${comment}"`} className="s530:text-start" />
          </div>
        </div>
        <div className="px-4 s650:px-10 mt-10">
          <Text text={name} className="font-bold text-primary text-lg s530:text-start" />
          <Text text={position} className="s530:text-start" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
