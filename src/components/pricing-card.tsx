import React from "react";
import { twMerge } from "tailwind-merge";

type ChildrenType = {
  children: React.ReactNode;
};

type PricingCardComposition = {
  Title: React.FC<ChildrenType>;
  Description: React.FC<ChildrenType>;
  Price: React.FC<ChildrenType>;
};

function PricingCard({
  children,
  isInverse = false,
}: {
  children: React.ReactNode;
  isInverse: boolean;
}) {
  return (
    <article
      className={twMerge(
        "flex w-full max-w-xs flex-col rounded-3xl border border-[#F1F1F1] p-10 shadow-md",
        isInverse && "border-black bg-black text-white",
      )}
    >
      {children}
    </article>
  );
}

function PlanTier({
  children,
  isInverse,
}: {
  children: React.ReactNode;
  isInverse: boolean;
}) {
  return (
    <p
      className={twMerge(
        "text-lg font-bold text-black/50",
        isInverse && "text-white/60",
      )}
    >
      {children}
    </p>
  );
}

function Price({
  children,
  isInverse,
}: {
  children: React.ReactNode;
  isInverse: boolean;
}) {
  return (
    <div className="mt-[30px] flex items-baseline gap-1">
      <span
        className={twMerge(
          "text-4xl font-bold leading-none tracking-tighter text-black",
          isInverse && "text-white",
        )}
      >
        {children}
      </span>
      <span
        className={twMerge(
          "font-bold tracking-tight text-black/50",
          isInverse && "text-gray-400",
        )}
      >
        /month
      </span>
    </div>
  );
}

function Button({
  children,
  isInverse,
}: {
  children: React.ReactNode;
  isInverse: boolean;
}) {
  return (
    <button
      className={twMerge(
        "mt-[30px] rounded-lg bg-black px-14 py-[.55rem] text-sm text-white transition hover:bg-black/85",
        isInverse && "bg-white text-black hover:bg-white/85",
      )}
    >
      {children}
    </button>
  );
}

function Features({ features }: { features: string[] }) {
  return (
    <ul className="mt-[32px] flex flex-col gap-5">
      {features.map((feature) => (
        <li className="flex items-center gap-4 text-sm" key={feature}>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function Recommended() {
  return (
    <div className="inline-flex rounded-xl border border-white/20 px-4 py-1.5 text-sm">
      <span className="font-md bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-clip-text text-transparent">
        Popular
      </span>
    </div>
  );
}

PricingCard.PlanTier = PlanTier;
PricingCard.Features = Features;
PricingCard.Price = Price;
PricingCard.Button = Button;
PricingCard.Recommended = Recommended;

export default PricingCard as typeof PricingCard & PricingCardComposition;
