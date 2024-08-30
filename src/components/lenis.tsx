"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function Lenis({ children }: { children: React.ReactNode }) {
  //   useLenis(({ scroll }) => {
  //     // custom scroll behavior if needed later
  //   });
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
