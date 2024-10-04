"use client";

import { NextPage } from "next";

import { ErrorContent } from "~/components";

const Page500: NextPage = () => {
  return (
    <ErrorContent
      title="Internal Server Error"
      description="Something went wrong, please try again soon"
    />
  );
};

export default Page500;
