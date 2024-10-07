/* eslint-disable max-len */
// "use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iZBmEfhBizn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";

import AppButton from "./button";
import AppImage from "./image";
import SectionContainer from "./section-container";
import Text from "./text";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~/components/ui/dropdown-menu";
import { SheetTrigger, SheetContent, Sheet } from "~/components/ui/sheet";
import { ComponentComponentsTitle } from "~/graphql/generated/schema";
import { useGetHeaderFooterContent } from "~/hooks";
import useGetLocalParams from "~/hooks/get-locale";
import { extractAssetUrl } from "~/lib/utils";

const MenuIcon = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};

const MenuItem = (item: ComponentComponentsTitle) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef?.current) {
      clearTimeout(timeoutRef?.current);
    }

    if (isOpen) {
      return setIsOpen(false);
    }

    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [timeoutRef?.current]);

  if (item.subTitles?.length) {
    return (
      <div
        className="relative flex items-center px-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseEnter}
      >
        <span className="flex items-center justify-center gap-2 z-[500000] text-white cursor-pointer">
          <Text text={item?.label || ""} />
          <FaCaretDown />
        </span>
        {isOpen && (
          <div className="absolute left-0 mt-2 top-8 w-[250px] rounded-md shadow-2xl p-4 shadow-white bg-primary ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {item.subTitles.map((subItem) => (
                <Link
                  key={subItem?.label}
                  className={`${
                    (subItem?.link && pathname.includes(subItem?.link)) ||
                    pathname === subItem?.link
                      ? "underline"
                      : ""
                  }
           group inline-flex h-9 w-[100px] gap-2 items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:underline focus:outline-none text-white hover:bg-footer`}
                  href={`/${subItem?.link}`}
                >
                  <Text text={subItem?.label || ""} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      key={item?.label}
      className={`${
        (item?.link && pathname.includes(item?.link)) || pathname === item?.link
          ? "underline"
          : ""
      }
group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:underline focus:outline-none text-white`}
      href={`/${item?.link}`}
    >
      <Text text={item?.label || ""} />
    </Link>
  );
};

const Header = () => {
  const router = useRouter();
  const { header, loading } = useGetHeaderFooterContent();
  const { appRouter, locale } = useGetLocalParams();

  return (
    <SectionContainer loading={loading} header={true}>
      {header ? (
        <div className="bg-primary z-[500000]">
          <div className="container mx-auto py-2 px-4 md:px-6 lg:px-8 ">
            <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
              <Link className="mr-6 w-24" href="/">
                <AppImage src={extractAssetUrl(header?.logo)} />
              </Link>
              <div className="ml-auto hidden lg:flex gap-2 z-[500000]">
                {header?.titles?.map((title) =>
                  title?.isLang ? (
                    <DropdownMenu key={title?.label}>
                      <DropdownMenuTrigger>
                        <Text text={locale} className="text-white" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>
                          <Text text={title?.label} />
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => appRouter({ locale: "en" })}>
                          {" "}
                          <Text text="EN" />
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => appRouter({ locale: "fr" })}>
                          {" "}
                          <Text text="FR" />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : !title?.isButton ? (
                    <MenuItem
                      key={title?.label}
                      {...(title as ComponentComponentsTitle)}
                    />
                  ) : (
                    <AppButton
                      key={title?.label}
                      className="justify-self-end h-10"
                      text={title?.label}
                      onClick={() => {
                        title?.link?.includes?.("http")
                          ? window.open(title?.link, "_blank")
                          : router.replace(`/${title?.link}`);
                      }}
                      showArrow={true}
                    />
                  )
                )}
              </div>
              <Sheet>
                <SheetTrigger asChild={true}>
                  <Button
                    className="ml-auto lg:hidden bg-primary text-white"
                    size="icon"
                    variant="outline"
                  >
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[280px] bg-primary" side="left">
                  <div className="flex items-center px-4 pb-4 border-b">
                    <Link className="w-32" href="/">
                      <AppImage src={extractAssetUrl(header?.logo)} />
                    </Link>
                  </div>
                  <nav className="grid gap-2 z-[500000] py-4 px-4">
                    {header?.titles?.map((title) =>
                      !title?.isButton ? (
                        <MenuItem
                          key={title?.label}
                          {...(title as ComponentComponentsTitle)}
                        />
                      ) : (
                        <AppButton
                          key={title?.label}
                          className="h-10"
                          text={title?.label}
                          link={title?.link}
                          showArrow={true}
                        />
                      )
                    )}
                  </nav>
                </SheetContent>
              </Sheet>
            </header>
          </div>
        </div>
      ) : undefined}
    </SectionContainer>
  );
};

export default Header;
