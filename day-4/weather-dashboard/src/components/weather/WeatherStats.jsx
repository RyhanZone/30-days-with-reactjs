// src/components/weather/WeatherStats.jsx
import { Droplet, Wind, Gauge, Eye } from "lucide-react";

const ICONS = { droplet: Droplet, wind: Wind, gauge: Gauge, eye: Eye };

export default function WeatherStats({ stats }) {
  return (
    <div className="relative grid grid-cols-2 gap-3 p-5 sm:gap-4 sm:p-6 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = ICONS[stat.icon] || Droplet;
        return (
          <div
            key={stat.id}
            className="glass-soft flex flex-col gap-3 rounded-xl px-4 py-4 transition-colors hover:border-white/15"
          >
            <span className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ${stat.accent}`}>
              <Icon className="h-4.5 w-4.5" strokeWidth={2.25} />
            </span>
            <div>
              <p className="text-xs text-slate-400">{stat.label}</p>
              <p className="mt-0.5 text-base font-bold text-white sm:text-lg">{stat.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
