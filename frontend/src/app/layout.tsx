import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { GraphqlClient } from "~/components/clients";
import { APP_ENV } from "~/configs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_ENV.FRONTEND_URL!),
  title: {
    default: APP_ENV.APP_NAME,
    template: `%s | ${APP_ENV.APP_NAME}`
  },
  description: APP_ENV.APP_DEFAULT_DESCRIPTION
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <GraphqlClient>{children}</GraphqlClient>
      </body>
    </html>
  );
}
