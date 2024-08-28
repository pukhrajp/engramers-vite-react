import React from "react";
import { AddTask } from "./AddTask";
import { TaskDetail } from "./TaskDetail";
import { TaskList } from "./TaskList";

export function TaskApp() {
  const [tasks, setTasks] = React.useState([
    { id: 1, title: "My first task 1", isCompleted: true },
    { id: 2, title: "My first task 2", isCompleted: false },
    { id: 3, title: "My first task 3", isCompleted: true },
  ]);
  const [filteredTasks, setFilteredTasks] = React.useState(tasks);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(task) {
    setTasks(tasks.filter((item) => item.id !== task.id));
  }

  function filterTasks(status) {
    if (status === "pending") {
      setFilteredTasks(tasks.filter((task) => !task.isCompleted));
    } else if (status === "completed") {
      setFilteredTasks(tasks.filter((task) => task.isCompleted));
    } else {
      setFilteredTasks([...tasks]);
    }
    console.log("filteredTAsks: ", filteredTasks);
  }
  function toggleStatus(task) {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  }
  return (
    <div>
      <AddTask onEnter={addTask} />
      <TaskDetail
        detail={{ id: 1, title: "My first task", isCompleted: true }}
      />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={toggleStatus}
        onTaskDelete={deleteTask}
        onFilterOptionChange={filterTasks}
      />
    </div>
  );
}
