// src/components/ui/WeatherIcon.jsx
import { Sun, Cloud, CloudSun, CloudRain, Moon, CloudDrizzle } from "lucide-react";

/**
 * Maps a static icon key (from mock data) to a lucide-react icon.
 * Centralising this keeps icon choices consistent across the dashboard
 * without touching any of the data files.
 */
const ICON_MAP = {
  sunny: Sun,
  "partly-cloudy": CloudSun,
  cloudy: Cloud,
  rainy: CloudRain,
  drizzle: CloudDrizzle,
  "clear-night": Moon,
};

const COLOR_MAP = {
  sunny: "text-amber-400",
  "partly-cloudy": "text-amber-300",
  cloudy: "text-slate-300",
  rainy: "text-sky-400",
  drizzle: "text-sky-300",
  "clear-night": "text-indigo-300",
};

export default function WeatherIcon({ icon, className = "h-6 w-6", strokeWidth = 2 }) {
  const Icon = ICON_MAP[icon] || Cloud;
  const color = COLOR_MAP[icon] || "text-slate-300";

  return <Icon className={`${color} ${className}`} strokeWidth={strokeWidth} />;
}
