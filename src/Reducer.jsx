import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "increment_age") {
    return {
      age: state.age + 1,
    };
  }
  throw new Error("Unknown action type");
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { age: 23 });
  const [input, setInput] = useState("");

  const onChangeFun = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <p>My Age is {state.age}</p>
      <button onClick={() => dispatch({ type: "increment_age" })}>
        Increment Age
      </button>

      <br />
      <input type="text" onChange={onChangeFun} value={input} />
      <p>The input is {input}</p>
    </>
  );
};

export default Reducer;
