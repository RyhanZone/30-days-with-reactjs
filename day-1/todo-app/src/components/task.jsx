import { useState } from "react";

function Task({ task, lupdatetask, ondelete, ondonetask }) {
  let [updatetask, setupdatetask] = useState(false);
  let [text, settext] = useState("");
  function updatedtask() {
    setupdatetask(true);
    if (updatetask == true) {
      setupdatetask(false);
      if (text != "") {
        lupdatetask(text, task.id);
      }
    }
  }

  function renderTask() {
    if (updatetask === false) {
      return (
        <label className="text-lg font-medium" htmlFor={task.id}>
          {task.text}
        </label>
      );
    } else {
      return (
        <input
          type="text"
          Value={task.text}
          onChange={(e) => settext(e.target.value)}
          className="bg-zinc-600 px-2 rounded"
        />
      );
    }
  }

  return (
    <div className="bg-zinc-700 p-4 rounded-xl flex items-center justify-between">
      <div className="flex gap-2">
        <input type="checkbox" id={task.id} onChange={() => ondonetask(task.id)} />

        {renderTask()}
      </div>

      <div className="flex gap-2">
        <button
          onClick={updatedtask}
          className="bg-blue-500 px-4 py-2 rounded-lg hover:cursor-pointer"
        >
          {updatetask == true ? "Save" : "Edit"}
        </button>

        <button
          onClick={() => ondelete(task.id)}
          className="bg-red-500 px-4 py-2 rounded-lg hover:cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
