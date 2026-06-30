// src/components/sidebar/CurrentLocation.jsx
import { LocateFixed, MapPin } from "lucide-react";
import SectionTitle from "../ui/SectionTitle.jsx";
import WeatherIcon from "../ui/WeatherIcon.jsx";

export default function CurrentLocation({ location }) {
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle icon={LocateFixed}>Current Location</SectionTitle>

      <div className="flex items-center justify-between rounded-xl border border-white/5 bg-base-900/50 px-4 py-3.5 transition-colors hover:border-accent-500/30">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-500/15 text-accent-500">
            <MapPin className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-100">{location?.city?.name}</p>
            <p className="text-xs text-slate-400">{location?.city?.country}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-100">{Math.floor(location?.list?.[0]?.main?.temp)}°C</span>
          <WeatherIcon icon={location?.list?.[0]?.weather?.icon} className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
