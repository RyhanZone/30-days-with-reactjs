// src/components/weather/ForecastCard.jsx
import WeatherIcon from "../ui/WeatherIcon.jsx";

export default function ForecastCard({ hour }) {
  const isNow = hour.time === "Now";

  return (
    <div
      className={`flex shrink-0 flex-col items-center gap-3 rounded-xl px-4 py-4 transition-colors ${
        isNow
          ? "glass-strong border-accent-500/40"
          : "glass-soft hover:border-white/15"
      }`}
    >
      <span className={`text-xs font-semibold ${isNow ? "text-accent-500" : "text-slate-400"}`}>
        {hour.time}
      </span>
      <WeatherIcon icon={hour.icon} className="h-7 w-7" />
      <span className="text-sm font-bold text-white">{hour.temp}°C</span>
    </div>
  );
}
