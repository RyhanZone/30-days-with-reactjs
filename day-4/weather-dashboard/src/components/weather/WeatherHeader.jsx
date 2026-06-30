import { MapPin } from "lucide-react";
import TemperatureToggle from "./TemperatureToggle.jsx";

export default function WeatherHeader({ info, weatherd}) {
  const date = info?.dt_txt?.split(" ")[0];
  const time = info?.dt_txt?.split(" ")[1];

  console.log(weatherd);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6">
      <div>
        <div className="flex items-center gap-1.5 text-base font-semibold text-white dark:text-white light:text-slate-900 sm:text-lg">
          <MapPin className="h-4.5 w-4.5 text-accent-500" />
          {weatherd?.name}, {weatherd?.country}
        </div>

        <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 sm:text-sm">
          {date}
          <span className="mx-1.5 text-slate-600 dark:text-slate-600 light:text-slate-400">
            •
          </span>
          {time}
        </p>
      </div>

      <TemperatureToggle />
    </div>
  );
}