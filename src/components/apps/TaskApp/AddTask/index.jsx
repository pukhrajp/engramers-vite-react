let id = 4;
export function AddTask({ onEnter }) {
  return (
    <div>
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onEnter({
              id,
              title: event.target.value,
              isCompleted: false,
            });
            event.target.value = "";
          }
        }}
      />
    </div>
  );
}
