import React, { useState } from "react";

const initialEvents = [
  {
    id: 1,
    initial: "AI",
    initialClass: "bg-primary-fixed text-primary",
    name: "AI Innovation Lab",
    type: "Hackathon Series",
    venue: "Virtual (Discord)",
    date: "Oct 12 - 14, 2024",
    status: "Live",
    statusClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    teams: "45 / 50",
  },
  {
    id: 2,
    initial: "DP",
    initialClass: "bg-surface-container-high text-outline",
    name: "Design Sprint Vol.",
    type: "UI/UX Workshop",
    venue: "London, UK",
    date: "Nov 02 - 03, 2024",
    status: "Draft",
    statusClass: "bg-secondary-fixed text-on-secondary-container",
    teams: "0 / 20",
  },
  {
    id: 3,
    initial: "BC",
    initialClass: "bg-primary-fixed text-secondary",
    name: "Blockchain Expo",
    type: "Annual Conference",
    venue: "New York, US",
    date: "Sep 20 - 22, 2024",
    status: "Complete",
    statusClass: "bg-secondary-container/50 text-on-secondary-container",
    teams: "120 / 120",
  },
];

export default function EventManagement() {
  const [events, setEvents] = useState(initialEvents);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    venue: "",
    date: "",
    status: "Draft",
    teams: "0 / 50",
  });

  const handleOpenModal = (event = null) => {
    if (event) {
      setEditingId(event.id);
      setFormData({
        name: event.name,
        type: event.type,
        venue: event.venue,
        date: event.date,
        status: event.status,
        teams: event.teams,
      });
    } else {
      setEditingId(null);
      setFormData({
        name: "",
        type: "",
        venue: "",
        date: "",
        status: "Draft",
        teams: "0 / 50",
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingId(null);
    setFormData({
      name: "",
      type: "",
      venue: "",
      date: "",
      status: "Draft",
      teams: "0 / 50",
    });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveEvent = () => {
    if (!formData.name || !formData.type || !formData.venue || !formData.date) {
      alert("Please fill in all fields");
      return;
    }

    if (editingId) {
      setEvents(
        events.map((e) =>
          e.id === editingId
            ? {
                ...e,
                name: formData.name,
                type: formData.type,
                venue: formData.venue,
                date: formData.date,
                status: formData.status,
                teams: formData.teams,
              }
            : e,
        ),
      );
    } else {
      const newEvent = {
        id: Math.max(...events.map((e) => e.id), 0) + 1,
        initial: formData.name.substring(0, 2).toUpperCase(),
        initialClass: "bg-primary-fixed text-primary",
        name: formData.name,
        type: formData.type,
        venue: formData.venue,
        date: formData.date,
        status: formData.status,
        statusClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
        teams: formData.teams,
      };
      setEvents([...events, newEvent]);
    }

    handleCloseModal();
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((e) => e.id !== id));
    setDeleteConfirm(null);
  };

  return (
    <section className="font-body text-on-surface">
      <header className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-1 flex items-center gap-2 text-xs font-medium text-secondary">
            <span>Admin</span>
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
            <span className="text-primary">Events Management</span>
          </p>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight">
            Event Directory
          </h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="relative block">
            <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              type="text"
              placeholder="Search events..."
              className="w-full rounded-full border border-transparent bg-surface-container-low py-3 pl-12 pr-4 text-sm outline-none transition focus:border-primary/20 focus:ring-2 focus:ring-primary/20 sm:w-72"
            />
          </label>
          <button
            onClick={() => handleOpenModal()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-white shadow-[0px_12px_28px_rgba(0,61,155,0.25)] transition hover:brightness-105 active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            Create New Event
          </button>
        </div>
      </header>

      <div className="mb-8 grid grid-cols-12 gap-6">
        <article className="col-span-12 overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest lg:col-span-8">
          <div className="relative h-full overflow-hidden p-6">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,61,155,0.08),rgba(0,82,204,0.03))]" />
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(0,61,155,0.25)_1px,transparent_0)] [background-size:22px_22px]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-4 flex items-start justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#ffd9cc] px-3 py-1 text-[11px] font-bold text-[#8a2a00]">
                  <span className="h-2 w-2 rounded-full bg-[#ff4b1f]" />
                  Live Now
                </span>
                <div className="flex -space-x-2">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXQwdvho8Zgs6yf6Pz_TiuVMg_HS0eAcmtTczMRrixqu8TxVA6jaKTi55mNGeT2qk3bf0h-hE1q_B3mYYM4RI1fDSffyRPnDFQHChRVJGK5GLPbVaOnA6etysuQ9gIKZl9fIGUDDYiKf0PI3MmPe-AjEkTgcLA1w92uTsY9mO9iA_6eLI6DBPiWyMDR2-RBlwn8Nqtuppf1m3ZXBOAigOMB5xiUDU9m3w5KTs27ZYhZ61_a-mr9dkdbtFIMBdL5JRUXWyuefSFKm85"
                    alt="Attendee"
                    className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABqhk27IY1_Xr6OgmFcBhrQUqiaWfGgK_z7DYHETU-Y-kpKVfUemQR3KYElT4xKMXR0S_CmA6u3fkWr_6xXP-LADVkXdg8zmM1jhZCGesN1iG227BpMgX0SOfCADjJO28URZ4mylLw1RNGwr0y4GzTxQqAmcoRPOVN_6jmSr4sIM1cxXCFb7d6SGR_wnpoynlqxXNrykbtEQ4UqfbOqXmAM36or_6agKqD0WzE4H3Dyoqi2VuGVWjEt55Lyp-DvzMtz-Z8n3nkZNho"
                    alt="Attendee"
                    className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  />
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-surface-container-high text-[10px] font-bold text-secondary">
                    +12
                  </span>
                </div>
              </div>

              <h2 className="mb-2 font-headline text-4xl font-extrabold tracking-tight">
                Global Tech Summit 2024
              </h2>
              <p className="mb-6 max-w-xl text-sm text-secondary">
                The flagship innovation event featuring 45+ speakers and 200
                competitive teams worldwide.
              </p>

              <div className="mt-auto grid max-w-lg grid-cols-3 gap-6 border-t border-outline-variant/30 pt-4">
                <Metric label="Participants" value="2,480" />
                <Metric label="Submissions" value="142" />
                <Metric label="Avg. Score" value="8.4" />
              </div>
            </div>
          </div>
        </article>

        <div className="col-span-12 grid gap-4 lg:col-span-4">
          <article className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-sm">
                <span className="material-symbols-outlined text-lg">
                  pending_actions
                </span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
                  Draft Events
                </p>
                <p className="font-headline text-3xl font-extrabold leading-none">
                  04
                </p>
              </div>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container-highest">
              <div className="h-full w-2/3 bg-primary" />
            </div>
          </article>

          <article className="rounded-2xl bg-primary p-5 text-white shadow-[0px_12px_28px_rgba(0,61,155,0.3)]">
            <div className="mb-3 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                <span className="material-symbols-outlined text-lg">
                  task_alt
                </span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed-dim">
                  Completed
                </p>
                <p className="font-headline text-3xl font-extrabold leading-none">
                  128
                </p>
              </div>
            </div>
            <p className="text-[11px] leading-relaxed text-primary-fixed-dim">
              Year-to-date performance is 12% higher than previous period.
            </p>
          </article>
        </div>
      </div>

      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-headline text-2xl font-bold">Event Catalog</h3>
          <div className="flex items-center gap-2 text-xs font-bold">
            <button className="rounded-full bg-white px-3 py-1.5 text-on-surface shadow-sm">
              Recent
            </button>
            <button className="rounded-full px-3 py-1.5 text-outline">
              Alphabetical
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-surface-container-low/60 text-[10px] uppercase tracking-widest text-outline">
                <tr>
                  <th className="px-6 py-4">Event Detail</th>
                  <th className="px-5 py-4">Venue</th>
                  <th className="px-5 py-4">Date Range</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Teams</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                {events.map((event) => (
                  <tr
                    key={event.id}
                    className="group transition hover:bg-surface-container-low/30"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`grid h-9 w-9 place-items-center rounded-lg text-xs font-bold ${event.initialClass}`}
                        >
                          {event.initial}
                        </div>
                        <div>
                          <p className="text-sm font-bold">{event.name}</p>
                          <p className="text-xs text-secondary">{event.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-secondary">
                      {event.venue}
                    </td>
                    <td className="px-5 py-4 text-sm text-secondary">
                      {event.date}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${event.statusClass}`}
                      >
                        {event.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm font-bold text-primary">
                      {event.teams}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-1.5">
                        <button
                          onClick={() => handleOpenModal(event)}
                          className="rounded-lg p-1.5 text-secondary hover:bg-surface-container-low hover:text-primary transition"
                        >
                          <span className="material-symbols-outlined text-lg">
                            edit
                          </span>
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(event.id)}
                          className="rounded-lg p-1.5 text-secondary hover:bg-surface-container-low hover:text-error transition"
                        >
                          <span className="material-symbols-outlined text-lg">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add/Edit Event Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-surface-container-lowest border border-outline-variant/40 p-6 shadow-2xl">
            <h2 className="mb-6 font-headline text-2xl font-bold">
              {editingId ? "Edit Event" : "Create New Event"}
            </h2>

            <form className="space-y-4">
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-outline">
                  Event Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter event name"
                  className="w-full rounded-xl bg-surface-container-low px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-outline">
                    Event Type *
                  </label>
                  <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleFormChange}
                    placeholder="e.g., Hackathon, Workshop"
                    className="w-full rounded-xl bg-surface-container-low px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-outline">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleFormChange}
                    className="w-full rounded-xl bg-surface-container-low px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2"
                  >
                    <option>Draft</option>
                    <option>Live</option>
                    <option>Complete</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-outline">
                    Date Range *
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleFormChange}
                    placeholder="e.g., Oct 12 - 14, 2024"
                    className="w-full rounded-xl bg-surface-container-low px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-outline">
                    Venue *
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleFormChange}
                    placeholder="City or Online"
                    className="w-full rounded-xl bg-surface-container-low px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-outline">
                  Teams Capacity
                </label>
                <input
                  type="text"
                  name="teams"
                  value={formData.teams}
                  onChange={handleFormChange}
                  placeholder="e.g., 0 / 50"
                  className="w-full rounded-xl bg-surface-container-low px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2"
                />
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 border-t border-surface-container-low pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-5 py-2 text-sm font-bold text-outline transition hover:text-on-surface"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveEvent}
                  className="rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-bold text-white shadow-[0px_8px_24px_rgba(0,61,155,0.25)] transition hover:brightness-105 active:scale-95"
                >
                  {editingId ? "Update Event" : "Create Event"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-surface-container-lowest border border-outline-variant/40 p-6 shadow-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-error-container">
                <span className="material-symbols-outlined text-error">
                  delete_outline
                </span>
              </div>
              <h2 className="font-headline text-xl font-bold">Delete Event?</h2>
            </div>
            <p className="mb-6 text-sm text-secondary">
              Are you sure you want to delete this event? This action cannot be
              undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-5 py-2 text-sm font-bold text-outline transition hover:text-on-surface"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteEvent(deleteConfirm)}
                className="rounded-lg bg-error px-5 py-2 text-sm font-bold text-white transition hover:brightness-110 active:scale-95"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <button className="fixed bottom-8 right-8 z-30 grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-white shadow-[0px_14px_30px_rgba(0,61,155,0.35)] transition hover:brightness-105 active:scale-95">
        <span className="material-symbols-outlined text-xl">bolt</span>
      </button>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
        {label}
      </p>
      <p className="font-headline text-3xl font-extrabold text-primary">
        {value}
      </p>
    </div>
  );
}
