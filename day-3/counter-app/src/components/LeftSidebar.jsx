function LeftSidebar() {
  return (
    <aside className="bg-zinc-50 dark:bg-[#1e293b] border border-zinc-200 dark:border-zinc-700 rounded-3xl p-5">

      <h2 className="text-lg font-semibold mb-5">
        Controls
      </h2>

      <div className="flex flex-col gap-3">

        <button className="bg-zinc-200 dark:bg-zinc-800 p-3 rounded-xl hover:scale-105 transition">
          ⬆ Increase
        </button>

        <button className="bg-zinc-200 dark:bg-zinc-800 p-3 rounded-xl hover:scale-105 transition">
          ⬇ Decrease
        </button>

        <button className="bg-zinc-200 dark:bg-zinc-800 p-3 rounded-xl hover:scale-105 transition">
          🔄 Reset
        </button>

        <button className="bg-zinc-200 dark:bg-zinc-800 p-3 rounded-xl hover:scale-105 transition">
          🌙 Toggle Theme
        </button>

      </div>

    </aside>
  );
}

export default LeftSidebar;