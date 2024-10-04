"use client";

import { useRouter } from "next/navigation";

import AppButton from "./button";
import AppImage from "./image";
import Text from "./text";
import useReactiveVariables from "~/hooks/reactive-variable";

interface ErrorContentProps {
  title: string;
  description: string;
}

const ErrorContent = ({ description, title }: ErrorContentProps) => {
  const { logoUrl } = useReactiveVariables();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-4 mt-20">
      <div className="w-28">{logoUrl ? <AppImage src={logoUrl} /> : null}</div>

      <Text text={title} className="text-primary text-5xl" />

      <Text text={description} />

      <AppButton
        onClick={() => {
          router.replace("/");
        }}
        text={"Go To Home Page"}
        showArrow={true}
      />
    </div>
  );
};

export default ErrorContent;
