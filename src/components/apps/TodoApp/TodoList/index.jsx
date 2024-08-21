export function TodoList({ todos = [], onStatusChange }) {
  if (!todos.length) {
    return null;
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.title} - [{todo.isCompleted ? "COMPLETED" : "PENDING"}]
            <button onClick={() => onStatusChange(todo)}>Toggle Status</button>
          </li>
        );
      })}
    </ul>
  );
}
