import {
  Sun,
  Moon,
  CloudSun,
  CloudMoon,
  Cloud,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  CloudSnow,
  CloudFog,
} from "lucide-react";

const ICON_MAP = {
  // Clear
  "01d": Sun,
  "01n": Moon,

  // Few clouds
  "02d": CloudSun,
  "02n": CloudMoon,

  // Scattered clouds
  "03d": Cloud,
  "03n": Cloud,

  // Broken clouds
  "04d": Cloud,
  "04n": Cloud,

  // Shower rain
  "09d": CloudDrizzle,
  "09n": CloudDrizzle,

  // Rain
  "10d": CloudRain,
  "10n": CloudRain,

  // Thunderstorm
  "11d": CloudLightning,
  "11n": CloudLightning,

  // Snow
  "13d": CloudSnow,
  "13n": CloudSnow,

  // Mist / Fog
  "50d": CloudFog,
  "50n": CloudFog,
};
const COLOR_MAP = {
  // Clear
  "01d": "text-yellow-400",
  "01n": "text-indigo-300",

  // Few Clouds
  "02d": "text-amber-300",
  "02n": "text-slate-300",

  // Scattered Clouds
  "03d": "text-slate-300",
  "03n": "text-slate-400",

  // Broken Clouds
  "04d": "text-gray-300",
  "04n": "text-gray-400",

  // Drizzle
  "09d": "text-cyan-400",
  "09n": "text-cyan-300",

  // Rain
  "10d": "text-sky-500",
  "10n": "text-sky-400",

  // Thunderstorm
  "11d": "text-violet-400",
  "11n": "text-violet-300",

  // Snow
  "13d": "text-white",
  "13n": "text-slate-100",

  // Mist / Fog
  "50d": "text-slate-400",
  "50n": "text-slate-500",
};

export default function WeatherIcon({ icon, className = "h-6 w-6", strokeWidth = 2 }) {
  const Icon = ICON_MAP[icon] || Cloud;
  const color = COLOR_MAP[icon] || "text-slate-300";

  return <Icon className={`${color} ${className}`} strokeWidth={strokeWidth} />;
}
