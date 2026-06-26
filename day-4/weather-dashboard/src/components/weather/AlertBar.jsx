// src/components/weather/AlertBar.jsx
import { useState } from "react";
import { X, Umbrella } from "lucide-react";

/**
 * Static alert/notification strip. Dismiss button only toggles
 * local visibility state — no logic beyond that.
 */
export default function AlertBar({ message }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="glass-soft mx-5 mb-5 flex items-center justify-between gap-4 rounded-xl px-4 py-3.5 sm:mx-6 sm:mb-6">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-md shadow-accent-500/30">
          <Umbrella className="h-4 w-4" />
        </span>
        <p className="text-sm text-slate-200">{message.text}</p>
      </div>

      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss alert"
        className="shrink-0 text-slate-400 transition-colors hover:text-white"
      >
        <X className="h-4.5 w-4.5" />
      </button>
    </div>
  );
}
