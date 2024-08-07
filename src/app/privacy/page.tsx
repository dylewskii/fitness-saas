import React from "react";

export default function PrivacyPolicyPage() {
  const appName = "Fitnessio";
  const contactEmail = "example@gmail.com";
  const lastUpdated = "7th August 2024";
  const termsLink = "www.terms.com";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="section-title mb-8 text-center text-3xl font-bold text-white">
        Privacy Policy
      </h1>
      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">
            1. Information We Collect
          </h2>
          <p className="text-white/90">
            {appName} collects personal information such as name, email address,
            and business details when you create an account. We also collect
            usage data to improve our services.
          </p>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-semibold">
            2. How We Use Your Information
          </h2>
          <p className="text-white/90">
            We use your information to provide and improve {appName} services,
            communicate with you about your account, and send updates about our
            services. We do not sell your personal information to third parties.
          </p>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-semibold">3. Data Security</h2>
          <p className="text-white/90">
            {appName} implements appropriate technical and organizational
            measures to protect your personal information against unauthorized
            or unlawful processing, accidental loss, destruction, or damage.
          </p>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-semibold">4. Your Rights</h2>
          <p className="text-white/90">
            You have the right to access, correct, or delete your personal
            information. You can also object to processing of your personal
            information or request data portability.
          </p>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-semibold">
            5. Cookies and Tracking Technologies
          </h2>
          <p className="text-white/90">
            {appName} uses cookies and similar tracking technologies to track
            activity on our service and hold certain information. You can
            instruct your browser to refuse all cookies or to indicate when a
            cookie is being sent.
          </p>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-semibold">
            6. Changes to This Policy
          </h2>
          <p className="text-white/90">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;last updated&quot; date.
          </p>
        </section>
      </div>
      <div className="mt-12 text-center">
        <p className="text-white/90">Last updated: {lastUpdated}</p>
        <p className="mt-4 text-sm text-white/90">
          If you have any questions about this Privacy Policy, please contact us
          at {contactEmail}.
        </p>
        <p className="mt-4 text-sm text-white/90">
          This Privacy Policy should be read alongside our Terms and Conditions,
          which can be found at {termsLink}.
        </p>
      </div>
    </div>
  );
}
