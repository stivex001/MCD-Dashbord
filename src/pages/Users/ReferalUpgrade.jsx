import { PermIdentity, PersonAddAlt } from "@mui/icons-material";
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
  padding: 10px;
  margin: 20px 0;
  width: 150px;
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

const ReferalUpgrade = () => {
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Desc>
          <H3>Referral Upgrade</H3>
          <DescP>
            User / <DescSpan>Referral Upgrade</DescSpan>
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
              <Select name="referal" id="">
                <Option value="larvae">Larvae - #3,000</Option>
                <Option value="butterfly">Butterfly - #7000</Option>
                <Option value="bronze">Bronze - #15000</Option>
                <Option value="silver">Silver - #25000</Option>
                <Option value="gold">Gold - #35000</Option>
              </Select>
            </InputContainer>
          </Form>
          <Btn>
            <PersonAddAlt />
            <Button>Upgrade User</Button>
          </Btn>
        </FormWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default ReferalUpgrade;
