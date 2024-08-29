import type { PropsWithChildren } from "react";
import { Protect } from "@clerk/nextjs";

export default function DashboardLayout(props: PropsWithChildren) {
  return (
    <Protect
      condition={(has) => has({ role: "org:admin" })}
      fallback={
        <p className="flex h-screen flex-col items-center justify-center gap-2 p-24 text-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Only an Premium member can access this content.
        </p>
      }
    >
      {props.children}
    </Protect>
  );
}
