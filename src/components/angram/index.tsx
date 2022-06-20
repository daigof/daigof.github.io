import React, { useState } from "react";
import { FlexContainer } from "./styles";

const Anagram = () => {
  const [isAnagram, setIsAnagram] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const calculateAnagram = (input1: string, input2: string) => {
    if (input1.length !== input2.length) {
      setIsAnagram(false);
      return;
    }

    // Array of chars
    const array1 = input1.split("");
    const array2 = input2.split("");

    // order array of chars
    const sortedArray1 = array1.sort();
    const sortedArray2 = array2.sort();

    // loop brute force compare  1 by 1
    let flag = true;
    sortedArray1.forEach((_, index) => {
      if (sortedArray1[index] !== sortedArray2[index]) {
        flag = false;
      }
    });

    setIsAnagram(flag);
  };

  return (
    <>
      <h1>Anagram calculator</h1>
      <p>
        <em>calculation is made in real time as you type in the inputs...</em>
      </p>
      <FlexContainer>
        <input
          type="text"
          placeholder="type a word here"
          value={input1}
          onChange={(e) => {
            setInput1(e.target.value);
            calculateAnagram(e.target.value, input2);
          }}
        />
        <input
          type="text"
          placeholder="type a word here"
          value={input2}
          onChange={(e) => {
            setInput2(e.target.value);
            calculateAnagram(input1, e.target.value);
          }}
        />
      </FlexContainer>

      <hr />
      <h3>{isAnagram ? "Yes it is an angram" : "No, it is not an angram"}</h3>
      <hr />
      <div>
        Controlled Input1 value: <strong>{input1}</strong>
      </div>
      <hr />
      <div>
        Controlled Input2 value: <strong>{input2}</strong>
      </div>
    </>
  );
};

export default Anagram;
