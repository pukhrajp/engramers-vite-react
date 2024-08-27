import { AddTask } from "./AddTask";
import { TaskDetail } from "./TaskDetail";
import { TaskList } from "./TaskList";

export function TaskApp() {
  return (
    <div>
      <AddTask />
      <TaskDetail
        detail={{ id: 1, title: "My first task", isCompleted: true }}
      />
      <TaskList
        tasks={[
          { id: 1, title: "My first task 1", isCompleted: true },
          { id: 2, title: "My first task 2", isCompleted: false },
          { id: 3, title: "My first task 3", isCompleted: true },
        ]}
      />
    </div>
  );
}
