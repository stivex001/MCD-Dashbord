import {
  AccountBalanceWallet,
  Close,
  CreditCard,
  PermIdentity,
} from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { creditUser } from "../../Redux/apiCalls";
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
  const [formData, setFormData] = useState({
    enterUsername: "",
    enterAmount: "",
    fundType: "fund",
    bankType: "transfer",
    description: "",
  });
  const [enterUsernameIsValid, setEnterUsernameIsValid] = useState(true);
  const dispatch = useDispatch();
  const {message, error} = useSelector(state => state.wallet)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.enterUsername.trim() === "") {
      setEnterUsernameIsValid(false);
      return;
    }
    creditUser(dispatch, {
      user_name: formData.enterUsername,
      type: "credit",
      payment_channel: formData.bankType,
      amount: formData.amount,
      odescription: formData.description,
    });
    setEnterUsernameIsValid(true);
    setFormData("");
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
                name="enterUsername"
                value={formData.enterUsername || ""}
                onChange={handleInputChange}
              />
            </InputContainer>
            {!enterUsernameIsValid && (
              <MsgContainer>
                <H2>Username is required!</H2>
                <Close style={{ color: "#806e6b", cursor: "pointer" }} />
              </MsgContainer>
            )}
            {message && (
              <MsgContainer type="success">
                <H2 type="success">{`${formData.enterUsername} wallet credited successfully!`}</H2>
                <Close style={{ color: "#806e6b", cursor: "pointer" }} />
              </MsgContainer>
            )}

            <InputContainer>
              <AccountBalanceWallet
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input
                type="number"
                placeholder="Enter Amount"
                name="enterAmount"
                value={formData.enterAmount || ""}
                onChange={handleInputChange}
              />
            </InputContainer>
            <InputContainer>
              <Select
                name="fundType"
                id=""
                value={formData.fundType || "fund"}
                onChange={handleInputChange}
              >
                <Option value="fund">Fund</Option>
                <Option value="debit">Debit</Option>
              </Select>
            </InputContainer>
            <InputContainer>
              <Select
                name="bankType"
                id=""
                value={formData.bankType || "transfer"}
                onChange={handleInputChange}
              >
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
                name="description"
                value={formData.description || ""}
                onChange={handleInputChange}
              />
            </InputContainer>
          </Form>
          <Btn type="submit">
            <CreditCard />
            Credit User
          </Btn>
          {error && (
              <MsgContainer>
                <H2>opps!! something went wrong</H2>
                <Close style={{ color: "#806e6b", cursor: "pointer" }} />
              </MsgContainer>
            )}
        </FormWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Credit;
