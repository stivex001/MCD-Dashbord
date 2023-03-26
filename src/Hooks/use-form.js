import { useState } from "react";

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const reset = () => {
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    valueChangeHandler,
    reset,
  };
};

export default useInput;
