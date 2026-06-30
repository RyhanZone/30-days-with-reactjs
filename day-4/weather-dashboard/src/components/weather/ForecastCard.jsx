import WeatherIcon from "../ui/WeatherIcon.jsx";

export default function ForecastCard({ hour, isNow }) {
  return (
    <div
      className={`flex shrink-0 flex-col items-center gap-3 rounded-xl px-4 py-4 transition-colors ${
        isNow
          ? "glass-strong border-accent-500/40 dark:glass-strong light:bg-white light:border light:border-accent-300"
          : "glass-soft hover:border-white/15 dark:glass-soft dark:hover:border-white/15 light:bg-white light:border light:border-slate-200 light:hover:border-slate-300"
      }`}
    >
      <span
        className={`text-xs font-semibold ${
          isNow
            ? "text-accent-500"
            : "text-slate-400 dark:text-slate-400 light:text-slate-500"
        }`}
      >
        {hour?.dt_txt?.split(" ")[1]?.split(":")[0]}
      </span>

      <WeatherIcon
        icon={hour?.weather?.[0]?.icon}
        className="h-7 w-7"
      />

      <span className="text-sm font-bold text-white dark:text-white light:text-slate-800">
        {Math.floor(hour?.main?.temp)}°C
      </span>
    </div>
  );
}