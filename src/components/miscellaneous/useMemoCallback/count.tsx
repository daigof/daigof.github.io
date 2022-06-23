import React, { useState } from "react";

const Count: React.FC = () => {
  const [count, setCount] = useState(0);

  console.log("Count rendered");
  return (
    <>
      <div>
        <div>Count: {count}</div>

        <button onClick={() => setCount((count) => count + 1)}>
          Increment count
        </button>
      </div>
    </>
  );
};

export default Count;
