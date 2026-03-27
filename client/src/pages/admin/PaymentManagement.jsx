import React from "react";

export default function PaymentManagement() {
  const eventPayments = [
    { id: 1, eventName: "Global Hackathon 2024", price: 150 },
    { id: 2, eventName: "Tech Summit 2024", price: 120 },
    { id: 3, eventName: "Innovation Challenge", price: 100 },
    { id: 4, eventName: "Regional Finals", price: 180 },
  ];

  const totalRevenue = eventPayments.reduce((sum, item) => sum + item.price, 0);
  const averagePrice = totalRevenue / eventPayments.length;
  const highestPricedEvent = eventPayments.reduce(
    (max, item) => (item.price > max.price ? item : max),
    eventPayments[0],
  );

  return (
    <section className="bg-surface text-on-surface min-h-screen font-body antialiased overflow-x-hidden">
      <div className="min-h-screen">
        <header className="flex items-center justify-between w-full px-8 py-4 h-20 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl sticky top-0 z-30 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-50 font-headline">
            Payments
          </h2>
        </header>

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-black tracking-tight font-headline">
              Event Payments
            </h1>
            <p className="mt-2 text-slate-500">
              Select an event and click Pay to complete payment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <article className="rounded-xl bg-surface-container-lowest border border-slate-100 dark:border-slate-800 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 font-label">
                Total Revenue
              </p>
              <p className="mt-2 text-3xl font-black font-headline text-primary">
                ${totalRevenue.toFixed(2)}
              </p>
            </article>

            <article className="rounded-xl bg-surface-container-lowest border border-slate-100 dark:border-slate-800 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 font-label">
                Events Count
              </p>
              <p className="mt-2 text-3xl font-black font-headline text-on-surface">
                {eventPayments.length}
              </p>
            </article>

            <article className="rounded-xl bg-surface-container-lowest border border-slate-100 dark:border-slate-800 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 font-label">
                Avg / Highest Price
              </p>
              <p className="mt-2 text-2xl font-black font-headline text-on-surface">
                ${averagePrice.toFixed(2)}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Highest: {highestPricedEvent.eventName} ($
                {highestPricedEvent.price.toFixed(2)})
              </p>
            </article>
          </div>

          <div className="bg-surface-container-lowest rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500 font-label">
                      Event Name
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500 font-label text-right">
                      Price
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500 font-label text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {eventPayments.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-surface-container-low/40 transition-colors"
                    >
                      <td className="px-6 py-5 font-semibold text-on-surface">
                        {item.eventName}
                      </td>
                      <td className="px-6 py-5 text-right font-bold text-on-surface">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button
                          className="px-5 py-2.5 rounded-lg bg-linear-to-br from-primary-container to-primary text-white text-sm font-bold shadow-md hover:opacity-90 active:scale-95 transition-all"
                          onClick={() =>
                            alert(`Payment initiated for ${item.eventName}`)
                          }
                        >
                          Pay
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
