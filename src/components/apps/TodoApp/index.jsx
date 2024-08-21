import React from "react";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import { getID } from "../../../utilities/lib";

function TodoApp() {
  const [todos, setTodos] = React.useState([]);

  function addTodo(title) {
    setTodos([
      ...todos,
      {
        id: getID(),
        title,
        isCompleted: false,
      },
    ]);
  }

  function toggleTodoStatus(todo) {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
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
      <AddTodo onEnter={addTodo} />
      <TodoList todos={todos} onStatusChange={toggleTodoStatus} />
    </div>
  );
}

export { TodoApp };
