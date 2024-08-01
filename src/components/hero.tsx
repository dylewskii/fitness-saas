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
          <button className="bg-secondary text-copy group flex items-center gap-1 rounded-3xl border-2 border-black px-4 py-2 font-bold hover:bg-[hsl(46,48%,45%)]/80">
            Try It Free
            <svg
              className="flex h-4 w-4 items-center transition group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute -left-2 top-1 -z-10 rounded-3xl bg-black px-4 py-2">
              Try it Free
            </span>
          </button>
          <button className="group flex items-center gap-1 rounded-3xl border-2 border-zinc-500 bg-zinc-200 px-4 py-2">
            Learn More
            <svg
              className="h-4 w-4 transition group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-background absolute top-[9rem] z-10 w-full rounded-b-3xl p-2 sm:hidden"></div>
      <ExerciseCard />
    </section>
  );
}
