import CTAPanel from "~/components/cta/cta-panel";
import Hero from "../components/hero/hero";
import FeatureOverview from "~/components/features/feature-overview";
import ProcessBreakdown from "~/components/process/process-breakdown";
import Testimonial from "~/components/testimonial/testimonial";
import ExerciseSlider from "~/components/exercise-slider";
import Pricing from "~/components/pricing/pricing";
import Newsletter from "~/components/newsletter/newsletter";
import ImageSplit from "~/components/image-split";
import WaveWrapper from "~/components/wave-wrapper";

export default async function Home() {
  return (
    <main className="flex min-h-screen w-[100%] flex-col overflow-x-hidden rounded-t-3xl bg-background text-copy">
      <Hero />
      <ImageSplit />
      <CTAPanel />
      <WaveWrapper>
        <FeatureOverview bgColor="black" />
      </WaveWrapper>
      <ProcessBreakdown />
      <ExerciseSlider />
      <Pricing />
      <Testimonial />
      <Newsletter />
    </main>
  );
}
