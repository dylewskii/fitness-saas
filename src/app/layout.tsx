import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "~/components/footer/footer";
import TopNavWrapper from "~/components/topnav/top-nav-wrapper";

export const metadata: Metadata = {
  title: "Fitnessio",
  description: "Your club, your rules",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${GeistSans.variable} max-w-[100%] overflow-x-hidden bg-black`}
      >
        <body>
          <TopNavWrapper />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
