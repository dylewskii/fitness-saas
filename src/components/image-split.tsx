import Image from "next/image";
import imageOne from "../../public/swinging-kettlebell.webp";
import imageTwo from "../../public/workout-two.webp";

type ImageSplitProps = {
  className?: string;
};

export default function ImageSplit({ className }: ImageSplitProps) {
  return (
    <section
      className={`${className} hidden w-full sm:flex sm:h-[300px] sm:overflow-hidden lg:hidden`}
    >
      <div className="flex w-1/2">
        <Image
          src={imageOne}
          alt="A man holding a kettlebell above his head."
          className="h-full w-full object-cover"
          sizes="50vw"
        />
      </div>
      <div className="flex w-1/2">
        <Image
          src={imageTwo}
          alt="A man holding a kettlebell in the air whilst doing a side plank."
          className="h-full w-full object-cover"
          sizes="50vw"
        />
      </div>
    </section>
  );
}
