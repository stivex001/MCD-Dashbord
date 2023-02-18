import { Search } from "@mui/icons-material";
import styled from "styled-components";

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
const Verify = () => {
  return (
    <FormWrapper>
      <Form>
        <InputContainer>
          <p style={{ padding: "5px", fontSize: "20px", color: "#495057" }}>
            REF
          </p>
          <Input type="text" placeholder="Enter Username" />
        </InputContainer>
        <Btn>
          <Search />
          <Button>Verify</Button>
        </Btn>
      </Form>
    </FormWrapper>
  );
};

export default Verify;
