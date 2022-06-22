import React from "react";
import useApi from "./useApi";

const UseApiExample = () => {
  const { loading, data } = useApi(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h1>Custom hook example (fetch api)</h1>
      {loading ? <h3>Loading</h3> : <h3>Successfully fetched</h3>}
      {JSON.stringify(data).substring(0, 30)}....
    </div>
  );
};

export default UseApiExample;
