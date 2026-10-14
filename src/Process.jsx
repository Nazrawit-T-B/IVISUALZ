const steps = [
  {
    number: "01",
    title: "Choose an algorithm",
    description: "Pick from a focused collection of algorithms and data structures.",
  },
  {
    number: "02",
    title: "Feed it your data",
    description: "Enter your own array, message, or grid, or start from a generated example.",
  },
  {
    number: "03",
    title: "Watch it think and learn",
    description: "Step forward, rewind, or let it run at your own pace.",
  },
];

const Process = () => {
  return (
    <div className="section-shell">
      <div className="max-w-4xl">
        <p className="section-kicker">The process</p>
        <h2>Three steps, no setup.</h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-[1.5rem] border border-black/10 bg-[#fffdf9] p-6 shadow-[0_10px_30px_rgba(24,24,27,0.04)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6d645e]">
              {step.number}
            </p>
            <h3 className="mt-4 text-2xl text-black">{step.title}</h3>
            <p className="mt-3 text-base text-black/70">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
