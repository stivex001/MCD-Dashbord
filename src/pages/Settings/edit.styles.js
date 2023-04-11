import styled from "styled-components";
import { laptop } from "../../responsive";

export const Container = styled.div`
  margin: 70px 0;
  ${laptop({ marginLeft: "250px" })};
`;
export const Wrapper = styled.div`
  padding: 20px;
  height: 73vh;
  background-color: #f5f5f5;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;
export const FormWrapper = styled.form`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1px;
`;
export const Input = styled.input`
  padding: 10px;
  flex: 1;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  color: #495057;
  background-color: ${(prop) =>
    prop.background === "email" ? "#e9ecef" : "none"};
  border: 0.5px solid #d4d8e1;

  &:focus {
    outline: 0.1px solid #605daf;
  }
`;
export const InputTitle = styled.p`
  padding: 12px;
  font-size: 14px;
  color: #495057;
  background: #e9ecef;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  color: #fff;
  background: linear-gradient(to right, #5966ae, #4383a9);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  text-align: center;
  &:hover {
    color: black;
    transition: all 0.5s;
  }
`;
