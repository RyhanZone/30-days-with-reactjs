import { useState } from "react";
import AddTask from "./AddTask";
import TasksSection from "./TasksSection";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: false },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

function App() {
  let [tasks, settasks] = useState(initialTasks);

  function handleaddtask(text) {
    settasks([
      ...tasks,
      {
        id: tasks.length,
        text: text,
        done: false,
      },
    ]);
  }
  function onupdatetask(texto, taskid) {
    let updatetask = tasks.map((item) => {
      if (item.id == taskid) {
        return { ...item, text: texto };
      }
      return item;
    });
    settasks(updatetask);
  }
  function handledelete(delettaskid) {
    let newTasks = tasks.filter((item) => {
      return item.id !== delettaskid;
    });

    settasks(newTasks);
  }
  function handledonetask(taskid) {
    let updatetask = tasks.map((item) => {
      if (item.id == taskid) {
        console.log(taskid)
        return { ...item, done: !item.done };
      }
      return item;
    });

    settasks(updatetask);
    console.log(updatetask)
  }
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Todo App</h1>

        <AddTask onaddtask={handleaddtask} />
        <TasksSection
          tasks={tasks}
          onupdatetask={onupdatetask}
          handledelete={handledelete}
          handledonetask={handledonetask}
        />
      </div>
    </div>
  );
}

export default App;
