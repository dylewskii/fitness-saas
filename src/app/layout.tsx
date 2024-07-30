import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";

export const metadata: Metadata = {
  title: "Fitness SaaS",
  description: "Your club, your rules",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <TRPCReactProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
          <body>
            <TopNav />
            {children}
          </body>
        </html>
      </TRPCReactProvider>
    </ClerkProvider>
  );
}
