import Image from "next/image";
import swingingKettlebell from "public/swinging-kettlebell.webp";
// import { Badge } from "~/components/ui/badge";

export default function ExerciseCard() {
  return (
    <div className="sm:rounded-4xl h-[24rem] w-full overflow-hidden sm:h-[16rem] sm:w-[16rem]">
      <Image
        src={swingingKettlebell}
        alt="A man swinging a kettlebell upwards."
        className="z-0 object-cover"
        priority
      />
    </div>
  );
}
