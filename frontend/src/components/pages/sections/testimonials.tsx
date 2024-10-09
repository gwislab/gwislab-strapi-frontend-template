import React from "react";

import Autoplay from "embla-carousel-autoplay";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa6";

import { SectionContainer, TestimonialItem, Text } from "~/components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "~/components/ui/carousel";

const testimonials = [
  [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, ABC Company",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies "
    },
    {
      id: 2,
      name: "John Doe",
      position: "CEO, ABC Company",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies "
    }
  ],
  [
    {
      id: 3,
      name: "John Doe",
      position: "CEO, ABC Company",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies "
    },
    {
      id: 4,
      name: "John Doe",
      position: "CEO, ABC Company",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies nunc nisl eget ultricies "
    }
  ]
];

const TestimonialsSection = () => {
  return (
    <SectionContainer loading={false} className="pt-0">
      <div className="container mx-auto py-12">
        <div className="mx-auto mb-20">
          <Text text="testimonials" className="text-center text-sm text-primary" />
          <Text
            text="What people say about us"
            isHeading={true}
            className="text-center text-3xl text-primary my-3"
          />
          <Text
            text="Hear From Those Who’ve Experienced Success with Nordic PPM"
            className="w-[450px] mx-auto text-center text-base"
          />
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3500
            })
          ]}
        >
          <CarouselContent>
            {testimonials?.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="flex items-center py-10 justify-between">
                  {testimonial?.map((testimony, index) => (
                    <div key={index} className="w-1/2">
                      <TestimonialItem {...testimony} />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="h-12 w-12 s400:flex justify-center items-center hidden"
            renderIcon={() => <FaCaretLeft className="text-4xl text-primary my-3" />}
          />
          <CarouselNext
            className="h-12 w-12 s400:flex justify-center items-center hidden"
            renderIcon={() => <FaCaretRight className="text-4xl text-primary my-3" />}
          />
        </Carousel>
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
