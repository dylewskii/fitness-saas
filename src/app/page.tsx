import CTAPanel from "~/components/cta-panel";
import Hero from "../components/hero";
import FeatureOverview from "~/components/feature-overview";
import ProcessBreakdown from "~/components/process-breakdown";
import Testimonial from "~/components/testimonial";
import ExerciseSlider from "~/components/exercise-slider";
import Pricing from "~/components/pricing";
import Newsletter from "~/components/newsletter";
import ImageSplit from "~/components/image-split";

export default async function Home() {
  return (
    <main className="text-copy bg-background flex min-h-screen w-[100%] flex-col overflow-x-hidden rounded-t-3xl">
      <Hero />
      <ImageSplit />
      <CTAPanel />
      <FeatureOverview />
      <ProcessBreakdown />
      <ExerciseSlider />
      <Pricing />
      <Testimonial />
      <Newsletter />
    </main>
  );
}
