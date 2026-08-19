import { stripe } from "@/app/lib/stripe";

export async function POST(req: Request) {
  const body = await req.text();

  const signature = req.headers.get("stripe-signature")!;

  const event = stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!,
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Update MongoDB
    // Mark order as paid
  }

  return new Response("OK");
}
