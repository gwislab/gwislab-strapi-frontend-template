import React from "react";

import Image from "next/image";

interface ImageProps {
  src?: string;
  className?: string;
  width?: number;
  height?: number;
}

const blurHolder =
  "data:image/png;base64,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";

const AppImage = ({ src, className, ...props }: ImageProps) => {
  return (
    <Image
      fill={true}
      {...props}
      // width={width}
      // height={height}
      src={src || blurHolder}
      className={`!relative object-cover ${className}`}
      alt={src || "no alt text found"}
      placeholder="blur"
      blurDataURL={blurHolder}
      priority={true}
    />
  );
};

export default AppImage;
