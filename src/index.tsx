import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import NoMatch from "./components/noMatch";
import Anagram from "./components/angram";
import TicTacToe from "./components/ticTacToe";
import Miscellaneous from "./components/miscellaneous";
import TodoList from "./components/todoList";
import TasksApp from "./components/tasksApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/examples-2022-react-ts">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="anagram" element={<Anagram />} />
          <Route path="tic-tac-toe" element={<TicTacToe />} />
          <Route path="misc" element={<Miscellaneous />} />
          <Route path="todo-list" element={<TodoList />} />
          <Route path="tasks-app" element={<TasksApp />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
