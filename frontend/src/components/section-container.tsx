import React from "react";

import ErrorContent from "./error-content";
import Loader from "./loader";
import { cn } from "~/lib/utils";

const SectionContainer = ({
  children,
  loading,
  header,
  className
}: {
  loading: boolean;
  header?: boolean;
  className?: string;
  children: any;
}) => {
  const getContent = () =>
    loading ? (
      <Loader />
    ) : children ? (
      children
    ) : (
      <ErrorContent
        title="Internal Server Error"
        description="Something went wrong, please try again soon or email us at contact@gmail.com"
      />
    );
  return header ? (
    <nav className={cn("relative", className)}>{getContent()}</nav>
  ) : (
    <section className={cn("pt-1 relative", className)}>{getContent()}</section>
  );
};

export default SectionContainer;
