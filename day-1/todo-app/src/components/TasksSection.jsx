// TasksSection.jsx

import Task from "./task";

function TasksSection({ tasks , onupdatetask , handledelete , handledonetask}) {
  return (
    <div className="bg-zinc-800 p-5 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-5">Tasks</h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <Task id={task.id} task={task} lupdatetask={onupdatetask} ondelete={handledelete} ondonetask={handledonetask}/>
        ))}
      </div>
    </div>
  );
}

export default TasksSection;
