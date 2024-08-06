import React from "react";
import ImageCard from "./image-card";
import imageOne from "../../public/swinging-kettlebell.webp";
import imageTwo from "../../public/workout-two.webp";

export default function Hero() {
  return (
    <section className="flex flex-col py-6 sm:px-16 sm:py-14">
      <div className="max-w-[970px] px-8 py-12 sm:my-auto sm:p-0">
        <h1 className="bg-background block text-[2.25rem] font-bold sm:my-auto md:text-[4rem]">
          Focus on your club. <br />
          We&apos;ll take care of the rest.
        </h1>

        <div className="flex items-center justify-center gap-2 py-6 sm:flex-col sm:items-start md:flex-row md:justify-start">
          <button className="bg-secondary text-copy group relative flex min-w-fit items-center gap-1 rounded-3xl border-2 border-black px-4 py-2 font-bold hover:bg-[hsl(46,48%,45%)]/80 md:px-[1rem] md:py-[0.5rem] md:text-xl">
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
            <svg
              className="absolute -right-1 -top-2 h-6 w-6"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="group flex min-w-fit items-center gap-1 rounded-3xl border-2 border-zinc-500 bg-zinc-200 px-4 py-2 md:px-[1rem] md:py-[0.5rem] md:text-xl">
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

      <div className="relative">
        <div className="bg-background absolute -top-4 z-50 w-full rounded-b-3xl p-4 sm:hidden"></div>
        <div className="relative h-[24rem] sm:mt-[4rem]">
          <ImageCard
            className="z-10 h-full w-full sm:absolute sm:right-48 sm:top-0 sm:h-[14rem] sm:w-[14rem] lg:h-[20rem] lg:w-[20rem]"
            src={imageOne}
            alt="A man holding a kettlebell above his head."
          />
          <ImageCard
            className="z-0 hidden sm:absolute sm:-top-14 sm:right-16 sm:block sm:h-[14rem] sm:w-[14rem] lg:h-[20rem] lg:w-[20rem]"
            src={imageTwo}
            alt="A man holding a kettlebell in the air whilst doing a side plank."
          />
        </div>

        <div className="bg-background absolute bottom-0 z-50 w-full rounded-t-3xl p-4 sm:hidden"></div>
      </div>
    </section>
  );
}
