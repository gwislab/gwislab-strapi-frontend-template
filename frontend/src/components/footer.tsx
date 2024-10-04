"use client";
import React from "react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iZBmEfhBizn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { usePathname } from "next/navigation";

import AppImage from "./image";
import SectionContainer from "./section-container";
import Text from "./text";
import { useGetHeaderFooterContent } from "~/hooks";
import { extractAssetUrl } from "~/lib/utils";

const Footer = () => {
  const { footer, loading } = useGetHeaderFooterContent();
  const pathname = usePathname();

  return (
    <SectionContainer loading={loading} header={true}>
      {footer ? (
        <div className="bg-footer">
          <div className="container py-16">
            <Text
              text={footer.appName}
              className="!text-4xl text-footer_text text-center"
              isHeading={true}
            />
            <div className="flex justify-center items-center mt-6">
              <div className="w-24">
                <Link href="/">
                  <AppImage src={extractAssetUrl(footer?.logo)} />
                </Link>
              </div>
            </div>
            <Text
              text={footer.copyRightText}
              className="text-footer_text text-center mt-6"
            />
            <div className="flex justify-center items-center">
              {footer?.links?.map((title, index) => (
                <Link
                  key={title?.label}
                  className={`${
                    (title?.link && pathname.includes(title?.link)) ||
                    pathname === title?.link
                      ? "underline"
                      : ""
                  } 
                text-sm font-medium hover:underline focus:outline-none text-footer_text mr-1`}
                  href={`/${title?.link}`}
                >
                  <Text
                    text={`${title?.label}${index + 1 === footer.links?.length ? "" : " | "} `}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : undefined}
    </SectionContainer>
  );
};

export default Footer;
