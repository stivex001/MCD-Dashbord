import {
  AccountBalanceWallet,
  CreditCard,
  PermIdentity,
} from "@mui/icons-material";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

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
              <Input type="text" placeholder="Enter Username" />
            </InputContainer>
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
