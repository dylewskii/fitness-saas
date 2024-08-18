import FeatureOverview from "~/components/feature-overview";

export default function FeaturesPage({ className }: { className: string }) {
  return (
    <div className={`rounded-b-3xl rounded-t-3xl bg-white py-6 ${className}`}>
      <FeatureOverview bgColor="white" />
    </div>
  );
}
