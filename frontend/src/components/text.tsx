import React from "react";

import { Maybe } from "graphql/jsutils/Maybe";

import { cn } from "~/lib/utils";

interface ITextProps {
  text?: string | Maybe<string>;
  isHeading?: boolean;
  className?: string;
}
const Text = ({ text, isHeading, className }: ITextProps) => {
  if (!text) return <></>;

  if (isHeading) {
    return <h2 className={cn("font-title text-xl text-title", className)}>{text}</h2>;
  }
  return (
    <p className={cn("font-text text-base text-text font-light", className)}>{text}</p>
  );
};

export default Text;
