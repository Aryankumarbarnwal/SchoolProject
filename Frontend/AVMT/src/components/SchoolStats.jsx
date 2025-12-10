import StatsCard from "./statsCard";

const SchoolStats = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExcellence = currentYear - 1997; // since 1997

  const stats = [
    {
      label: "Total Students",
      value: 650,
      suffix: "+",
    },
    {
      label: "Dedicated Teachers",
      value: 22,
      suffix: "+",
    },
    {
      label: "Board Result (10th)",
      value: 96,
      suffix: "%",
    },
    {
      label: "Years of Excellence",
      value: yearsOfExcellence,
      suffix: "+",
    },
  ];

  return (
    <section className="mt-10 mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-800 mb-6">
        School Statistics
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        A quick glance at how Adarsh Vidya Mandir is growing in strength, results
        and excellence every year.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        {stats.map((s, idx) => (
          <StatsCard
            key={idx}
            label={s.label}
            value={s.value}
            suffix={s.suffix}
          />
        ))}
      </div>
    </section>
  );
};

export default SchoolStats;
