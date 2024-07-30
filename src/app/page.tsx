import Hero from "../components/hero";

export default async function Home() {
  return (
    <main className="text-copy bg-background flex min-h-screen w-[100%] flex-col overflow-x-hidden rounded-t-3xl">
      <Hero />
    </main>
  );
}
