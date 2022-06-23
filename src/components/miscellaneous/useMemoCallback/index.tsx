import React, { useState, useMemo } from "react";
import Count from "./count";

const UseMemoCallback = () => {
  const [text, setText] = useState("");

  const MemoizedCount = useMemo(() => Count, []);

  return (
    <>
      <h1>UseMemoCallback</h1>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <MemoizedCount />
      </div>
    </>
  );
};

export default UseMemoCallback;
