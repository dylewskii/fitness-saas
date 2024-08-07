import React from "react";
import Button from "~/components/ui/button";

export default function AboutPage() {
  const appName = "Fitnessio";

  return (
    <div className="mx-auto max-w-4xl bg-white px-4 py-12 text-black sm:px-6 lg:px-8">
      <h1 className="section-title mb-8 text-center text-3xl font-bold">
        About {appName}
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>
          <p className="text-black/90">
            {appName} was born out of a simple observation: coaches, trainers,
            and club owners were spending more time managing their businesses
            than doing what they love - helping people get fit and healthy. We
            saw the stress of juggling schedules, chasing payments, and managing
            client packages taking away from the passion that drove these
            fitness professionals in the first place.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
          <p className="text-black/90">
            Our mission is simple yet powerful: to make the lives of fitness
            professionals easier. We&apos;re here to take the stress out of the
            day-to-day running of your business, allowing you to focus on what
            you do best - inspiring and guiding your clients to achieve their
            fitness goals.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">What We Do</h2>
          <p className="text-black/90">
            {appName} provides an all-in-one platform that simplifies:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-2 text-black/90">
            <li>Scheduling classes and appointments</li>
            <li>Managing client payments and subscriptions</li>
            <li>Creating and selling packages</li>
            <li>Tracking client attendance and progress</li>
            <li>Communicating with clients</li>
          </ul>
        </section>

        <section>
          <h2 className="pb-4 text-2xl font-semibold">Our Vision</h2>
          <p className="text-black/90">
            We envision a world where every fitness professional can dedicate
            their full energy to their craft, unburdened by administrative
            tasks. By streamlining these processes, we&apos;re not just helping
            businesses - we&apos;re contributing to a healthier, fitter world by
            allowing fitness experts to reach and impact more lives.
          </p>
        </section>

        <section>
          <h2 className="pb-4 text-2xl font-semibold">Join Us</h2>
          <p className="text-black/90">
            Whether you&apos;re a personal trainer, a yoga instructor, or a gym
            owner, {appName} is here to support your journey. Let us handle the
            logistics while you focus on changing lives through movement.
          </p>
        </section>
      </div>

      <div className="pt-12 text-center">
        <p className="pb-4 text-black/90">
          Ready to simplify your fitness business? Join {appName} today and
          experience the difference.
        </p>
        <Button variant="primary" className="mx-auto">
          Get Started
        </Button>
      </div>
    </div>
  );
}
