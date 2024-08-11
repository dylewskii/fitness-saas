import { type StaticImageData } from "next/image";
import ImageCard from "../image-card";

type WrappedImageProps = {
  src: StaticImageData;
};

export const WrappedImage = ({ src }: WrappedImageProps) => {
  return (
    <div className="w-full sm:hidden">
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <div className="bg-background absolute -top-3 z-30 w-full rounded-b-3xl p-4 sm:hidden"></div>
        <div className="relative h-[24rem] sm:mt-[4rem]">
          <ImageCard
            alt="A man holding a kettlebell above his head."
            src={src}
            className="z-20 h-full w-full"
          />
        </div>
        <div className="bg-background absolute -bottom-2 z-30 w-screen rounded-t-3xl p-4 sm:hidden"></div>
      </div>
    </div>
  );
};
