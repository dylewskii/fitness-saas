import Link from "next/link";

export default function DashboardLink() {
  const buttonClasses =
    "group text-sm flex min-w-fit items-center  gap-1 rounded-3xl border-2 px-3 py-1.5 font-bold md:px-[1rem] md:py-[0.33rem] md:text-lg transition relative " +
    "bg-secondary text-copy border-black hover:bg-[hsl(46,48%,45%)]/80";
  return (
    <Link href="/dashboard" className={buttonClasses}>
      Launch App
    </Link>
  );
}
