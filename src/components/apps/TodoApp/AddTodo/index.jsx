export function AddTodo({ onEnter }) {
  return (
    <div>
      <input
        type="text"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onEnter(event.target.value);
            event.target.value = "";
          }
        }}
      />
      <div>
        <select multiple>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
}
