export default function ProcessBreakdown() {
  return (
    <section className="my-24 flex flex-col items-center px-12">
      <p className="section-title pb-8">The Process:</p>
      <ol className="flex w-full flex-col items-center gap-8 md:flex-row md:justify-center">
        {[
          {
            title: "1. Sign Up",
            description: "Create your account in minutes.",
          },
          {
            title: "2. Customize",
            description: "Set up your packages and subscription options.",
          },
          {
            title: "3. Launch",
            description:
              "Start managing your fitness business more efficiently.",
          },
        ].map((step, i) => (
          <li
            key={i}
            className="flex h-64 w-64 flex-col items-center justify-center rounded-full border-2 border-black p-4 text-center"
          >
            <p className="text-xl font-bold">{step.title}</p>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
