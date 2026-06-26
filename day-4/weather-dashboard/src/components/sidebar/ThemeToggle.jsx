// src/components/sidebar/ThemeToggle.jsx
import { useState } from "react";
import { Moon } from "lucide-react";

/**
 * Visual-only theme toggle. Holds local UI state for the switch
 * animation only — does not change any app-wide theme/logic.
 */
export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-base-900/50 px-4 py-3.5">
      <div className="flex items-center gap-2.5">
        <Moon className="h-4.5 w-4.5 text-accent-500" />
        <span className="text-sm font-medium text-slate-200">Dark Mode</span>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => setEnabled((v) => !v)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${
          enabled ? "bg-accent-500" : "bg-base-700"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
            enabled ? "translate-x-[22px]" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}
