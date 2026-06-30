// src/components/sidebar/RecentSearches.jsx
import { History } from "lucide-react";
import SectionTitle from "../ui/SectionTitle.jsx";
import WeatherIcon from "../ui/WeatherIcon.jsx";

export default function RecentSearches({ recentsearchesdata }) {
  console.log(recentsearchesdata);
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle icon={History}>Recent Searches</SectionTitle>

      <div className="flex flex-col gap-2.5 overflow-y-auto pr-1 scrollbar-thin">
        {recentsearchesdata.map((item) => (
          <button
            key={item.id}
            type="button"
            className="flex items-center justify-between rounded-xl border border-white/5 bg-base-900/40 px-4 py-3 text-left transition-all hover:border-white/10 hover:bg-base-900/70"
          >
            <div>
              <p className="text-sm font-semibold text-slate-100">{item?.city?.name}</p>
              <p className="text-xs text-slate-400">{item?.city?.country}</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-100">{Math.floor(item?.weather?.main?.temp)}°C</span>
              <WeatherIcon icon={item?.weather?.weather[0]?.icon} className="h-5 w-5" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
