import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant,
  className,
  onClick,
}: ButtonProps) {
  const baseClasses =
    "group flex min-w-fit items-center gap-1 rounded-3xl border-2 px-4 py-2 font-bold md:px-[1rem] md:py-[0.5rem] md:text-xl transition relative";

  const variantClasses = {
    primary:
      "bg-secondary text-copy border-black hover:bg-[hsl(46,48%,45%)]/80",
    secondary: "border-zinc-500 bg-zinc-200 hover:bg-zinc-300",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
