import React from "react";
import Button from "./ui/button";

export default function CTAPanel() {
  return (
    <section className="relative flex max-w-[1920px] flex-col items-center justify-center px-12 pb-6 sm:px-32">
      <h2 className="pb-6 text-3xl font-bold">Start Your Free Trial</h2>
      <p className="py-6 text-center text-2xl lg:w-[52rem]">
        Fitnessio is the ultimate solution for coaches and club owners.
        Effortlessly track client subscriptions, payments, and packages, so you
        can focus on what matters most - helping your clients achieve their
        goals.
      </p>
      <Button variant="primary">
        Try Now
        <svg
          className="flex h-4 w-4 items-center transition group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </section>
  );
}
