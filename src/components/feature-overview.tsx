export default function FeatureOverview() {
  return (
    <section className="relative mt-32">
      <div className="absolute bottom-full left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-[50px] w-full rotate-180 md:h-[100px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#AAA33C"
          ></path>
        </svg>
      </div>

      <div className="bg-primary flex flex-col items-center justify-center px-12 py-24">
        <p className="pb-4 text-2xl font-bold">What&apos;s Included: </p>
        <ul className="mx-auto max-w-2xl space-y-2 px-4 pt-6">
          <li className="py-4">
            📆 <strong className="pl-1">Subscription Tracking:</strong> Monitor
            active and expired memberships at a glance.
          </li>
          <li className="py-4">
            💵 <strong className="pl-1">Payment Management:</strong> Easily
            check payment status and send reminders.
          </li>
          <li className="py-4">
            📦 <strong className="pl-1">Package Overview: </strong> View and
            manage client-specific training packages.
          </li>
          <li className="py-4">
            📊 <strong className="pl-1">Reporting:</strong> Generate insightful
            reports on revenue and membership trends.
          </li>
          <li className="py-4">
            🖥️ <strong className="pl-1">Client Portal:</strong> Allow clients to
            view their subscription status and make payments.
          </li>
        </ul>
      </div>
      <div className="absolute left-0 top-full w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-[50px] w-full md:h-[100px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#AAA33C"
          ></path>
        </svg>
      </div>
    </section>
  );
}
