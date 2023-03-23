import { useState } from "react";

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  //   const [enterPhoneNo, setEnterPhoneNo] = useState("");
  //   const [enterGroup, setEnterGroup] = useState("");
  //   const [enterWallet, setEnterWallet] = useState("");
  //   const [enterEmail, setEnterEmail] = useState("");
  //   const [enterDate, setEnterDate] = useState("");

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const reset = () => {
    setEnteredValue('')
  }

  return {
    value: enteredValue,
    valueChangeHandler,
    reset
  };
};

export default useInput;
