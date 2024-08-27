import ImageCard from "../image-card";
import imgOne from "../../../public/swinging-kettlebell.webp";
import imgTwo from "../../../public/workout-two.webp";
import { HeroTitle } from "./hero-title";
import { HeroButtons } from "./hero-buttons";
import { WrappedImage } from "./wrapped-image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center py-6 sm:px-16 sm:py-28">
      <div className="relative flex max-w-[1200px] flex-col px-8 pb-0 pt-12 sm:my-auto sm:p-0">
        <div className="flex">
          <HeroTitle />
          <ImageCard
            alt="A man holding a kettlebell above his head."
            src={imgOne}
            className="z-30 hidden lg:-right-12 lg:top-14 lg:flex lg:h-[18rem] lg:w-[20rem]"
          />
          <ImageCard
            alt="A man performing a turkish get up with a kettlebell"
            src={imgTwo}
            className="z-20 hidden lg:right-0 lg:top-0 lg:flex lg:h-[18rem] lg:w-[20rem]"
          />
        </div>

        <HeroButtons />

        <WrappedImage src={imgOne} />
      </div>
    </section>
  );
}
