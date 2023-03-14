import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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
  height: 73vh;
  background-color: #f5f5f5;
`;
const Form = styled.form`
  background-color: #fff;

  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 10px;
`;
const FormWrapper = styled.div`
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1px;
`;
const Input = styled.input`
  padding: 12px;
  flex: 1;
  outline: none;
  background-color: ${(prop) =>
    prop.background === "email" ? "#e9ecef" : "none"};
  border: 0.5px solid #d4d8e1;

  &:focus {
    outline: 0.1px solid #605daf;
  }
`;
const InputTitle = styled.p`
  padding: 12px;
  fontsize: 14px;
  color: #495057;
  background: #e9ecef;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  color: #fff;
  background-color: #5b63ae;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  text-align: center;
  &:hover {
    color: black;
    transition: all 0.5s;
  }
`;

const Edit = () => {
  const location = useLocation();
  const settingsId = Number(location.pathname.split("/")[2]);
  const [inputData, setInputData] = useState({
    name: "",
    message: "",
  });

  const settings = useSelector((state) =>
    state.settings.settings.find((setting) => setting.id === settingsId)
  );

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Modify Setting</H3>
          <DescP>
            Settings / <DescSpan>Modify Setting</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper>
          <Form>
            <InputContainer>
              <InputTitle>Name</InputTitle>
              <Input
                background="email"
                onChange={handleData}
                value={inputData.name || ""}
                name="name"
                placeholder={settings.name}
              />
            </InputContainer>
            <InputContainer>
              <InputTitle>Value</InputTitle>
              <Input
                type="text"
                onChange={handleData}
                value={inputData.message || ""}
                name="name"
              />
            </InputContainer>
          </Form>
          <Btn>Update</Btn>
        </FormWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Edit;
