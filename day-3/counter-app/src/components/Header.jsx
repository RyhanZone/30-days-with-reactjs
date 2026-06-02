function Header({ theme, toggleTheme }) {
  return (
    <header className="flex items-center justify-between border-b border-zinc-300 dark:border-zinc-700 px-6 py-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-violet-600"></div>
        <h1 className="text-xl font-bold">Counter App</h1>
      </div>

      <div>
        <p className="text-sm text-green-500">● Count is saved</p>
      </div>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:scale-105 transition"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
}

export default Header;
