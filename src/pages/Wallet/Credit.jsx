import {
  AccountBalanceWallet,
  Close,
  CreditCard,
  PermIdentity,
} from "@mui/icons-material";
import { useState } from "react";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { H2, MsgContainer } from "../transaction/pending.styles";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import {
  Btn,
  Container,
  Form,
  FormWrapper,
  Input,
  InputContainer,
  Option,
  Select,
  Wrapper,
} from "./credit.styles";

const Credit = () => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterUsernameIsValid, setEnterUsernameIsValid] = useState(true);

  const onChangeNameHandler = (e) => {
    setEnterUsername(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (enterUsername.trim() === "") {
      setEnterUsernameIsValid(false);
      return;
    }
    setEnterUsernameIsValid(true);
    setEnterUsername("");
    console.log(enterUsername);
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Credit User</H3>
          <DescP>
            Wallet / <DescSpan>Credit User</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper onSubmit={handleFormSubmit}>
          <Form>
            <InputContainer>
              <PermIdentity
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input
                type="text"
                placeholder="Enter Username"
                onChange={onChangeNameHandler}
                value={enterUsername}
              />
            </InputContainer>
            {!enterUsernameIsValid && (
              <MsgContainer>
                <H2>Username is required!</H2>
                <Close style={{ color: "#806e6b", cursor: "pointer" }} />
              </MsgContainer>
            )}

            <InputContainer>
              <AccountBalanceWallet
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input type="number" placeholder="Enter Amount" />
            </InputContainer>
            <InputContainer>
              <Select name="fund" id="">
                <Option value="fund">Fund</Option>
                <Option value="debit">Debit</Option>
              </Select>
            </InputContainer>
            <InputContainer>
              <Select name="bank" id="">
                <Option value="transfer">Bank Transfer</Option>
                <Option value="payant">Payant</Option>
                <Option value="monify">Monify</Option>
                <Option value="rave">Rave</Option>
                <Option value="paystack">Paystack</Option>
                <Option value="carbon">Carbon</Option>
                <Option value="opay">Opay</Option>
              </Select>
            </InputContainer>
            <InputContainer>
              <p style={{ padding: "5px", fontSize: "16px", color: "#495057" }}>
                Description
              </p>
              <Input
                type="text"
                placeholder="Enter Additional Description (Optional)"
              />
            </InputContainer>
          </Form>
          <Btn type="submit">
            <CreditCard />
            Credit User
          </Btn>
        </FormWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Credit;
