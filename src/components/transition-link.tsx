import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface TransitionLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  onTransitionComplete?: () => void;
  className?: string;
}

export default function TransitionLink({
  href,
  children,
  onTransitionComplete,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    onTransitionComplete?.();
    await sleep(500);

    router.push(href);
    await sleep(500);

    body?.classList.remove("page-transition");
  };
  return (
    <Link
      className={className}
      href={href}
      onClick={handleTransition}
      {...props}
    >
      {children}
    </Link>
  );
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
