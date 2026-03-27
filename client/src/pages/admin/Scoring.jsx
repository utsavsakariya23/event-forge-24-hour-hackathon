import React, { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:5000/api";

export default function Scoring() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [teams, setTeams] = useState([]);
  const [scores, setScores] = useState({});
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const [judges, setJudges] = useState([]);

  // Fetch events and judges on component mount
  useEffect(() => {
    fetchEvents();
    fetchJudges();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      if (!response.ok) throw new Error("Failed to fetch events");
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
      // Mock data fallback
      setEvents([
        { id: 1, name: "Global Hackathon 2024", status: "Active" },
        { id: 2, name: "Tech Summit 2024", status: "Active" },
        { id: 3, name: "Innovation Challenge", status: "Completed" },
      ]);
    }
  };

  const fetchJudges = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/judges`);
      if (!response.ok) throw new Error("Failed to fetch judges");
      const data = await response.json();
      setJudges(data);
    } catch (err) {
      console.error("Error fetching judges:", err);
      setJudges([
        { id: 1, name: "Marcus Sterling" },
        { id: 2, name: "Elena Rodriguez" },
        { id: 3, name: "Dr. Sarah Chen" },
      ]);
    }
  };

  const handleEventChange = async (eventId) => {
    setSelectedEvent(eventId);
    if (eventId) {
      await fetchTeamsForEvent(eventId);
    } else {
      setTeams([]);
      setScores({});
    }
  };

  const fetchTeamsForEvent = async (eventId) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/events/${eventId}/teams`);
      if (!response.ok) throw new Error("Failed to fetch teams");
      const data = await response.json();
      setTeams(data);
      // Initialize empty scores object
      const initialScores = {};
      data.forEach((team) => {
        judges.forEach((judge) => {
          initialScores[`${team.id}-${judge.id}`] = "";
        });
      });
      setScores(initialScores);
      setMessage("");
    } catch (err) {
      console.error("Error fetching teams:", err);
      // Mock teams fallback
      setTeams([
        { id: 1, name: "Team Alpha", participants: 4 },
        { id: 2, name: "Team Beta", participants: 3 },
        { id: 3, name: "Team Gamma", participants: 5 },
        { id: 4, name: "Team Delta", participants: 4 },
      ]);
      const initialScores = {};
      [1, 2, 3, 4].forEach((teamId) => {
        judges.forEach((judge) => {
          initialScores[`${teamId}-${judge.id}`] = "";
        });
      });
      setScores(initialScores);
    } finally {
      setLoading(false);
    }
  };

  const handleScoreChange = (teamId, judgeId, value) => {
    const key = `${teamId}-${judgeId}`;
    // Only allow numbers 0-100
    if (value === "" || (Number(value) >= 0 && Number(value) <= 100)) {
      setScores((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
  };

  const handleSaveScores = async () => {
    if (!selectedEvent) {
      setMessageType("error");
      setMessage("Please select an event first");
      return;
    }

    try {
      setSaving(true);
      const scoreData = Object.entries(scores).map(([key, score]) => {
        const [teamId, judgeId] = key.split("-");
        return {
          teamId: Number(teamId),
          judgeId: Number(judgeId),
          score: Number(score) || 0,
        };
      });

      const response = await fetch(
        `${API_BASE_URL}/events/${selectedEvent}/scores`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ scores: scoreData }),
        },
      );

      if (!response.ok) throw new Error("Failed to save scores");

      setMessageType("success");
      setMessage("Scores saved successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error("Error saving scores:", err);
      setMessageType("error");
      setMessage("Failed to save scores. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const calculateTeamAverage = (teamId) => {
    const teamScores = judges
      .map((judge) => {
        const key = `${teamId}-${judge.id}`;
        const score = scores[key];
        return score !== "" ? Number(score) : null;
      })
      .filter((s) => s !== null);
    if (teamScores.length === 0) return "-";
    const avg = teamScores.reduce((a, b) => a + b, 0) / teamScores.length;
    return avg.toFixed(2);
  };

  const handleBulkUpdate = (teamId, value) => {
    if (value === "" || (Number(value) >= 0 && Number(value) <= 100)) {
      judges.forEach((judge) => {
        const key = `${teamId}-${judge.id}`;
        setScores((prev) => ({
          ...prev,
          [key]: value,
        }));
      });
    }
  };

  // Mock data for display
  const mockLeaderboard = [
    {
      teamName: "Nova Stream",
      category: "Sustainable Energy",
      initials: "NV",
      color: "bg-primary/10 text-primary",
      score: "94.2",
      breakdown: { P: 19, A: 18, F: 20, U: 18, I: 19.2 },
      judges: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD3LI3mvBOAhmuQGY2r2GJ8Mop5fnQffeFe-FbZUjAwZm--Wt7hj6feXCwsoLedI2td3SCxMwCyr_4nvKmfVbLJnBcXN9ZEKYBPZCHiF3Ewgeyc8C6UgPX5f1TlN5JqNcMAFl9FKQ4lWosTUO5ovBh4zfSc-VFZ188XRgYkvtMro44Nbg14UCtA8GAhiTShRmWBaQIMPPLGUbioIS0ganbSclCw2NS3ZupPi-BKcp3pqvY0eUK0E9ehh9em4-WxfB4xya-0E3okRBIz",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBK2Lnysfj9cp43EMHn6EbwhhbXNhGCBl06ztyS25krELXA5Je4Pkp3OTVsma5tSF8f_y7k-J4uSXkm5qjweZ_ZDstvGAFdJ3Nl15mXTwVFST_aHV-TjyFxuxRAuXqDA7zdBl433M6KBDbI8ekMhuh2Siy3zfLQr-nEYh4SYry4PfEaX_-58WR8VIKgcEQrK3qQLojNJNpw3zrTNrdMI169qkXRuBYOg-bX_fu1YJ8DrlaEUtKrFdbtX9f8xCM_2jidnEHdjLzXwqG-",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCNWTJfijeCtCxHs2mgNLW3l0efks-gfuOJWkgSVYPZgEEzcGLs84vf6WKcndDO1UNsljogR4_m0GynUfWm8IRYoplLxgDXe9VfWCHZQwLstlW72OISpJlSH7jzRpF3I7uYUXaxsjJvR_s5GGP-CKU7CxPgGQHcofC2jXe6nmu8RrEgyNzjGi46HBhZ0Z4HNXO06ecXJkrK4-ZcWbm_93KmbPEcLNZsuvNGi62Y755qBsjLbf1LRKVbA4U3eT5bOSbzHmEHnUrQAMTL",
      ],
      extraJudges: "+2",
      status: "Completed",
      statusColor: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    },
    {
      teamName: "Lumina Health",
      category: "BioTech Solutions",
      initials: "LX",
      color: "bg-secondary/10 text-secondary",
      score: "--.-",
      breakdown: { P: "--", A: "--", F: "--", U: "--", I: "--" },
      judges: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAsNTF1GSrIGZEW2mD4nO75cuQeBSzVpcop5fN9yWbKd09KrNN4BWTGuNMiyFTqvA1YODeGpm2SPDzCDyKCJ7x5HLADG2aLGLNQ7XPOe5S-ZU28tIAjSMn1jDfsxKeXRTqM3lxtkuTuiWhbQgLq0cYELoa005B19ihs9cPB5NeDNo-JtVwzpe0Gqs97hwoYdgfzbBvyZyUWkmaXQrcvS2DTJsQn4QVuGcNtcYfTEz6Mm6lvt52vzyTQ0T37CBNBOguG6xpqUpdDd4DL",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRE4uVlcX4DWxy173f-BOV_pY8LggzrhscnRk4IK6V3NtrD-6IBBd1vw_bZ1pxwE1xz83pNI18KU40ThjgUbZjOamuwMhqMyqbDz6zNRhBY_d28_mzodS3ORTQl_43z3dZUevj7fIIjHjd7k4iG99IF8YApT8yRNisp01RzbSdmpanhEKD97EISQ242sUIKlsayNg4_KQx7unfVWBNInK2fQG8vpVJDmhlm8MM6IZ8E9RPoW8Q16KdlW9olo92GnL7Q5vgFsuFMad2",
      ],
      extraJudges: null,
      status: "In Progress",
      statusColor: "bg-secondary-container text-on-secondary-container",
    },
    {
      teamName: "Quantum Systems",
      category: "AI Computing",
      initials: "QS",
      color: "bg-tertiary-container/10 text-tertiary",
      score: "88.5",
      breakdown: { P: 17, A: 18, F: 19, U: 16.5, I: 18 },
      judges: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAuYllrdVyYslVyml7orbh5ecMZPf_VSkwn-aLXTNbdIEOqfaIJmeme_LGkVoixt190EraKIb3kO1GJ1ACwMFrVJn-f5iSo5FEF5HeevP1Cqoiy3PcM8vKtvlTuZo3Tly3Twv6y925QUL-nXDqhg3nfeQdU7Ci-Kqxc7IIHbZBvAC00-TWmFcEen9Tb-5stwkRuMT8bYLkMCM7CZlAGN_-uY_iR8wf9ERyjWwe5Twt03JJPk6M-4Pu6ORPcA1ECgPfGWsgutUpgCXQu",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCWQFfjTsXFoyb4w0uxpJWnhk55C1_3gWkAG3A6cfcAEMqbYYXzh6XFoDM7GFYkMf2-o2ky9glUaWhgSyekyi3tOrD3ZBEgn6dLIeSrFtZXauRMyyZfb8tVXDbrQT-2Fz5W9V-pA-EJ67smmzqkgw-V2iFMqGMnWu4cMK9X32cbXXma9JG-BmwsGSEl_rWfbp23JYKrUyRB5fEZK5HauDit_dUJ1u7oJ44GLlSa_s-FFs54c4BurU1JlIyYnCwCximpwTWSFja82xCX",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCkNRR_BaUAsWiJzQ-hjScymj5OhAfwE2e_ewRURSYkZMf_rvZ5fHkQBTQeiom13t0Fj2-gjAK9Ly65DweYiR2hiPJ6pZlcmhQ8jPgX9ENWf3ALrkxx1WA3sZvTMKB6mt1Y3IqDxkjJTfyGVfFKe5OVHNU4LrdpEQS7YlHwxyn5jOkqcJsTxRUnJAU-zSQNY9RtyIuyQlqnKY7RbaNmBNrNau0MzLa8BNSNO6Yggo5uffjzYygGpB5LWvF-SIh3vXXDu--MB6ZYEy-8",
      ],
      extraJudges: null,
      status: "Completed",
      statusColor: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    },
    {
      teamName: "Vertex Finance",
      category: "FinTech Platform",
      initials: "VF",
      color: "bg-error-container/10 text-error",
      score: "82.1",
      breakdown: { P: 16, A: 16, F: 18, U: 17, I: 15.1 },
      judges: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB8CSCf02qye4KFMxjnTxPceNP7mIZAM7vMvPyIW7XGiagg4RkKyE3z6I7VfgWAGLoXa0Y_tWju5HtuPmSehXjKSMXnQwNC_cNCnE2nfsqRqmsF4nM-U7a8KtnCGp31LM5zF1Y9pp7NMtK2CWdNNKIlcUvnKTVDjQBf9BtO8n3cgGNFJoocH3RGl1QYhrpD4nvEMtIAjxs8R3Y2ktTseys9mo-BzECysR-mY3DGjQK6tRPh9sEqx1m8tD2NJF_yrLymLGi4vUGFWZvR",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBFBItg2KRBZBA6_iJ8xaJQzZDFBSwmQv_ZDez9R9s9oPtr9FmSJ7D6_pBzISIhtR_I5SuEoa5_yhLj1LBZkx2PsE_54gKwZhMCwsqw8aNZRzmPHu7MazcxB75tc-NCN-NN5hp6NogqKbeDIvWID5Ygee2WFCerYW7cF6ZEP3BGmw8zre2mznEF0DVaIliGSrg0nDhN407OJMIdAaSPA7X-JMEdDJ1WOpNIPFkoXNSAR3sDWX-1B0O9teaZWAtdfDo1U0fBxXKjAia6",
      ],
      extraJudges: null,
      status: "Completed",
      statusColor: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    },
  ];

  return (
    <section className="bg-surface text-on-surface min-h-screen font-body antialiased overflow-x-hidden">
      <div className="min-h-screen">
        {/* TopAppBar */}
        <header className="flex justify-between items-center w-full px-8 py-4 h-20 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl sticky top-0 z-30 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-8 flex-1">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-50 font-headline">
              Scoring Panel
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-blue-500 transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
          </div>
        </header>

        <div className="px-8 pt-10 pb-12">
          {/* Page Header */}
          <div className="flex flex-col gap-4 mb-10">
            <div>
              <nav className="flex items-center gap-2 text-xs font-bold text-primary mb-2 uppercase tracking-tighter">
                <span>Admin</span>
                <span className="material-symbols-outlined text-[10px]">
                  chevron_right
                </span>
                <span>Scoring</span>
              </nav>
              <h1 className="text-4xl font-black text-on-background tracking-tight font-headline">
                Event Scoring
              </h1>
              <p className="text-on-surface-variant mt-2 max-w-2xl">
                Enter and manage scores for teams across all judges. Scores
                range from 0-100.
              </p>
            </div>
          </div>

          {/* Message Alert */}
          {message && (
            <div
              className={`mb-6 px-6 py-4 rounded-xl flex items-center gap-3 ${
                messageType === "success"
                  ? "bg-tertiary-fixed/20 border border-tertiary/30 text-on-tertiary-fixed-variant"
                  : "bg-error-container border border-error/30 text-on-error-container"
              }`}
            >
              <span className="material-symbols-outlined">
                {messageType === "success" ? "check_circle" : "error"}
              </span>
              <span>{message}</span>
            </div>
          )}

          {/* Event Selector */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-3 font-label">
                  Select Event
                </label>
                <select
                  value={selectedEvent}
                  onChange={(e) => handleEventChange(e.target.value)}
                  className="w-full px-4 py-3 bg-surface-container-low border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface"
                >
                  <option value="">-- Choose an event --</option>
                  {events.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.name} ({event.status})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-3 font-label">
                  Number of Judges
                </label>
                <div className="px-4 py-3 bg-surface-container-low border border-slate-200 rounded-lg text-on-surface font-medium">
                  {judges.length}
                </div>
              </div>
            </div>
          </div>

          {/* Scoring Table */}
          {selectedEvent && teams.length > 0 ? (
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-slate-100 dark:border-slate-800">
              <div className="px-8 py-6 bg-surface-container-low/50 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-lg font-headline">
                  Team Scores ({teams.length} teams)
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/20">
                      <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-widest font-label min-w-48">
                        Team Name
                      </th>
                      {judges.map((judge) => (
                        <th
                          key={judge.id}
                          className="px-4 py-4 text-xs font-black text-slate-500 uppercase tracking-widest font-label text-center min-w-24"
                          title={judge.name}
                        >
                          <div className="truncate text-[10px]">
                            {judge.name.split(" ")[0]}
                          </div>
                        </th>
                      ))}
                      <th className="px-4 py-4 text-xs font-black text-slate-500 uppercase tracking-widest font-label text-center min-w-20">
                        Average
                      </th>
                      <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-widest font-label text-center min-w-32">
                        Quick Fill
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {teams.map((team) => (
                      <tr
                        key={team.id}
                        className="hover:bg-surface-container-low/50 transition-colors"
                      >
                        <td className="px-6 py-6">
                          <div>
                            <p className="font-bold text-on-surface">
                              {team.name}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                              {team.participants} participants
                            </p>
                          </div>
                        </td>
                        {judges.map((judge) => (
                          <td
                            key={`${team.id}-${judge.id}`}
                            className="px-4 py-6 text-center"
                          >
                            <input
                              type="number"
                              min="0"
                              max="100"
                              value={scores[`${team.id}-${judge.id}`] || ""}
                              onChange={(e) =>
                                handleScoreChange(
                                  team.id,
                                  judge.id,
                                  e.target.value,
                                )
                              }
                              placeholder="-"
                              className="w-full px-2 py-2 bg-surface-container-low border border-slate-200 rounded text-center focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium"
                            />
                          </td>
                        ))}
                        <td className="px-4 py-6 text-center">
                          <div className="text-sm font-bold text-primary">
                            {calculateTeamAverage(team.id)}
                          </div>
                        </td>
                        <td className="px-6 py-6 text-center">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            placeholder="Fill all"
                            onChange={(e) =>
                              handleBulkUpdate(team.id, e.target.value)
                            }
                            className="w-full px-2 py-2 bg-surface-container-low border border-slate-200 rounded text-center focus:outline-none focus:ring-2 focus:ring-secondary/20 text-xs"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer with Save Button */}
              <div className="px-8 py-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 bg-surface-container-low/20">
                <p className="text-xs text-slate-500 font-medium">
                  {teams.length} teams total
                </p>
                <button
                  onClick={handleSaveScores}
                  disabled={saving}
                  className="flex items-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-lg">
                    {saving ? "hourglass_empty" : "save"}
                  </span>
                  {saving ? "Saving..." : "Save Scores"}
                </button>
              </div>
            </div>
          ) : selectedEvent ? (
            <div className="bg-surface-container-lowest p-12 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
              {loading ? (
                <div className="text-slate-500">Loading teams...</div>
              ) : (
                <div className="text-slate-500">
                  <span className="material-symbols-outlined text-4xl block mb-3 mx-auto">
                    groups
                  </span>
                  No teams registered for this event
                </div>
              )}
            </div>
          ) : (
            <div className="bg-surface-container-lowest p-12 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
              <span className="material-symbols-outlined text-4xl text-slate-300 block mb-3 mx-auto">
                event
              </span>
              <p className="text-slate-500">
                Select an event to start entering scores
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
