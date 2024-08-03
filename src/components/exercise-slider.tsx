export default function ExerciseSlider() {
  const sports = [
    "Football",
    "Basketball",
    "Gym",
    "Running",
    "Wrestling",
    "MMA",
    "Muay Thai",
    "Jiu-Jitsu",
    "Swimming",
    "Gymnastics",
    "Dance",
  ];
  const duplicatedSports = [...sports, ...sports];

  return (
    <div className="overflow-hidden bg-black font-bold text-gray-300">
      <div className="animate-infinite-scroll-bar hover:pause inline-flex">
        <ul className="flex gap-4 py-4 pr-4 uppercase">
          {duplicatedSports.map((sport, i) => (
            <li
              key={`${sport + i}`}
              className="min-w-fit whitespace-nowrap rounded-3xl border-2 border-white px-4 py-4"
            >
              {sport}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
