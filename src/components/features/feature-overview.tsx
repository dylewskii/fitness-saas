type FeatureOverviewProps = {
  bgColor: "black" | "white";
  className?: string;
};

export default function FeatureOverview({
  bgColor,
  className,
}: FeatureOverviewProps) {
  const bgOptions = {
    black: "bg-black",
    white: "bg-white",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center px-12 py-24 sm:py-28 ${bgOptions[bgColor]} ${className} ${bgColor === "black" ? "text-white" : "text-black"}`}
    >
      <p className="section-title pb-4">What&apos;s Included: </p>
      <ul className="mx-auto max-w-2xl space-y-2 px-4 pt-6">
        <li className="py-4">
          📆 <strong className="pl-1">Subscription Tracking:</strong> Monitor
          active and expired memberships at a glance.
        </li>
        <li className="py-4">
          💵 <strong className="pl-1">Payment Management:</strong> Easily check
          payment status and send reminders.
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
  );
}
