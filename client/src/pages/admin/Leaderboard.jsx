import React, { useEffect, useMemo, useState } from "react";

const API_BASE_URL = "http://localhost:5000/api";

const MOCK_EVENTS = [
  { id: 1, name: "Global Hackathon 2024", status: "Active" },
  { id: 2, name: "Tech Summit 2024", status: "Active" },
  { id: 3, name: "Innovation Challenge", status: "Completed" },
];

const MOCK_LEADERBOARD_BY_EVENT = {
  1: [
    { teamId: 11, teamName: "Team Alpha", track: "AI", score: 94.4 },
    { teamId: 12, teamName: "Team Delta", track: "Fintech", score: 91.2 },
    { teamId: 13, teamName: "Team Gamma", track: "Health", score: 88.8 },
    { teamId: 14, teamName: "Team Beta", track: "Sustainability", score: 84.1 },
  ],
  2: [
    { teamId: 21, teamName: "Circuit Breakers", track: "IoT", score: 93.6 },
    { teamId: 22, teamName: "NovaStack", track: "Cloud", score: 90.3 },
    { teamId: 23, teamName: "ByteForge", track: "DX", score: 86.7 },
  ],
  3: [
    { teamId: 31, teamName: "HexaCore", track: "Blockchain", score: 95.1 },
    { teamId: 32, teamName: "Pulse", track: "BioTech", score: 89.9 },
  ],
};

function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeLeaderboardItems(rawItems) {
  return (rawItems || []).map((item, index) => ({
    rank: index + 1,
    teamId: item.teamId ?? item.id ?? index + 1,
    teamName: item.teamName ?? item.name ?? "Unnamed Team",
    track: item.track ?? item.category ?? "General",
    score: toNumber(item.score ?? item.totalScore ?? item.avgScore),
  }));
}

function buildLeaderboardFromTeams(teams) {
  return (teams || []).map((team, index) => ({
    rank: index + 1,
    teamId: team.id ?? index + 1,
    teamName: team.name ?? `Team ${index + 1}`,
    track: team.track ?? team.category ?? "General",
    score: toNumber(team.score ?? team.totalScore ?? team.averageScore),
  }));
}

export default function AdminLeaderboard() {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState("");
  const [rows, setRows] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [loadingRows, setLoadingRows] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoadingEvents(true);
        const response = await fetch(`${API_BASE_URL}/events`);
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        const normalized = Array.isArray(data) ? data : [];
        setEvents(normalized);
        if (normalized.length > 0) {
          setSelectedEventId(String(normalized[0].id));
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setEvents(MOCK_EVENTS);
        setSelectedEventId(String(MOCK_EVENTS[0].id));
      } finally {
        setLoadingEvents(false);
      }
    };

    loadEvents();
  }, []);

  useEffect(() => {
    if (!selectedEventId) {
      setRows([]);
      return;
    }

    const loadLeaderboard = async () => {
      try {
        setLoadingRows(true);
        setError("");

        const directResponse = await fetch(
          `${API_BASE_URL}/events/${selectedEventId}/leaderboard`,
        );

        if (directResponse.ok) {
          const directData = await directResponse.json();
          setRows(normalizeLeaderboardItems(directData));
          return;
        }

        const teamsResponse = await fetch(
          `${API_BASE_URL}/events/${selectedEventId}/teams`,
        );

        if (!teamsResponse.ok) {
          throw new Error("Failed to fetch leaderboard for selected event");
        }

        const teamsData = await teamsResponse.json();
        setRows(buildLeaderboardFromTeams(teamsData));
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
        setError("Showing fallback leaderboard data");
        const fallback = MOCK_LEADERBOARD_BY_EVENT[selectedEventId] || [];
        setRows(normalizeLeaderboardItems(fallback));
      } finally {
        setLoadingRows(false);
      }
    };

    loadLeaderboard();
  }, [selectedEventId]);

  const sortedRows = useMemo(() => {
    return [...rows]
      .sort((a, b) => b.score - a.score)
      .map((row, index) => ({ ...row, rank: index + 1 }));
  }, [rows]);

  return (
    <section className="bg-surface text-on-surface min-h-screen font-body antialiased overflow-x-hidden">
      <div className="min-h-screen">
        <header className="flex justify-between items-center w-full px-8 py-4 h-20 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl sticky top-0 z-30 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-8 flex-1">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-50 font-headline">
              Leaderboard Management
            </h2>
          </div>
        </header>

        <div className="px-8 pt-10 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <nav className="flex items-center gap-2 text-xs font-bold text-primary mb-2 uppercase tracking-tighter">
                <span>Admin</span>
                <span className="material-symbols-outlined text-[10px]">
                  chevron_right
                </span>
                <span>Leaderboard</span>
              </nav>
              <h1 className="text-4xl font-black text-on-background tracking-tight font-headline">
                Team Leaderboard
              </h1>
              <p className="text-on-surface-variant mt-2 max-w-2xl">
                View teams ranked by score and filter standings by event.
              </p>
            </div>

            <div className="w-full md:w-96">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2 font-label">
                Filter by Event
              </label>
              <select
                value={selectedEventId}
                onChange={(e) => setSelectedEventId(e.target.value)}
                disabled={loadingEvents}
                className="w-full px-4 py-3 bg-surface-container-low border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface disabled:opacity-60"
              >
                {events.length === 0 ? (
                  <option value="">No events available</option>
                ) : (
                  events.map((event) => (
                    <option key={event.id} value={String(event.id)}>
                      {event.name} ({event.status ?? "Open"})
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>

          {error ? (
            <div className="mb-6 px-4 py-3 rounded-lg bg-secondary-fixed/20 text-on-secondary-fixed border border-secondary/20 text-sm font-medium">
              {error}
            </div>
          ) : null}

          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-slate-100 dark:border-slate-800">
            <div className="px-8 py-6 flex items-center justify-between bg-surface-container-low/50 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-lg font-headline">Ranked Teams</h3>
              <p className="text-sm text-slate-500 font-medium">
                {sortedRows.length} teams
              </p>
            </div>

            {loadingRows ? (
              <div className="px-8 py-12 text-center text-slate-500">
                Loading leaderboard...
              </div>
            ) : sortedRows.length === 0 ? (
              <div className="px-8 py-12 text-center text-slate-500">
                No leaderboard data available for this event.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/20">
                      <th className="px-8 py-4 text-xs font-black text-slate-500 uppercase tracking-widest font-label">
                        Rank
                      </th>
                      <th className="px-8 py-4 text-xs font-black text-slate-500 uppercase tracking-widest font-label">
                        Team
                      </th>
                      <th className="px-8 py-4 text-xs font-black text-slate-500 uppercase tracking-widest font-label">
                        Track
                      </th>
                      <th className="px-8 py-4 text-xs font-black text-slate-500 uppercase tracking-widest font-label text-right">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {sortedRows.map((row) => (
                      <tr
                        key={row.teamId}
                        className="hover:bg-surface-container-low/50 transition-colors"
                      >
                        <td className="px-8 py-6">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-black text-xs">
                            {String(row.rank).padStart(2, "0")}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <p className="font-bold text-on-surface">
                            {row.teamName}
                          </p>
                        </td>
                        <td className="px-8 py-6">
                          <p className="text-sm text-slate-500">{row.track}</p>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <p className="text-lg font-black text-primary font-headline">
                            {row.score.toFixed(2)}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
