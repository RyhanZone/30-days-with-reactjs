import { useState } from "react";

function MainCounter({resetfunction, handleincrease, handledecrease, count }) {
  return (
    <main className="flex items-center justify-between bg-zinc-50 dark:bg-[#1e293b] border border-zinc-200 dark:border-zinc-700 rounded-3xl p-10">
      <button
        onClick={() => handledecrease()}
        className="w-14 h-14 rounded-full bg-white dark:bg-zinc-800 text-2xl shadow-lg hover:scale-110 transition"
      >
        -
      </button>

      <div className="text-center">
        <div className="w-52 h-52 rounded-full border-4 border-violet-600 flex items-center justify-center mx-auto mb-5">
          <div>
            <p className="text-sm text-zinc-500">Current Count</p>

            <h1 className="text-6xl font-bold">{count}</h1>

            <p className="text-sm text-zinc-500 mt-2">🚀 Keep going!</p>
          </div>
        </div>

        <button
          onClick={() => resetfunction()}
          className="px-6 py-3 rounded-full bg-violet-600 text-white hover:scale-105 transition"
        >
          Reset
        </button>
      </div>

      <button
        onClick={() => handleincrease()}
        className="w-14 h-14 rounded-full bg-white dark:bg-zinc-800 text-2xl shadow-lg hover:scale-110"
      >
        +
      </button>
    </main>
  );
}

export default MainCounter;
