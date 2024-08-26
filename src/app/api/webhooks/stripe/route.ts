import { db } from "~/server/db";
import { stripe } from "~/lib/stripe";
import { env } from "~/env";
import { type Stripe } from "stripe";
import { NextResponse, type NextRequest } from "next/server";

const WEBHOOK_SECRET = env.STRIPE_WEBHOOK_SECRET;
if (!WEBHOOK_SECRET) {
  throw new Error("STRIPE_WEBHOOK_SECRET is not set in .env");
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ message: "No signature", status: 400 });
  }

  let event: Stripe.Event;

  // verify webhook authenticity
  try {
    event = stripe.webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
  } catch (err: unknown) {
    console.log(`Webhook Error:`, err);
    return NextResponse.json({ message: "Webhook Error", status: 400 });
  }

  // check which event was triggered
  try {
    switch (event.type) {
      // -- SUBSCRIPTION COMPLETED --
      case "checkout.session.completed":
        const session = await stripe.checkout.sessions.retrieve(
          event.data.object.id,
          { expand: ["line_items"] },
        );
        const customerId = session.customer as string;
        const customerDetails = session.customer_details;

        if (customerDetails?.email) {
          const user = await db.user.findUnique({
            where: { email: customerDetails.email },
          });

          if (!user) {
            throw new Error("User not found");
          }

          if (!user.stripeCustomerId) {
            await db.user.update({
              where: { id: user.id },
              data: { stripeCustomerId: customerId },
            });
          }

          const lineItems = session.line_items?.data ?? [];

          for (const item of lineItems) {
            const priceId = item.price?.id;
            let plan: "PERSONAL" | "PRO" | "ENTERPRISE";
            const endDate = new Date();

            if (priceId === env.STRIPE_PERSONAL_PLAN_PRICE_ID) {
              plan = "PERSONAL";
              endDate.setMonth(endDate.getMonth() + 1); // 1 month from now
            } else if (priceId === env.STRIPE_PRO_PLAN_PRICE_ID) {
              plan = "PRO";
              endDate.setMonth(endDate.getMonth() + 1); // 1 month from now
            } else if (priceId === env.STRIPE_ENTERPRISE_PLAN_PRICE_ID) {
              plan = "ENTERPRISE";
              endDate.setMonth(endDate.getMonth() + 1); // 1 month from now
            } else {
              throw new Error("Invalid price id");
            }

            await db.subscription.upsert({
              where: { userId: user.id },
              create: {
                userId: user.id,
                startDate: new Date(),
                endDate: endDate,
                plan: plan,
                status: "ACTIVE",
              },
              update: {
                plan: plan,
                startDate: new Date(),
                endDate: endDate,
                status: "ACTIVE",
              },
            });
          }
        }
        break;

      //  -- SUBSCRIPTION DELETED --
      case "customer.subscription.deleted":
        const subscription = event.data.object;
        const user = await db.user.findUnique({
          where: { stripeCustomerId: subscription.customer as string },
        });
        if (user) {
          await db.subscription.update({
            where: { userId: user.id },
            data: { status: "CANCELLED" },
          });
        } else {
          console.error("User not found for the subscript ion deleted event.");
          throw new Error("User not found for the subscription deleted event.");
        }
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (error) {
    console.error("Error handling event", error);
    return NextResponse.json({ message: "Webhook Error", status: 400 });
  }

  return NextResponse.json({ message: "Webhook Received", status: 200 });
}
