import { Search } from "@mui/icons-material";
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
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9ecef;
  width: 100%;
  border-radius: 1px;
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
  gap: 2px;
  color: white;
  cursor: pointer;
  border-radius: 1px;
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

const Reversal = () => {
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Desc>
          <H3>Reversal</H3>
          <DescP>
            Transaction / <DescSpan>Verification &gt; Reversal</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper>
      <Form>
        <InputContainer>
          <p style={{ padding: "5px", fontSize: "20px", color: "#495057" }}>
            REF
          </p>
          <Input type="text" placeholder="Enter transaction id or reference" />
        </InputContainer>
        <Btn>
          <Search />
          <Button>LookUp</Button>
        </Btn>
      </Form>
    </FormWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Reversal;
