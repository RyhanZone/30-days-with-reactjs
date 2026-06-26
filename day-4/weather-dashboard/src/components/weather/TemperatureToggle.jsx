// src/components/weather/TemperatureToggle.jsx
import { useState } from "react";

/**
 * Visual-only °C / °F segmented toggle. Local state controls the
 * active pill styling only — no conversion logic is performed.
 */
export default function TemperatureToggle() {
  const [unit, setUnit] = useState("C");

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-base-900/60 p-1">
      <button
        type="button"
        onClick={() => setUnit("C")}
        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
          unit === "C"
            ? "bg-accent-500 text-white shadow-md shadow-accent-500/30"
            : "text-slate-400 hover:text-slate-200"
        }`}
      >
        °C
      </button>
      <button
        type="button"
        onClick={() => setUnit("F")}
        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
          unit === "F"
            ? "bg-accent-500 text-white shadow-md shadow-accent-500/30"
            : "text-slate-400 hover:text-slate-200"
        }`}
      >
        °F
      </button>
    </div>
  );
}
