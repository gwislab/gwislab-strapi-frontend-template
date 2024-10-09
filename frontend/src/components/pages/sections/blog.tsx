import React from "react";

import { FaArrowRight } from "react-icons/fa";

import AppButton from "~/components/button";
import AppImage from "~/components/image";
import SectionContainer from "~/components/section-container";
import Text from "~/components/text";

const blogContent = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "22 June 2024"
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "22 June 2024"
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "22 June 2024"
  }
];

const BlogSection = () => {
  return (
    <SectionContainer loading={false}>
      <div>
        <div className="container px-10 mx-auto">
          <div className="mx-auto mt-10">
            <Text text="our blog" className="text-center text-sm text-primary" />
            <Text
              text="Read our blog"
              isHeading={true}
              className="text-center text-3xl text-primary my-3"
            />
            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
              className="w-[450px] mx-auto text-center text-base"
            />
          </div>
          <div className="flex items-center mt-10">
            {blogContent.map((item, index) => (
              <div className="w-1/3 gap-14 mt-12 px-10" key={index}>
                <div className="w-full h-[250px] mb-5">
                  <AppImage src={item.image} className="rounded-lg" />
                </div>
                <div className="gap-2">
                  <Text text={item.date} className="text-sm mb-1" />
                  <Text
                    text={item.title}
                    isHeading={true}
                    className="text-base text-primary mb-3"
                  />
                  <AppButton
                    text="Read more"
                    className="border-none p-0"
                    rightIcon={<FaArrowRight />}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default BlogSection;
