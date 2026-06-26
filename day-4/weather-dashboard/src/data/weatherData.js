// src/data/weatherData.js
// 100% static mock data — no API calls, no business logic.

export const currentLocation = {
  city: "Dhaka",
  country: "Bangladesh",
  temp: 31,
  condition: "Partly Cloudy",
  icon: "partly-cloudy",
};

export const headerInfo = {
  city: "Dhaka",
  country: "Bangladesh",
  date: "Friday, 24 May 2024",
  time: "10:30 AM",
};

export const mainWeather = {
  temp: 31,
  condition: "Partly Cloudy",
  feelsLike: 34,
  icon: "partly-cloudy",
};

export const weatherStats = [
  {
    id: "humidity",
    label: "Humidity",
    value: "75%",
    icon: "droplet",
    accent: "text-sky-400",
  },
  {
    id: "wind",
    label: "Wind Speed",
    value: "12 km/h",
    icon: "wind",
    accent: "text-slate-300",
  },
  {
    id: "pressure",
    label: "Pressure",
    value: "1012 hPa",
    icon: "gauge",
    accent: "text-emerald-400",
  },
  {
    id: "visibility",
    label: "Visibility",
    value: "10 km",
    icon: "eye",
    accent: "text-sky-300",
  },
];

export const recentSearches = [
  {
    id: "london",
    city: "London",
    country: "UK",
    temp: 18,
    icon: "cloudy",
  },
  {
    id: "newyork",
    city: "New York",
    country: "USA",
    temp: 22,
    icon: "sunny",
  },
  {
    id: "tokyo",
    city: "Tokyo",
    country: "Japan",
    temp: 26,
    icon: "rainy",
  },
  {
    id: "paris",
    city: "Paris",
    country: "France",
    temp: 16,
    icon: "cloudy",
  },
];

export const hourlyForecast = [
  { id: "now", time: "Now", temp: 31, icon: "partly-cloudy" },
  { id: "11am", time: "11 AM", temp: 32, icon: "partly-cloudy" },
  { id: "12pm", time: "12 PM", temp: 33, icon: "sunny" },
  { id: "1pm", time: "1 PM", temp: 34, icon: "partly-cloudy" },
  { id: "2pm", time: "2 PM", temp: 33, icon: "cloudy" },
  { id: "3pm", time: "3 PM", temp: 30, icon: "rainy" },
  { id: "4pm", time: "4 PM", temp: 28, icon: "rainy" },
  { id: "5pm", time: "5 PM", temp: 27, icon: "cloudy" },
  { id: "6pm", time: "6 PM", temp: 26, icon: "clear-night" },
];

export const alertMessage = {
  text: "There is a chance of rain around 3 PM. Carry an umbrella!",
};
