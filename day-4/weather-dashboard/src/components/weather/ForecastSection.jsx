// src/components/weather/ForecastSection.jsx
import SectionTitle from "../ui/SectionTitle.jsx";
import ForecastCard from "./ForecastCard.jsx";
import { CalendarClock } from "lucide-react";

export default function ForecastSection({ forecast }) {
  return (
    <div className="flex flex-col gap-4 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <SectionTitle icon={CalendarClock}>Today's Forecast</SectionTitle>
        <div className="h-0.5 w-10 rounded-full bg-accent-500" />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin sm:gap-4">
        {forecast?.map((hour , index) => (
          <ForecastCard key={hour?.dt} hour={hour} isNow={index === 0}/>
        ))}
      </div>
    </div>
  );
}
