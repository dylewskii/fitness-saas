import React from "react";
import WaveDivider from "./ui/wave-divider";

export default function CTAPanel() {
  return (
    <section className="relative flex max-w-[1920px] flex-col items-center justify-center px-4 pb-6 sm:px-16">
      <h2 className="text-2xl font-bold">Start Your Free Trial</h2>
      <p className="text-center">
        Fitnessio is the ultimate solution for coaches and club owners.
        Effortlessly track client subscriptions, payments, and packages, so you
        can focus on what matters most - helping your clients achieve their
        goals.
      </p>
      <WaveDivider className="absolute" />
    </section>
  );
}
