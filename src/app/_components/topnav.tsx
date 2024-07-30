"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

type TopNavProps = {
  className?: string;
};

export function TopNav({ className }: TopNavProps) {
  return (
    <nav
      className={`${className} flex w-full items-center justify-between bg-[var(primary)] p-4`}
    >
      <div className="text-xl font-bold">Fitnessio</div>

      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
