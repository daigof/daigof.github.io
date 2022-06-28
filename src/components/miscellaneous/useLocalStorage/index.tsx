import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const UseLocalStorage = () => {
  const [value, setValue] = useLocalStorage<string>("value", "");

  return (
    <>
      <h1>useLocalStorage example</h1>

      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default UseLocalStorage;
