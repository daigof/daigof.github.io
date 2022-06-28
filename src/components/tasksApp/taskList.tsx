import React from "react";

import { useTasks } from "./context";
import TaskItem from "./taskItem";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks!.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
}
