import { CloudSun } from "lucide-react";
import SearchBox from "./SearchBox.jsx";
import CurrentLocation from "./CurrentLocation.jsx";
import RecentSearches from "./RecentSearches.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Sidebar({ data, searchfunction, currentsdata, theme, setTheme }) {
  return (
    <aside className="glass-strong flex h-full w-full flex-col rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] light:bg-white light:border light:border-slate-200 light:shadow-lg lg:w-[320px] xl:w-[340px]">
      <div className="flex flex-col gap-5 border-b border-white/5 p-5 dark:border-white/5 light:border-slate-200">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 shadow-lg shadow-accent-500/30">
            <CloudSun className="h-5 w-5 text-white" />
          </span>

          <h1 className="text-lg font-bold text-white dark:text-white light:text-slate-800">
            Weather <span className="font-extrabold text-accent-500">App</span>
          </h1>
        </div>

        <SearchBox sfunction={searchfunction} />
      </div>

      <div className="border-b border-white/5 p-5 dark:border-white/5 light:border-slate-200">
        <CurrentLocation location={data} />
      </div>

      <div className="flex flex-1 flex-col gap-3 overflow-hidden p-5">
        <RecentSearches recentsearchesdata={currentsdata} />
      </div>

      <div className="border-t border-white/5 p-5 dark:border-white/5 light:border-slate-200">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </aside>
  );
}