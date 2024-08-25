import { env } from "~/env";

if (
  !env.STRIPE_PERSONAL_PLAN_LINK ||
  !env.STRIPE_PRO_PLAN_LINK ||
  !env.STRIPE_ENTERPRISE_PLAN_LINK
) {
  throw new Error("Missing Stripe plan links in .env");
}

export const plans = [
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
    paymentLink: env.STRIPE_PERSONAL_PLAN_LINK,
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
    paymentLink: env.STRIPE_PRO_PLAN_LINK,
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
    paymentLink: env.STRIPE_ENTERPRISE_PLAN_LINK,
  },
];
