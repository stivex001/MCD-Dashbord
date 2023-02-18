import {
  AccountBalanceWallet,
  CreditCard,
  PermIdentity,
} from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const FormWrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9ecef;
  width: 100%;
  border-radius: 1px;
  border: 0.2px solid #e9ecef;
`;
const Input = styled.input`
  padding: 12px;
  width: 100%;
  outline-color: #605daf;
`;
const Btn = styled.div`
  display: flex;
  align-items: center;
  background-color: #4e74ab;
  padding: 10px 12px;
  margin: 20px 0;
  width: 120px;
  gap: 2px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    color: #343a40;
  }
`;
const Button = styled.button`
  border: none;
  background: none;
  color: white;
  font-weigth: 700;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #343a40;
  }
`;
const Select = styled.select`
  padding: 12px 5px;
  width: 100%;
  outline-color: #605daf;
`;
const Option = styled.option``;

const Credit = () => {
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Desc>
          <H3>Credit User</H3>
          <DescP>
            Wallet / <DescSpan>Credit User</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper>
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
          <Btn>
            <CreditCard />
            <Button>Credit User</Button>
          </Btn>
        </FormWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Credit;
