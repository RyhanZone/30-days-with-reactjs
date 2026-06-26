// src/components/sidebar/Sidebar.jsx
import { CloudSun } from "lucide-react";
import SearchBox from "./SearchBox.jsx";
import CurrentLocation from "./CurrentLocation.jsx";
import RecentSearches from "./RecentSearches.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Sidebar() {
  return (
    <aside className="glass-strong flex h-full w-full flex-col rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] lg:w-[320px] xl:w-85">
      {/* Logo + Search (left header section) */}
      <div className="flex flex-col gap-5 border-b border-white/5 p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-accent-500 to-accent-600 shadow-lg shadow-accent-500/30">
            <CloudSun className="h-5 w-5 text-white" />
          </span>
          <h1 className="text-lg font-bold text-white">
            Weather <span className="font-extrabold text-accent-500">App</span>
          </h1>
        </div>

        <SearchBox />
      </div>

      {/* Current location */}
      <div className="border-b border-white/5 p-5">
        <CurrentLocation/>
      </div>

      {/* Recent searches — fills remaining space */}
      <div className="flex flex-1 flex-col gap-3 overflow-hidden p-5">
        <RecentSearches/>
      </div>

      {/* Theme switch */}
      <div className="border-t border-white/5 p-5">
        <ThemeToggle />
      </div>
    </aside>
  );
}
