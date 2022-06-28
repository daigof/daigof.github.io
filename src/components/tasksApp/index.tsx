import React from "react";

import { TasksProvider } from "./context";
import AddTask from "./addTask";
import TaskList from "./taskList";

const TasksApp = () => (
  <TasksProvider>
    <h1>Tasks app</h1>
    <p>
      <em>
        example of <code>useContext</code> and <code>useReducer</code> usage and
        TS typing...
      </em>
    </p>
    <AddTask />
    <TaskList />
  </TasksProvider>
);

export default TasksApp;
