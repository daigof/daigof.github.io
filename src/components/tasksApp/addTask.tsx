import { useState } from "react";

import { useTasksDispatch } from "./context";

let nextId = 3;

const AddTask: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  if (!dispatch) {
    return null;
  }

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
