import React from "react";

export default function Newsletter() {
  return (
    <div className="flex w-full flex-col justify-between gap-4 border-b-2 px-12 py-12 md:flex-row">
      <p className="mx-auto text-2xl font-bold">
        Join our newsletter to stay updated with us!
      </p>
      <label
        htmlFor="email"
        className="relative flex items-center justify-start overflow-hidden rounded-3xl border-2 border-zinc-400 px-8 py-3"
      >
        <svg
          className="absolute left-5 h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="email"
          name="email"
          id="email"
          maxLength={50}
          placeholder="Enter your email"
          autoComplete="email"
          className="w-[24rem] pl-4 text-lg focus:outline-none"
        />
      </label>

      <button className="bg-secondary rounded-3xl px-8 py-3 text-lg transition hover:bg-[hsl(46,48%,45%)]/80">
        Subscribe
      </button>
    </div>
  );
}
