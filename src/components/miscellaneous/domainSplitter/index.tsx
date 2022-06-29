import React, { useState } from "react";

function domainSplitterFn(domain: string) {
  const splits = domain.split(".").reverse();
  const accumulator: Array<string> = [];

  splits.forEach((element, index) => {
    if (index > 0) {
      accumulator.push(element + "." + accumulator[index - 1]);
    } else {
      accumulator.push(element);
    }
  });

  return accumulator;
}

const initialText = "www.calendar.google.com";
const initialCalculatedValue = domainSplitterFn(initialText);

const DomainSplitter = () => {
  const [text, setText] = useState(initialText);
  const [calculatedValue, setCalculatedValue] = useState(
    initialCalculatedValue
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = e.target;
    setText(newValue);
    setCalculatedValue(domainSplitterFn(newValue));
  };

  return (
    <>
      <h1>DomainSplitter</h1>
      <em>
        This algorithm splits a domain name passed as string into subdomains
        returned as array of strings
      </em>
      <br />
      <em>
        e.g.: for <code>'www.calendar.google.com'</code> should return{" "}
        <code>
          ['com', 'google.com', 'calendar.google.com',
          'www.calendar.google.com']
        </code>
      </em>

      <div>
        Input: <input type="text" value={text} onChange={handleChange} />
      </div>
      <div>
        Output: <code>{`[${calculatedValue.join(", ")}]`}</code>
      </div>
    </>
  );
};

export default DomainSplitter;
