import React, { memo } from "react";

export const AddTask = memo(({ onEnter }) => {
  const handler = React.useCallback((event) => {
    if (event.key === "Enter") {
      onEnter({
        title: event.target.value,
        isCompleted: false,
      });
      event.target.value = "";
    }
  }, []);
  return (
    <div>
      <input onKeyDown={handler} />
    </div>
  );
});
