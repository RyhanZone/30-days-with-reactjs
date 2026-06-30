import { Moon } from "lucide-react";

export default function ThemeToggle({ theme, setTheme }) {
  const enabled = theme === "dark";

  return (
    <div aria-checked={enabled} onClick={() => {setTheme(enabled ? "light" : "dark");}} className="flex items-center justify-between rounded-xl border border-white/5 bg-base-900/50 px-4 py-3.5 dark:border-white/5 dark:bg-base-900/50 light:border-slate-200 light:bg-white">
      <div className="flex items-center gap-2.5">
        <Moon className="h-4.5 w-4.5 text-accent-500" />

        <span className="text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
          {enabled ? "Dark Mode" : "Light Mode"}
        </span>
      </div>

      <button
        type="button"
        role="switch"
        
        className={`relative h-6 w-11 shrink-0 rounded-full transition-all duration-300 ${
          enabled
            ? "bg-accent-500"
            : "bg-slate-300 dark:bg-base-700"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
            enabled ? "translate-x-[6%]" : "translate-x-[-100%]"
          }`}
        />
      </button>
    </div>
  );
}