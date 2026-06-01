// AddTask.jsx

import { useState } from "react";

function AddTask({ onaddtask }) {
  let [text, settext] = useState("");
  return (
    <div className="bg-zinc-800 p-5 rounded-2xl mb-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>

      <div className="flex gap-3">
        <input
          onChange={(e) => settext(e.target.value)}
          value={text}
          type="text"
          placeholder="Enter task..."
          className="flex-1 px-4 py-3 rounded-xl bg-zinc-700 outline-none"
        />

        <button
          onClick={() => onaddtask(text)}
          className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-medium hover:cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTask;
