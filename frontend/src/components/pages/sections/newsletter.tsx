import React from "react";

import AppButton from "~/components/button";
import SectionContainer from "~/components/section-container";
import Text from "~/components/text";
import { Input } from "~/components/ui/input";

const NewsLetterSection = () => {
  return (
    <SectionContainer loading={false}>
      <div className="bg-primary py-10 border-b border-white">
        <div className="container px-10 mx-auto">
          <div className="flex items-center py-20 justify-between">
            <div className="w-1/2">
              <Text
                text="Subscribe to our newsletter"
                isHeading={true}
                className="text-3xl text-white mb-5"
              />
              <Text
                text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                className="text-white w-[80%]"
              />
            </div>
            <div className="w-1/3">
              <div className="flex items-center pl-4 s400:w-96">
                <Input
                  type="email"
                  placeholder="Email"
                  // value={formData.email}
                  // onChange={(e) =>
                  //   setFormData((prev) => ({ ...prev, email: e.target.value }))
                  // }
                  className="rounded-r-none font-text h-14"
                />
                <AppButton
                  // loading={createLoading}
                  // onClick={handleSubmitNewsLetter}
                  isPrimary={true}
                  className="px-6 h-14 rounded-l-none"
                  text="Send"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default NewsLetterSection;
