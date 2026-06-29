// src/components/weather/WeatherHeader.jsx
import { MapPin } from "lucide-react";
import TemperatureToggle from "./TemperatureToggle.jsx";

export default function WeatherHeader({ info , weatherd}) {
  const date = info?.dt_txt?.split(" ")[0];
  const time = info?.dt_txt?.split(" ")[1];
  console.log(weatherd);
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6">
      <div>
        <div className="flex items-center gap-1.5 text-base font-semibold text-white sm:text-lg">
          <MapPin className="h-4.5 w-4.5 text-accent-500" />
          {weatherd?.name}, {weatherd?.country}
        </div>
        <p className="mt-1 text-xs text-slate-400 sm:text-sm">
          {date} <span className="mx-1.5 text-slate-600">•</span> {time}
        </p>
      </div>

      <TemperatureToggle />
    </div>
  );
}
