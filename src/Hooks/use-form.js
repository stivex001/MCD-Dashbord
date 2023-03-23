import { useState } from "react";

const useInput = () => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterPhoneNo, setEnterPhoneNo] = useState("");
  const [enterGroup, setEnterGroup] = useState("");
  const [enterWallet, setEnterWallet] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterDate, setEnterDate] = useState("");
};

export default useInput;
