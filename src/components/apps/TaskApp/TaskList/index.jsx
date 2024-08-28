import React from "react";

export function TaskList({
  tasks,
  onStatusChange,
  onTaskDelete,
  onFilterOptionChange,
}) {
  return (
    <div>
      <div>
        <select onChange={(event) => onFilterOptionChange(event.target.value)}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value={"completed"}>Compeleted</option>
        </select>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              {...(task.isCompleted ? { checked: true } : {})}
              onChange={() => onStatusChange(task)}
            />
            <label>{task.title}</label>
            {task.isCompleted ? "COMPLETED" : "PENDING"}
            <button onClick={() => onTaskDelete(task)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
