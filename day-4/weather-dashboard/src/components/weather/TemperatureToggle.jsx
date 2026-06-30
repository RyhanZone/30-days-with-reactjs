import { useState } from "react";

export default function TemperatureToggle() {
  const [unit, setUnit] = useState("C");

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-base-900/60 p-1 dark:border-white/10 dark:bg-base-900/60 light:border-slate-300 light:bg-slate-100">
      <button
        type="button"
        onClick={() => setUnit("C")}
        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
          unit === "C"
            ? "bg-accent-500 text-white shadow-md shadow-accent-500/30"
            : "text-slate-400 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 light:text-slate-600 light:hover:text-slate-900"
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
            : "text-slate-400 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 light:text-slate-600 light:hover:text-slate-900"
        }`}
      >
        °F
      </button>
    </div>
  );
}