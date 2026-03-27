import React, { useState } from "react";

export default function Teams() {
  const [selectedEvent, setSelectedEvent] = useState("All Events");

  const teams = [
    {
      id: 1,
      name: "CyberSentinels",
      teamId: "T001",
      event: "AI Innovation Lab",
      eventId: "AI001",
      members: [
        {
          name: "David Chen",
          role: "Lead",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC54B4aEJax67h93Tt7YO35FxZXfJlx5r_eEUUowVYL9wsVuUNrNb-br3RJaajU8rui6zGTCidICmFJ5hym-OsG2JIqaS4GYOtyODmyEkpo68V7omD1xuKek0BX8Q6VNmrfH_uj1uONd2-4e9HifXQyg4iEbOTDTaonAi62na2rjUKxYbwKlC4IKcHMI6h9TCv6-DYbOascgRTtrpfKAX6Szydv7zJSC1_L-k51ZZxXrxingfbi4PkaHm_YOkNC85KZoADsOMndd4h-",
        },
        {
          name: "Alex Rivera",
          role: "Co-lead",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDvZ-iPF1iacjNPQTsz-mm17flAiR_HkYEC38mUXRbQuMhx7H05h_E6iAUZyGm8LCEk6KspRiaeZS_8W80e96HfmIFyT_N7X24J2nNu0k-XRhqeJt-_4ehkWD7fiimT8Lj7oBuf6A05dlOIrXGc3TiUml_KyA_oH_HavMsTTdt0YvI5-HxUa_ds83oft_P187IMU2A6h89Tb8By661UHanjgi8-At0U5StHB9FmcUoZXH4XL1d6ENNATZ-WNhjVuWxre92tl1W9xv1c",
        },
        {
          name: "Sarah Johnson",
          role: "Developer",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAVMprmgQ3p09cecujI7CfLD0xtbj-OeF2vqriF_i_QIPDvCdMGGyT1BKHag69fl5eJe_k1BIj92g6UL2v9GWP0-btrF08Y4-ODqZIYbwYkD5AQXKnVeHGrThFOKgeITyCEcreiPq5BUySgiVsFwlX7fnry09DK8ZvjpFk4OVxPZpMbriFXxopUsEWdRHJd2tAw-vIMJV6oT8WdMITfLQ7Qsb13M98NUVDlI5z3htrvDbvvHiqB3HCWEXpST0oapm4pnPWJ58AULtQ5",
        },
        {
          name: "Mike Wong",
          role: "Designer",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCRImNXFhsVnmsF2ew8oBn-OTuISp54-HfEgDhyzEP3cWuubDtJFFoaoNq55levp_DdKsxaZbpEwtGTFr19JsJxkrR2pgEekGVT9Pex-hqodTNGmxip8cdU5P5-hyFqOq07bcC8EEFiQvJmGVIMsyeoU5_nSF3vk5avhieHPiAbz0bWQlPUZpYdx_nWufp9ksQsszWezXBSFbbaw6G500j4J1HjmaLe7ucQmf9pZ1ddTYTe9dHmVDr6uY03iX_IMDbOd2z2snzfC6g1",
        },
      ],
      membersCount: 4,
      status: "Active",
      statusColor: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    },
    {
      id: 2,
      name: "EcoFlow AI",
      teamId: "T002",
      event: "Blockchain Expo",
      eventId: "BC002",
      members: [
        {
          name: "Elena Rodriguez",
          role: "Lead",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDLD32-aYtMVwMAB1mWPEhlw_6dYGhPPgLFLSb4gAxaT8xSO7MjE9LSZLhoMB-uUvmo3aylqann4kPics3XIjmYtQ0z7fol4SFuqWpB0r5wr6DQ-qvf91hW7u_CfpDrLsiEFcYjdq6l55RADoE0Pg-0r3vfa3VtWlGZmJhVG4E8cYDp0s67oRNvFa1S-CTqn_njx-WuXMRN8IDqDTDHXE2teon--LrUrdSUr_qX4A50MI5S11-DPpXa3mN8joxPKiJ1LHhWl2kTm7fb",
        },
        {
          name: "James Park",
          role: "Developer",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBXQwdvho8Zgs6yf6Pz_TiuVMg_HS0eAcmtTczMRrixqu8TxVA6jaKTi55mNGeT2qk3bf0h-hE1q_B3mYYM4RI1fDSffyRPnDFQHChRVJGK5GLPbVaOnA6etysuQ9gIKZl9fIGUDDYiKf0PI3MmPe-AjEkTgcLA1w92uTsY9mO9iA_6eLI6DBPiWyMDR2-RBlwn8Nqtuppf1m3ZXBOAigOMB5xiUDU9m3w5KTs27ZYhZ61_a-mr9dkdbtFIMBdL5JRUXWyuefSFKm85",
        },
        {
          name: "Lisa Chen",
          role: "Researcher",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuABqhk27IY1_Xr6OgmFcBhrQUqiaWfGgK_z7DYHETU-Y-kpKVfUemQR3KYElT4xKMXR0S_CmA6u3fkWr_6xXP-LADVkXdg8zmM1jhZCGesN1iG227BpMgX0SOfCADjJO28URZ4mylLw1RNGwr0y4GzTxQqAmcoRPOVN_6jmSr4sIM1cxXCFb7d6SGR_wnpoynlqxXNrykbtEQ4UqfbOqXmAM36or_6agKqD0WzE4H3Dyoqi2VuGVWjEt55Lyp-DvzMtz-Z8n3nkZNho",
        },
      ],
      membersCount: 3,
      status: "Active",
      statusColor: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    },
    {
      id: 3,
      name: "Visionary Lab",
      teamId: "T003",
      event: "Design Sprint Vol.",
      eventId: "DS003",
      members: [
        {
          name: "Marcus Thorne",
          role: "Lead",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCRImNXFhsVnmsF2ew8oBn-OTuISp54-HfEgDhyzEP3cWuubDtJFFoaoNq55levp_DdKsxaZbpEwtGTFr19JsJxkrR2pgEekGVT9Pex-hqodTNGmxip8cdU5P5-hyFqOq07bcC8EEFiQvJmGVIMsyeoU5_nSF3vk5avhieHPiAbz0bWQlPUZpYdx_nWufp9ksQsszWezXBSFbbaw6G500j4J1HjmaLe7ucQmf9pZ1ddTYTe9dHmVDr6uY03iX_IMDbOd2z2snzfC6g1",
        },
        {
          name: "Nina Petrov",
          role: "Designer",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDvZ-iPF1iacjNPQTsz-mm17flAiR_HkYEC38mUXRbQuMhx7H05h_E6iAUZyGm8LCEk6KspRiaeZS_8W80e96HfmIFyT_N7X24J2nNu0k-XRhqeJt-_4ehkWD7fiimT8Lj7oBuf6A05dlOIrXGc3TiUml_KyA_oH_HavMsTTdt0YvI5-HxUa_ds83oft_P187IMU2A6h89Tb8By661UHanjgi8-At0U5StHB9FmcUoZXH4XL1d6ENNATZ-WNhjVuWxre92tl1W9xv1c",
        },
      ],
      membersCount: 2,
      status: "Inactive",
      statusColor: "bg-secondary-fixed text-on-secondary-container",
    },
    {
      id: 4,
      name: "Quantum Core",
      teamId: "T004",
      event: "AI Innovation Lab",
      eventId: "AI001",
      members: [
        {
          name: "Dr. Aris Thorne",
          role: "Lead",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCyX8cBugzg9xU8iK5oD9r44sDpgetXT2ZJVEns2rphQloIynQ9GuJTRgcdcKgOqOLcJ4jJTwnW5VVK2Rhi5ZjMUvBSdRf-YczYymCkFH-DqjZ9vTe53RpgB_WSefozaqDwaV9DrrqfEHy6hCgn_pNzDCdPoIQte1JZiGVpDdt-BXNhnNcKOleL0f8DWLfDSd0ggCD5IWrCr56pGj4uIsMOsBrHwBWC2-WiF72AW1jidJDIcugYYTDDWqyk7E_Bx8hEe17rPThdY5mX",
        },
        {
          name: "Sophia Reyes",
          role: "Developer",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAVMprmgQ3p09cecujI7CfLD0xtbj-OeF2vqriF_i_QIPDvCdMGGyT1BKHag69fl5eJe_k1BIj92g6UL2v9GWP0-btrF08Y4-ODqZIYbwYkD5AQXKnVeHGrThFOKgeITyCEcreiPq5BUySgiVsFwlX7fnry09DK8ZvjpFk4OVxPZpMbriFXxopUsEWdRHJd2tAw-vIMJV6oT8WdMITfLQ7Qsb13M98NUVDlI5z3htrvDbvvHiqB3HCWEXpST0oapm4pnPWJ58AULtQ5",
        },
        {
          name: "Kevin Adams",
          role: "Developer",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBXQwdvho8Zgs6yf6Pz_TiuVMg_HS0eAcmtTczMRrixqu8TxVA6jaKTi55mNGeT2qk3bf0h-hE1q_B3mYYM4RI1fDSffyRPnDFQHChRVJGK5GLPbVaOnA6etysuQ9gIKZl9fIGUDDYiKf0PI3MmPe-AjEkTgcLA1w92uTsY9mO9iA_6eLI6DBPiWyMDR2-RBlwn8Nqtuppf1m3ZXBOAigOMB5xiUDU9m3w5KTs27ZYhZ61_a-mr9dkdbtFIMBdL5JRUXWyuefSFKm85",
        },
        {
          name: "Rachel Torres",
          role: "PM",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuABqhk27IY1_Xr6OgmFcBhrQUqiaWfGgK_z7DYHETU-Y-kpKVfUemQR3KYElT4xKMXR0S_CmA6u3fkWr_6xXP-LADVkXdg8zmM1jhZCGesN1iG227BpMgX0SOfCADjJO28URZ4mylLw1RNGwr0y4GzTxQqAmcoRPOVN_6jmSr4sIM1cxXCFb7d6SGR_wnpoynlqxXNrykbtEQ4UqfbOqXmAM36or_6agKqD0WzE4H3Dyoqi2VuGVWjEt55Lyp-DvzMtz-Z8n3nkZNho",
        },
      ],
      membersCount: 4,
      status: "Active",
      statusColor: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    },
  ];

  const events = [
    "All Events",
    "AI Innovation Lab",
    "Design Sprint Vol.",
    "Blockchain Expo",
  ];

  const filteredTeams =
    selectedEvent === "All Events"
      ? teams
      : teams.filter((team) => team.event === selectedEvent);

  return (
    <section className="font-body text-on-surface">
      <header className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-1 flex items-center gap-2 text-xs font-medium text-secondary">
            <span>Admin</span>
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
            <span className="text-primary">Teams Management</span>
          </p>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight">
            Team Directory
          </h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="relative block">
            <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              type="text"
              placeholder="Search teams..."
              className="w-full rounded-full border border-transparent bg-surface-container-low py-3 pl-12 pr-4 text-sm outline-none transition focus:border-primary/20 focus:ring-2 focus:ring-primary/20 sm:w-72"
            />
          </label>
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="rounded-full bg-surface-container-low px-5 py-3 text-sm font-bold outline-none border border-transparent ring-primary/20 transition focus:ring-2 hover:bg-surface-container-highest"
          >
            {events.map((event) => (
              <option key={event} value={event}>
                {event}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
              Total Teams
            </p>
            <span className="material-symbols-outlined text-primary text-2xl">
              groups
            </span>
          </div>
          <h3 className="font-headline text-3xl font-extrabold">
            {filteredTeams.length}
          </h3>
          <p className="text-xs text-secondary mt-2">Across all events</p>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
              Total Members
            </p>
            <span className="material-symbols-outlined text-secondary text-2xl">
              person
            </span>
          </div>
          <h3 className="font-headline text-3xl font-extrabold">
            {filteredTeams.reduce((acc, team) => acc + team.membersCount, 0)}
          </h3>
          <p className="text-xs text-secondary mt-2">Participating members</p>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
              Active Teams
            </p>
            <span className="material-symbols-outlined text-tertiary text-2xl">
              check_circle
            </span>
          </div>
          <h3 className="font-headline text-3xl font-extrabold">
            {filteredTeams.filter((t) => t.status === "Active").length}
          </h3>
          <p className="text-xs text-secondary mt-2">Currently active</p>
        </div>
      </div>

      {/* Teams Table */}
      <div className="overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low/60 text-[10px] uppercase tracking-widest text-outline border-b border-outline-variant/40">
              <tr>
                <th className="px-6 py-4">Team Name</th>
                <th className="px-6 py-4">Members</th>
                <th className="px-6 py-4">Event</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {filteredTeams.map((team) => (
                <tr
                  key={team.id}
                  className="group transition hover:bg-surface-container-low/30"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold text-sm">{team.name}</p>
                      <p className="text-[10px] text-secondary uppercase tracking-widest">
                        {team.teamId}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center -space-x-2">
                      {team.members.map((member, idx) => (
                        <img
                          key={idx}
                          src={member.avatar}
                          alt={member.name}
                          title={member.name}
                          className="h-8 w-8 rounded-full border-2 border-white object-cover transition hover:z-10"
                        />
                      ))}
                      {team.membersCount > 3 && (
                        <div className="h-8 w-8 rounded-full bg-surface-container-highest border-2 border-white flex items-center justify-center text-[10px] font-bold text-secondary">
                          +{team.membersCount - 3}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-container/20 rounded-full">
                      <span className="material-symbols-outlined text-sm text-primary">
                        event
                      </span>
                      <span className="text-xs font-bold text-primary">
                        {team.event}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${team.statusColor}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {team.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition">
                      <button className="rounded-lg p-1.5 text-secondary hover:bg-surface-container-low hover:text-primary transition">
                        <span className="material-symbols-outlined text-lg">
                          edit
                        </span>
                      </button>
                      <button className="rounded-lg p-1.5 text-secondary hover:bg-surface-container-low hover:text-primary transition">
                        <span className="material-symbols-outlined text-lg">
                          visibility
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

      {/* Empty State */}
      {filteredTeams.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 rounded-2xl border-2 border-dashed border-outline-variant/30">
          <span className="material-symbols-outlined text-6xl text-outline-variant/50 mb-4">
            groups_3
          </span>
          <p className="text-lg font-bold text-on-surface mb-2">
            No teams found
          </p>
          <p className="text-sm text-secondary">Try adjusting your filters</p>
        </div>
      )}
    </section>
  );
}
