import React from "react";

export default function TermsPage() {
  const appName = "Fitnessio";
  const contactEmail = "example@gmail.com";
  const lastUpdated = "7th August 2024";
  const privacyPolicyLink = "www.privacy.com";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="section-title mb-8 text-center text-3xl font-bold text-white">
        Terms and Conditions
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">
            1. Acceptance of Terms
          </h2>
          <p className="text-white/90">
            By accessing and using {appName}, you agree to be bound by these
            Terms and Conditions. If you do not agree to these terms, please do
            not use our service.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">
            2. Description of Service
          </h2>
          <p className="text-white/90">
            {appName} provides scheduling and client management tools for club
            owners and personal trainers. Our service allows users to manage
            classes, track client attendance, and optimize their business
            operations.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">3. User Accounts</h2>
          <p className="text-white/90">
            To use {appName}, you must create an account. You are responsible
            for maintaining the confidentiality of your account information and
            for all activities that occur under your account.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">4. Privacy Policy</h2>
          <p className="text-white/90">
            Your use of {appName} is also governed by our Privacy Policy, which
            can be found at {privacyPolicyLink}.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">
            5. Limitation of Liability
          </h2>
          <p className="text-white/90">
            {appName} is provided &quot;as is&quot; without any warranties. We
            are not liable for any damages arising from the use of our service.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">6. Changes to Terms</h2>
          <p className="text-white/90">
            We reserve the right to modify these Terms and Conditions at any
            time. Your continued use of Fitnessio after any changes indicates
            your acceptance of the new terms.
          </p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <p className="text-white/90">Last updated: {lastUpdated}</p>
        <p className="mt-4 text-sm text-white/90">
          If you have any questions about these Terms and Conditions, please
          contact us at {contactEmail}.
        </p>
      </div>
    </div>
  );
}
