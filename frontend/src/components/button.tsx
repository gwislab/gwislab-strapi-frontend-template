import React from "react";

import { Maybe } from "graphql/jsutils/Maybe";
import { useRouter } from "next/navigation";

import Text from "./text";
import { Button } from "./ui/button";
import { LinkFragmentFragment } from "~/graphql/generated/schema";

interface ButtonProps extends Partial<LinkFragmentFragment> {
  text?: string | Maybe<string>;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  textClassName?: string;
  link?: string | Maybe<string>;
  leftIcon?: any;
  showArrow?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const AppButton = ({
  text,
  className,
  textClassName,
  onClick,
  leftIcon,
  showArrow,
  loading,
  link,
  isExternal,
  ...props
}: ButtonProps) => {
  const router = useRouter();
  return (
    <Button
      className={`border h-14 border-white flex justify-center hover:bg-black items-center gap-2 ${className}`}
      onClick={
        onClick
          ? onClick
          : () => {
              link && (isExternal || link?.includes?.("http"))
                ? window.open(link, "_blank")
                : router.replace(`/${link}`);
            }
      }
      {...props}
    >
      {leftIcon}
      {loading ? (
        <div className="flex items-center justify-center h-screen px-4">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
        </div>
      ) : (
        <Text text={text!} className={textClassName} />
      )}
      {showArrow ? (
        <svg
          width="11"
          height="16"
          viewBox="0 0 11 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.74365 8.64502L3.10303 15.2856C2.64404 15.7446 1.90186 15.7446 1.44775 15.2856L0.344238 14.1821C-0.114746 13.7231 -0.114746 12.981 0.344238 12.5269L5.05127 7.81982L0.344238 3.11279C-0.114746 2.65381 -0.114746 1.91162 0.344238 1.45752L1.44287 0.344238C1.90186 -0.114746 2.64404 -0.114746 3.09814 0.344238L9.73877 6.98486C10.2026 7.44385 10.2026 8.18604 9.74365 8.64502Z"
            fill="white"
          />
        </svg>
      ) : undefined}
    </Button>
  );
};

export default AppButton;
