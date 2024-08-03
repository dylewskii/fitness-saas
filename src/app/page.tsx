import CTAPanel from "~/components/cta-panel";
import Hero from "../components/hero";
import FeatureOverview from "~/components/feature-overview";

export default async function Home() {
  return (
    <main className="text-copy bg-background flex min-h-screen w-[100%] flex-col overflow-x-hidden rounded-t-3xl">
      <Hero />
      <CTAPanel />
      <FeatureOverview />
    </main>
  );
}
