import React from "react";

const kpis = [
  { title: "Total Events", value: "148", subtitle: "24 Active", icon: "event" },
  { title: "Teams", value: "72", subtitle: "Registered", icon: "groups" },
  {
    title: "Revenue",
    value: "$84.2k",
    subtitle: "This month",
    icon: "payments",
  },
  { title: "Judges", value: "28", subtitle: "Active", icon: "gavel" },
];

const recentActivity = [
  {
    id: 1,
    title: "Team Alpha registered",
    time: "2 mins ago",
    status: "New",
    statusClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  },
  {
    id: 2,
    title: "Scores submitted for Tech Summit 2024",
    time: "10 mins ago",
    status: "Updated",
    statusClass: "bg-secondary-container text-on-secondary-container",
  },
  {
    id: 3,
    title: "Payment received for Regional Finals",
    time: "21 mins ago",
    status: "Paid",
    statusClass: "bg-primary-fixed text-on-primary-fixed-variant",
  },
  {
    id: 4,
    title: "New judge invitation sent",
    time: "35 mins ago",
    status: "Sent",
    statusClass: "bg-surface-container-high text-slate-700",
  },
];

export default function AdminDashboard() {
  return (
    <section className="bg-surface text-on-surface min-h-screen font-body antialiased overflow-x-hidden">
      <div className="min-h-screen">
        <header className="flex items-center justify-between w-full px-8 py-4 h-20 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl sticky top-0 z-30 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h1 className="text-3xl font-black tracking-tight font-headline">
              Administrative Overview
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Welcome back. Here is your latest event management summary.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-high text-primary font-bold text-sm rounded-lg hover:bg-surface-container-highest transition-colors active:scale-95">
              <span className="material-symbols-outlined text-lg">
                file_download
              </span>
              Export Data
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-primary text-white font-bold text-sm rounded-lg shadow-lg shadow-primary/20 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-lg">add</span>
              Create Event
            </button>
          </div>
        </header>

        <div className="p-8 space-y-8">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((item) => (
              <article
                key={item.title}
                className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 font-label">
                    {item.title}
                  </span>
                  <span className="material-symbols-outlined text-primary">
                    {item.icon}
                  </span>
                </div>
                <p className="text-3xl font-black font-headline text-on-surface">
                  {item.value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{item.subtitle}</p>
              </article>
            ))}
          </section>

          <section className="grid grid-cols-12 gap-6">
            <article className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold font-headline">
                  Weekly Registration Trend
                </h2>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 font-label">
                  Last 7 Days
                </span>
              </div>

              <div className="grid grid-cols-7 gap-3">
                {[42, 58, 65, 74, 88, 63, 47].map((height, index) => {
                  const days = [
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun",
                  ];
                  return (
                    <div
                      key={days[index]}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="flex h-44 w-full items-end rounded-lg bg-surface-container-low p-2">
                        <div
                          className="w-full rounded-md bg-linear-to-t from-primary to-primary-container"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-label">
                        {days[index]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
              <h2 className="text-xl font-bold font-headline mb-4">
                System Health
              </h2>
              <div className="space-y-4">
                <HealthBar
                  label="API Latency"
                  value="42ms"
                  width="92%"
                  color="bg-emerald-500"
                />
                <HealthBar
                  label="Database Load"
                  value="28%"
                  width="28%"
                  color="bg-primary"
                />
                <HealthBar
                  label="Storage"
                  value="74%"
                  width="74%"
                  color="bg-orange-500"
                />
              </div>
            </article>
          </section>

          <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-surface-container-low flex items-center justify-between">
              <h2 className="text-xl font-bold font-headline">
                Recent Activity
              </h2>
              <button className="text-sm font-bold text-primary hover:underline">
                View All
              </button>
            </div>

            <div className="divide-y divide-surface-container-low">
              {recentActivity.map((item) => (
                <div
                  key={item.id}
                  className="px-6 py-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-semibold text-on-surface">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{item.time}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${item.statusClass}`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

function HealthBar({ label, value, width, color }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-slate-500 font-medium">{label}</span>
        <span className="text-xs font-bold text-slate-700">{value}</span>
      </div>
      <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width }}></div>
      </div>
    </div>
  );
}
