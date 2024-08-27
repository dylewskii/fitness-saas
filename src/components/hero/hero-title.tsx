import { TextEffect } from "../ui/text-effect";

export const HeroTitle = () => {
  return (
    <TextEffect
      per="word"
      as="h1"
      preset="blur"
      className="block bg-background text-center text-[2.5rem] font-bold tracking-tighter sm:my-auto sm:text-[3.5rem] md:text-start md:text-[4rem] md:leading-[3.75rem] lg:text-[4.5rem]"
    >
      Focus on your club. We&apos;ll take care of the rest.
    </TextEffect>
  );
};
