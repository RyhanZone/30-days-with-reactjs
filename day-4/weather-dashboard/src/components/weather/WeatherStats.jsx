import { Droplet, Wind, Gauge, Eye } from "lucide-react";

const ICONS = {
  droplet: Droplet,
  wind: Wind,
  gauge: Gauge,
  eye: Eye,
};

export default function WeatherStats({ info }) {
  const stats = [
    {
      id: 1,
      label: "Humidity",
      value: `${info?.main?.humidity}%`,
      icon: "droplet",
    },
    {
      id: 2,
      label: "Wind Speed",
      value: `${info?.wind?.speed} m/s`,
      icon: "wind",
    },
    {
      id: 3,
      label: "Pressure",
      value: `${info?.main?.pressure} hPa`,
      icon: "gauge",
    },
    {
      id: 4,
      label: "Visibility",
      value: `${info?.visibility / 1000} km`,
      icon: "eye",
    },
  ];

  return (
    <div className="relative grid grid-cols-2 gap-3 p-5 sm:gap-4 sm:p-6 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = ICONS[stat.icon] || Droplet;

        return (
          <div
            key={stat.id}
            className="glass-soft flex flex-col gap-3 rounded-xl px-4 py-4 transition-colors hover:border-white/15 dark:glass-soft dark:hover:border-white/15 light:border light:border-slate-200 light:bg-white light:hover:border-slate-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 dark:bg-white/5 light:bg-slate-100">
              <Icon
                className="h-4.5 w-4.5 text-accent-500"
                strokeWidth={2.25}
              />
            </span>

            <div>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                {stat.label}
              </p>

              <p className="mt-0.5 text-base font-bold text-white dark:text-white light:text-slate-900 sm:text-lg">
                {stat.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}