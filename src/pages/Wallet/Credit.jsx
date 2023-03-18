import {
  AccountBalanceWallet,
  CreditCard,
  PermIdentity,
} from "@mui/icons-material";
import styled from "styled-components";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { laptop } from "../../responsive";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div`
margin: 70px 0;
${laptop({ marginLeft: "250px" })};
`;
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
  outline-color: #827fc2;;
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #5c62ae, #4088a9);
  padding: 10px;
  margin: 20px 0;
  gap: 2px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  font-weigth: 700;
  font-size: 14px;
  &:hover {
    color: #343a40;
    transition: all 0.5s;
  }
`;
const Select = styled.select`
  padding: 12px 5px;
  width: 100%;
  outline-color: #827fc2;
`;
const Option = styled.option``;

const Credit = () => {
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
            Credit User
          </Btn>
        </FormWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Credit;
