import React, { useState } from "react";

export default function ParticipantManagement() {
  const [participants, setParticipants] = useState([
    {
      id: 1,
      name: "David Chen",
      email: "david.chen@example.com",
      role: "Team Lead",
      team: "CyberSentinels",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC54B4aEJax67h93Tt7YO35FxZXfJlx5r_eEUUowVYL9wsVuUNrNb-br3RJaajU8rui6zGTCidICmFJ5hym-OsG2JIqaS4GYOtyODmyEkpo68V7omD1xuKek0BX8Q6VNmrfH_uj1uONd2-4e9HifXQyg4iEbOTDTaonAi62na2rjUKxYbwKlC4IKcHMI6h9TCv6-DYbOascgRTtrpfKAX6Szydv7zJSC1_L-k51ZZxXrxingfbi4PkaHm_YOkNC85KZoADsOMndd4h-",
      joinDate: "Oct 12, 2024",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      email: "sarah.jenkins@example.com",
      role: "Developer",
      team: "EcoFlow AI",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAVMprmgQ3p09cecujI7CfLD0xtbj-OeF2vqriF_i_QIPDvCdMGGyT1BKHag69fl5eJe_k1BIj92g6UL2v9GWP0-btrF08Y4-ODqZIYbwYkD5AQXKnVeHGrThFOKgeITyCEcreiPq5BUySgiVsFwlX7fnry09DK8ZvjpFk4OVxPZpMbriFXxopUsEWdRHJd2tAw-vIMJV6oT8WdMITfLQ7Qsb13M98NUVDlI5z3htrvDbvvHiqB3HCWEXpST0oapm4pnPWJ58AULtQ5",
      joinDate: "Oct 12, 2024",
      status: "Active",
    },
    {
      id: 3,
      name: "Marcus Thorne",
      email: "marcus.thorne@example.com",
      role: "Team Lead",
      team: "Visionary Lab",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCRImNXFhsVnmsF2ew8oBn-OTuISp54-HfEgDhyzEP3cWuubDtJFFoaoNq55levp_DdKsxaZbpEwtGTFr19JsJxkrR2pgEekGVT9Pex-hqodTNGmxip8cdU5P5-hyFqOq07bcC8EEFiQvJmGVIMsyeoU5_nSF3vk5avhieHPiAbz0bWQlPUZpYdx_nWufp9ksQsszWezXBSFbbaw6G500j4J1HjmaLe7ucQmf9pZ1ddTYTe9dHmVDr6uY03iX_IMDbOd2z2snzfC6g1",
      joinDate: "Oct 14, 2024",
      status: "Active",
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      email: "elena.rodriguez@example.com",
      role: "Designer",
      team: "Quantum Core",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDLD32-aYtMVwMAB1mWPEhlw_6dYGhPPgLFLSb4gAxaT8xSO7MjE9LSZLhoMB-uUvmo3aylqann4kPics3XIjmYtQ0z7fol4SFuqWpB0r5wr6DQ-qvf91hW7u_CfpDrLsiEFcYjdq6l55RADoE0Pg-0r3vfa3VtWlGZmJhVG4E8cYDp0s67oRNvFa1S-CTqn_njx-WuXMRN8IDqDTDHXE2teon--LrUrdSUr_qX4A50MI5S11-DPpXa3mN8joxPKiJ1LHhWl2kTm7fb",
      joinDate: "Oct 15, 2024",
      status: "Pending",
    },
    {
      id: 5,
      name: "James Park",
      email: "james.park@example.com",
      role: "Backend Developer",
      team: "EcoFlow AI",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBXQwdvho8Zgs6yf6Pz_TiuVMg_HS0eAcmtTczMRrixqu8TxVA6jaKTi55mNGeT2qk3bf0h-hE1q_B3mYYM4RI1fDSffyRPnDFQHChRVJGK5GLPbVaOnA6etysuQ9gIKZl9fIGUDDYiKf0PI3MmPe-AjEkTgcLA1w92uTsY9mO9iA_6eLI6DBPiWyMDR2-RBlwn8Nqtuppf1m3ZXBOAigOMB5xiUDU9m3w5KTs27ZYhZ61_a-mr9dkdbtFIMBdL5JRUXWyuefSFKm85",
      joinDate: "Oct 16, 2024",
      status: "Active",
    },
    {
      id: 6,
      name: "Lisa Chen",
      email: "lisa.chen@example.com",
      role: "Researcher",
      team: "EcoFlow AI",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuABqhk27IY1_Xr6OgmFcBhrQUqiaWfGgK_z7DYHETU-Y-kpKVfUemQR3KYElT4xKMXR0S_CmA6u3fkWr_6xXP-LADVkXdg8zmM1jhZCGesN1iG227BpMgX0SOfCADjJO28URZ4mylLw1RNGwr0y4GzTxQqAmcoRPOVN_6jmSr4sIM1cxXCFb7d6SGR_wnpoynlqxXNrykbtEQ4UqfbOqXmAM36or_6agKqD0WzE4H3Dyoqi2VuGVWjEt55Lyp-DvzMtz-Z8n3nkZNho",
      joinDate: "Oct 17, 2024",
      status: "Active",
    },
    {
      id: 7,
      name: "Alex Rivera",
      email: "alex.rivera@example.com",
      role: "Frontend Developer",
      team: "CyberSentinels",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDvZ-iPF1iacjNPQTsz-mm17flAiR_HkYEC38mUXRbQuMhx7H05h_E6iAUZyGm8LCEk6KspRiaeZS_8W80e96HfmIFyT_N7X24J2nNu0k-XRhqeJt-_4ehkWD7fiimT8Lj7oBuf6A05dlOIrXGc3TiUml_KyA_oH_HavMsTTdt0YvI5-HxUa_ds83oft_P187IMU2A6h89Tb8By661UHanjgi8-At0U5StHB9FmcUoZXH4XL1d6ENNATZ-WNhjVuWxre92tl1W9xv1c",
      joinDate: "Oct 18, 2024",
      status: "Active",
    },
    {
      id: 8,
      name: "Nina Petrov",
      email: "nina.petrov@example.com",
      role: "UI/UX Designer",
      team: "Visionary Lab",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCyX8cBugzg9xU8iK5oD9r44sDpgetXT2ZJVEns2rphQloIynQ9GuJTRgcdcKgOqOLcJ4jJTwnW5VVK2Rhi5ZjMUvBSdRf-YczYymCkFH-DqjZ9vTe53RpgB_WSefozaqDwaV9DrrqfEHy6hCgn_pNzDCdPoIQte1JZiGVpDdt-BXNhnNcKOleL0f8DWLfDSd0ggCD5IWrCr56pGj4uIsMOsBrHwBWC2-WiF72AW1jidJDIcugYYTDDWqyk7E_Bx8hEe17rPThdY5mX",
      joinDate: "Oct 19, 2024",
      status: "Pending",
    },
  ]);

  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const handleDeleteParticipant = (id) => {
    setParticipants(participants.filter((p) => p.id !== id));
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
            <span className="text-primary">Participants</span>
          </p>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight">
            Participants Management
          </h1>
        </div>
        <div className="flex gap-3">
          <label className="relative block">
            <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              type="text"
              placeholder="Search participants..."
              className="w-full rounded-full border border-transparent bg-surface-container-low py-3 pl-12 pr-4 text-sm outline-none transition focus:border-primary/20 focus:ring-2 focus:ring-primary/20 sm:w-72"
            />
          </label>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
              Total Participants
            </p>
            <span className="material-symbols-outlined text-primary text-2xl">
              person
            </span>
          </div>
          <h3 className="font-headline text-3xl font-extrabold">
            {participants.length}
          </h3>
          <p className="text-xs text-secondary mt-2">Across all events</p>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
              Active Members
            </p>
            <span className="material-symbols-outlined text-tertiary text-2xl">
              check_circle
            </span>
          </div>
          <h3 className="font-headline text-3xl font-extrabold">
            {participants.filter((p) => p.status === "Active").length}
          </h3>
          <p className="text-xs text-secondary mt-2">Currently active</p>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
              Pending Verification
            </p>
            <span className="material-symbols-outlined text-secondary text-2xl">
              pending_actions
            </span>
          </div>
          <h3 className="font-headline text-3xl font-extrabold">
            {participants.filter((p) => p.status === "Pending").length}
          </h3>
          <p className="text-xs text-secondary mt-2">Awaiting approval</p>
        </div>
      </div>

      {/* Participants Table */}
      <div className="overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low/60 text-[10px] uppercase tracking-widest text-outline border-b border-outline-variant/40">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Team</th>
                <th className="px-6 py-4">Join Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {participants.map((participant) => (
                <tr
                  key={participant.id}
                  className="group transition hover:bg-surface-container-low/30"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={participant.avatar}
                        alt={participant.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-bold">{participant.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-secondary">
                      {participant.email}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-3 py-1 rounded-full bg-primary-container/20 text-xs font-bold text-primary">
                      {participant.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{participant.team}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-secondary">
                      {participant.joinDate}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${
                        participant.status === "Active"
                          ? "bg-tertiary-fixed text-on-tertiary-fixed-variant"
                          : "bg-secondary-fixed text-on-secondary-container"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {participant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition">
                      <button className="rounded-lg p-1.5 text-secondary hover:bg-surface-container-low hover:text-primary transition">
                        <span className="material-symbols-outlined text-lg">
                          edit
                        </span>
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(participant.id)}
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
              <h2 className="font-headline text-xl font-bold">
                Delete Participant?
              </h2>
            </div>
            <p className="mb-6 text-sm text-secondary">
              Are you sure you want to delete this participant? This action
              cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-5 py-2 text-sm font-bold text-outline transition hover:text-on-surface"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteParticipant(deleteConfirm)}
                className="rounded-lg bg-error px-5 py-2 text-sm font-bold text-white transition hover:brightness-110 active:scale-95"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
