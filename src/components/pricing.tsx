import PricingCard from "./pricing-card";

const plans = [
  {
    tier: "Personal",
    price: "$19",
    features: [
      "1 club owner",
      "Up to 20 clients",
      "Unlimited Tasks",
      "Desktop Access",
      "Standard Support",
    ],
    inverse: false,
    recommended: false,
  },
  {
    tier: "Pro",
    price: "$49",
    features: [
      "5 club owners",
      "Up to 150 clients",
      "Unlimited Tasks",
      "Integrations",
      "Desktop & App Access",
      "Priority Support",
    ],
    inverse: true,
    recommended: true,
  },
  {
    tier: "Enterprise",
    price: "$100",
    features: [
      "Unlimited club owners",
      "Unlimited clients",
      "Unlimited Tasks",
      "Integrations",
      "Desktop & App Access",
      "API Access",
      "Security+ Features",
      "Priority Support",
    ],
    inverse: false,
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <section className="space-y-8 p-8 py-24">
      <div className="section-heading">
        <h3 className="section-title">Pricing</h3>
        <p className="section-description">
          Choose from one of our plans. Contact us if you would like to discuss
          the Enterprise plan.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center">
        {plans.map(({ tier, inverse, recommended, price, features }, i) => (
          <PricingCard key={`${tier + i}`} isInverse={inverse}>
            <div className="flex items-center justify-between">
              <PricingCard.PlanTier isInverse={inverse}>
                {tier}
              </PricingCard.PlanTier>
              {recommended && <PricingCard.Recommended />}
            </div>
            <PricingCard.Price isInverse={inverse}>{price}</PricingCard.Price>
            <PricingCard.Button isInverse={inverse}>Sign up</PricingCard.Button>
            <PricingCard.Features features={features} />
          </PricingCard>
        ))}
      </div>
    </section>
  );
}
