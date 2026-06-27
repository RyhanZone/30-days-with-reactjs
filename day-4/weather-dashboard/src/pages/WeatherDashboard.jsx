// src/pages/WeatherDashboard.jsx
import Sidebar from "../components/sidebar/Sidebar.jsx";
import WeatherHeader from "../components/weather/WeatherHeader.jsx";
import MainWeather from "../components/weather/MainWeather.jsx";
import WeatherStats from "../components/weather/WeatherStats.jsx";
import ForecastSection from "../components/weather/ForecastSection.jsx";
import AlertBar from "../components/weather/AlertBar.jsx";
import { useEffect, useState } from "react";
import {
  headerInfo,
  mainWeather,
  weatherStats,
  hourlyForecast,
} from "../data/weatherData.js";

export default function WeatherDashboard() {
  let [Weather , setWeather] = useState(null);
  useEffect(()=>{
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Dhaka&appid=8fd153f366db70af6384ab1097d83eb7&units=metric')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setWeather(data);
    });
  },[]);
  return (
    <div className="min-h-screen w-full bg-sky-night px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
      {/* Ambient background glow, purely decorative */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(109,94,240,0.16),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(59,130,246,0.12),transparent_45%)]"
      />

      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-5 lg:h-[calc(100vh-3rem)] lg:flex-row">
        {/* Left Sidebar (~30%) */}
        <Sidebar />

        {/* Right Content Area (~70%) */}
        <main className="glass-strong flex flex-1 flex-col overflow-y-auto rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] scrollbar-thin">
          {/* Top header */}
          <div className="border-b border-white/5">
            <WeatherHeader info={headerInfo} />
          </div>

          {/* Hero weather + stats grid */}
          <div className="border-b border-white/5">
            <div className="p-5 pb-0 sm:p-6 sm:pb-0">
              <MainWeather weather={mainWeather} />
            </div>
            <WeatherStats stats={weatherStats} />
          </div>

          {/* Today's forecast */}
          <div className="border-b border-white/5">
            <ForecastSection forecast={hourlyForecast} />
          </div>

          {/* Alert bar */}
          <AlertBar/>
        </main>
      </div>
    </div>
  );
}
