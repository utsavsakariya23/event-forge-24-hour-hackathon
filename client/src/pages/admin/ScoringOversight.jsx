const summaryCards = [
  {
    label: "Total Teams Evaluated",
    value: "124",
    delta: "+8% vs last week",
    icon: "groups",
    tone: "bg-surface-container-lowest border border-outline-variant/40",
  },
  {
    label: "Average Final Score",
    value: "86.4",
    delta: "+1.2 points",
    icon: "analytics",
    tone: "bg-surface-container-lowest border border-outline-variant/40",
  },
  {
    label: "Completed Reviews",
    value: "97%",
    delta: "3 pending approvals",
    icon: "task_alt",
    tone: "bg-primary text-white shadow-[0px_10px_26px_rgba(0,61,155,0.3)]",
  },
];

const submissionsByDay = [
  { day: "Mon", value: 18 },
  { day: "Tue", value: 22 },
  { day: "Wed", value: 26 },
  { day: "Thu", value: 21 },
  { day: "Fri", value: 29 },
  { day: "Sat", value: 24 },
  { day: "Sun", value: 19 },
];

const scoreDistribution = [
  { label: "90-100", value: 31, color: "bg-tertiary" },
  { label: "80-89", value: 47, color: "bg-primary" },
  { label: "70-79", value: 28, color: "bg-secondary" },
  { label: "Below 70", value: 18, color: "bg-error" },
];

const trackPerformance = [
  { track: "AI / ML", avg: 91.8 },
  { track: "Fintech", avg: 87.4 },
  { track: "Health Tech", avg: 84.2 },
  { track: "Web3", avg: 82.7 },
  { track: "Social Impact", avg: 80.9 },
];

const topTeams = [
  { name: "Quantum Leap", event: "Global Hackathon 2024", score: 98.5 },
  { name: "CyberSentinels", event: "Global Hackathon 2024", score: 94.2 },
  { name: "NovaStack", event: "Tech Summit 2024", score: 93.6 },
  { name: "Neural Knights", event: "Global Hackathon 2024", score: 91.8 },
  { name: "Circuit Breakers", event: "Tech Summit 2024", score: 90.3 },
];

function maxValue(list, key) {
  return list.reduce((max, item) => (item[key] > max ? item[key] : max), 0);
}

export default function ScoringOversight() {
  const maxDayValue = maxValue(submissionsByDay, "value");
  const distributionTotal = scoreDistribution.reduce(
    (sum, item) => sum + item.value,
    0,
  );
  const maxTrackScore = maxValue(trackPerformance, "avg");

  return (
    <section className="font-body text-on-surface">
      <header className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-1 text-xs font-medium text-secondary">
            Admin / Reports
          </p>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight">
            Analytics Reports
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Snapshot of scoring activity, score health, and team performance.
          </p>
        </div>
        <button className="w-fit rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-bold text-white shadow-[0px_10px_24px_rgba(0,61,155,0.28)] active:scale-95">
          Export Report
        </button>
      </header>

      <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {summaryCards.map((card) => (
          <article key={card.label} className={`rounded-2xl p-5 ${card.tone}`}>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-outline">
                {card.label}
              </p>
              <span className="material-symbols-outlined text-xl">
                {card.icon}
              </span>
            </div>
            <p className="font-headline text-4xl font-extrabold">
              {card.value}
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-500">
              {card.delta}
            </p>
          </article>
        ))}
      </div>

      <div className="mb-8 grid grid-cols-12 gap-6">
        <article className="col-span-12 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 lg:col-span-7">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-headline text-2xl font-bold">
              Submissions Trend
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-outline">
              Last 7 Days
            </p>
          </div>
          <div className="grid grid-cols-7 gap-3">
            {submissionsByDay.map((item) => (
              <div key={item.day} className="flex flex-col items-center gap-2">
                <div className="flex h-40 w-full items-end rounded-xl bg-surface-container-low p-2">
                  <div
                    className="w-full rounded-md bg-linear-to-t from-primary to-primary-container"
                    style={{ height: `${(item.value / maxDayValue) * 100}%` }}
                    title={`${item.value} submissions`}
                  ></div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
                  {item.day}
                </p>
                <p className="text-xs font-bold text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="col-span-12 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 lg:col-span-5">
          <h3 className="mb-5 font-headline text-xl font-bold">
            Score Distribution
          </h3>
          <div className="mb-5 flex items-center justify-center">
            <div
              className="relative h-40 w-40 rounded-full"
              style={{
                background: `conic-gradient(#24a148 0 ${
                  (scoreDistribution[0].value / distributionTotal) * 360
                }deg, #0052cc ${
                  (scoreDistribution[0].value / distributionTotal) * 360
                }deg ${
                  ((scoreDistribution[0].value + scoreDistribution[1].value) /
                    distributionTotal) *
                  360
                }deg, #6f42c1 ${
                  ((scoreDistribution[0].value + scoreDistribution[1].value) /
                    distributionTotal) *
                  360
                }deg ${
                  ((scoreDistribution[0].value +
                    scoreDistribution[1].value +
                    scoreDistribution[2].value) /
                    distributionTotal) *
                  360
                }deg, #d7263d ${
                  ((scoreDistribution[0].value +
                    scoreDistribution[1].value +
                    scoreDistribution[2].value) /
                    distributionTotal) *
                  360
                }deg 360deg)`,
              }}
            >
              <div className="absolute inset-5 grid place-items-center rounded-full bg-surface-container-lowest text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
                  Total
                </p>
                <p className="font-headline text-2xl font-extrabold">
                  {distributionTotal}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {scoreDistribution.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${item.color}`}
                  ></span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <span className="text-sm font-bold text-primary">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="mb-8 grid grid-cols-12 gap-6">
        <article className="col-span-12 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 lg:col-span-7">
          <h3 className="mb-4 font-headline text-xl font-bold">
            Track Performance
          </h3>
          <div className="space-y-3">
            {trackPerformance.map((item) => (
              <div key={item.track}>
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-sm font-semibold">{item.track}</p>
                  <p className="text-sm font-bold text-primary">
                    {item.avg.toFixed(1)}
                  </p>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-container-low">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-primary to-secondary"
                    style={{ width: `${(item.avg / maxTrackScore) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="col-span-12 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 lg:col-span-5">
          <h3 className="mb-4 font-headline text-xl font-bold">Top Teams</h3>
          <div className="space-y-3">
            {topTeams.map((team, index) => (
              <div
                key={team.name}
                className="flex items-center justify-between rounded-xl bg-surface-container-low/60 px-3 py-2.5"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-7 w-7 place-items-center rounded-full bg-primary-fixed text-[10px] font-black text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{team.name}</p>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-outline">
                      {team.event}
                    </p>
                  </div>
                </div>
                <p className="font-headline text-lg font-extrabold text-primary">
                  {team.score.toFixed(1)}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="relative overflow-hidden rounded-2xl bg-linear-to-br from-inverse-surface to-[#18202a] p-6 text-white shadow-[0px_14px_30px_rgba(22,28,36,0.35)]">
        <span className="material-symbols-outlined absolute -right-8 -bottom-10 text-[160px] text-white/5">
          monitoring
        </span>
        <div className="relative z-10 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-headline text-2xl font-bold">Weekly Summary</h3>
            <p className="text-sm text-slate-300">
              Overall scoring quality improved by 8%. High-score segment
              expanded by 4 teams.
            </p>
          </div>
          <button className="w-fit rounded-full bg-white/15 px-5 py-2.5 text-sm font-bold backdrop-blur-sm transition hover:bg-white/25">
            Download Insights
          </button>
        </div>
      </article>
    </section>
  );
}
