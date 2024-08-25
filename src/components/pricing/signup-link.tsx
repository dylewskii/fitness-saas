"use client";

import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type SignupLinkProps = {
  children: React.ReactNode;
  isInverse: boolean;
  href: string;
  paymentLink: string;
};

export default function SignupLink({
  children,
  isInverse,
  href,
  paymentLink,
}: SignupLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        if (paymentLink) {
          localStorage.setItem("stripePaymentLink", paymentLink);
        }
      }}
      className={twMerge(
        "mt-[30px] flex justify-center rounded-lg bg-black px-14 py-[.55rem] text-sm text-white transition hover:bg-black/85",
        isInverse && "bg-white text-black hover:bg-white/85",
      )}
    >
      {children}
    </Link>
  );
}
