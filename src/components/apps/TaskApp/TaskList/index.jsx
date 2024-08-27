export function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li>
          <input
            type="checkbox"
            {...(task.isCompleted ? { checked: true } : {})}
          />
          <label>{task.title}</label>
          {task.isCompleted ? "COMPLETED" : "PENDING"}
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
}
