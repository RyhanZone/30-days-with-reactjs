import { useState } from "react";

function RightSidebar({ min, max, handleminmaxvalue, count }) {
  const [minvalue, setminvalue] = useState(0);
  const [maxvalue, setmaxvalue] = useState(100);

  const totalRange = max - min;

  const percentage =
    totalRange === 0
      ? 0
      : Math.min(
          100,
          Math.max(0, ((count - min) / totalRange) * 100)
        );

  return (
    <aside className="bg-zinc-50 dark:bg-[#1e293b] border border-zinc-200 dark:border-zinc-700 rounded-3xl p-5">
      <h2 className="text-lg font-semibold mb-5">Settings</h2>

      <div className="space-y-5">
        <div>
          <label className="text-sm text-zinc-500">
            Min Limit
          </label>

          <input
            type="number"
            value={minvalue}
            onChange={(e) => setminvalue(e.target.value)}
            placeholder="0"
            className="w-full mt-2 p-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-500">
            Max Limit
          </label>

          <input
            type="number"
            value={maxvalue}
            onChange={(e) => setmaxvalue(e.target.value)}
            placeholder="100"
            className="w-full mt-2 p-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 outline-none"
          />
        </div>

        <button
          onClick={() =>
            handleminmaxvalue(
              Number(minvalue),
              Number(maxvalue)
            )
          }
          className="w-full py-3 rounded-xl bg-violet-600 dark:bg-violet-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 hover:bg-violet-700 dark:hover:bg-violet-600 transition-all duration-300"
        >
          Set
        </button>

        <div>
          <div className="w-full h-3 rounded-full bg-zinc-300 dark:bg-zinc-700 overflow-hidden">
            <div
              style={{
                width: `${Math.floor(percentage)}%`,
              }}
              className="h-full bg-violet-600 rounded-full transition-all duration-300"
            />
          </div>

          <p className="text-center text-sm mt-2 text-zinc-500">
            {Math.floor(percentage)}%
          </p>
        </div>

        <p
          className={`text-sm ${
            count >= min && count <= max
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {count >= min && count <= max
            ? "You are within the limit"
            : "You are outside the limit"}
        </p>
      </div>
    </aside>
  );
}

export default RightSidebar;