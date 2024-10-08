import PricingCard from "./pricing-card";
import SignupLink from "./signup-link";
import { plans } from "~/lib/plans";

type PricingProps = {
  className?: string;
};

export default function Pricing({ className }: PricingProps) {
  return (
    <section className={`${className} space-y-8 px-8 py-12 sm:py-36`}>
      <div className="section-heading">
        <h3 className="section-title">Pricing</h3>
        <p className="section-description">
          Choose from one of our plans. Contact us if you would like to discuss
          the Enterprise plan.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center">
        {plans.map(
          ({ tier, inverse, recommended, price, features, paymentLink }, i) => (
            <PricingCard key={`${tier + i}`} isInverse={inverse}>
              <div className="flex items-center justify-between">
                <PricingCard.PlanTier isInverse={inverse}>
                  {tier}
                </PricingCard.PlanTier>
                {recommended && <PricingCard.Recommended />}
              </div>
              <PricingCard.Price isInverse={inverse}>{price}</PricingCard.Price>
              <SignupLink
                isInverse={inverse}
                paymentLink={paymentLink}
                href="/auth/sign-in"
              >
                Sign up
              </SignupLink>

              <PricingCard.Features features={features} />
            </PricingCard>
          ),
        )}
      </div>
    </section>
  );
}
