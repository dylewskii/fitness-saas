import React from "react";
import ExerciseCard from "./exercise-card";

export default function Hero() {
  return (
    <section className="relative mt-10 flex flex-col sm:flex-row sm:justify-between sm:px-6 sm:py-4">
      <div className="mx-auto sm:m-0 sm:my-auto">
        <h1 className="bg-background text-3xl font-bold sm:my-auto">
          Focus on your club. <br />
          We&apos;ll take care of the rest.
        </h1>
        <div className="my-4 flex items-center justify-center gap-2">
          <button className="bg-secondary text-copy rounded-lg px-4 py-2">
            Try It Free
          </button>
          <button className="bg-copy-lighter rounded-lg border-2 border-[border] px-4 py-2">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-background absolute top-[9rem] z-10 w-full rounded-b-3xl p-2 sm:hidden"></div>
      <ExerciseCard />
    </section>
  );
}
