# Weather App Dashboard — Static UI

A fully static, frontend-only Weather Dashboard built with **React + Vite + Tailwind CSS v4**, recreating the dark glassmorphism design provided in the project brief.

> ⚠️ This is a **UI-only** project. There are no API calls, no fetch logic, and no business logic — every value on screen comes from `src/data/weatherData.js`.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
│
├── assets/
│   └── weather-bg.jpg              # generated sky/sun hero background
│
├── data/
│   └── weatherData.js              # ALL static mock data lives here
│
├── components/
│   ├── sidebar/
│   │   ├── Sidebar.jsx             # composes the left column
│   │   ├── SearchBox.jsx
│   │   ├── CurrentLocation.jsx
│   │   ├── RecentSearches.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── weather/
│   │   ├── WeatherHeader.jsx       # location / date / time / unit toggle
│   │   ├── MainWeather.jsx         # hero temperature card
│   │   ├── WeatherStats.jsx        # humidity / wind / pressure / visibility
│   │   ├── ForecastSection.jsx     # "Today's Forecast" wrapper
│   │   ├── ForecastCard.jsx        # single hourly forecast tile
│   │   ├── AlertBar.jsx            # dismissible rain alert strip
│   │   └── TemperatureToggle.jsx   # °C / °F segmented control
│   │
│   └── ui/
│       ├── GlassCard.jsx           # reusable glassmorphism surface
│       ├── SectionTitle.jsx        # icon + label section heading
│       └── WeatherIcon.jsx         # maps a mock icon key → lucide icon
│
├── pages/
│   └── WeatherDashboard.jsx        # assembles sidebar + main content
│
├── App.jsx
├── main.jsx
└── index.css                       # Tailwind import + design tokens
```

## Design notes

- **Layout**: a left sidebar (~30%) and right content area (~70%) inside a single rounded dashboard "frame", matching the annotated reference image.
- **Style**: dark navy base (`--color-base-*` tokens in `index.css`), glassmorphism cards (`.glass`, `.glass-strong`, `.glass-soft` utility classes — blur + translucent borders), a violet accent (`--color-accent-500`) for active states, icons, and highlights.
- **Hero background**: `assets/weather-bg.jpg` is a generated sunset sky/sun/cloud image used purely as a decorative backdrop behind a dark gradient overlay, so it never competes with text legibility.
- **Icons**: [`lucide-react`](https://lucide.dev) throughout; weather condition icons are centralised in `components/ui/WeatherIcon.jsx` so swapping icon styles only touches one file.
- **Interactivity kept local & cosmetic only**: the Dark Mode switch, °C/°F toggle, and alert dismiss button each hold small `useState` for their own visual affordance (e.g. switch position) — none of them perform real theme switching, unit conversion, or alert logic, per the "static UI only" requirement.
- **Responsive**:
  - Desktop (`lg+`): sidebar fixed width, content fills remaining space, side-by-side.
  - Tablet/mobile (`< lg`): sidebar and content stack vertically; stats grid drops to 2 columns; forecast cards scroll horizontally.

## Replacing the mock data

Everything rendered on screen is sourced from `src/data/weatherData.js`. To preview different values, edit the exported objects/arrays there — no component code needs to change.
