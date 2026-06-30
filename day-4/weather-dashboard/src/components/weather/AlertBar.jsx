import { useState } from "react";
import { X, Umbrella } from "lucide-react";

export default function AlertBar({ message }) {
  const [visible, setVisible] = useState(true);

  if (!visible || message == 0) {
    return null;
  }

  return (
    <div className="glass-soft mx-5 mb-5 flex items-center justify-between gap-4 rounded-xl px-4 py-3.5 dark:glass-soft light:border light:border-slate-200 light:bg-white sm:mx-6 sm:mb-6">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-md shadow-accent-500/30">
          <Umbrella className="h-4 w-4" />
        </span>

        <p className="text-sm text-slate-200 dark:text-slate-200 light:text-slate-700">
          {message}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss alert"
        className="shrink-0 text-slate-400 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-500 light:hover:text-slate-700"
      >
        <X className="h-4.5 w-4.5" />
      </button>
    </div>
  );
}