import styled from "styled-components";
import { laptop } from "../../responsive";

export const Container = styled.div`
margin: 70px 0;
${laptop({ marginLeft: "250px" })};
`;
export const Wrapper = styled.div`
  padding: 20px;
`;
export const FormWrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9ecef;
  width: 100%;
  border-radius: 1px;
`;
export const Input = styled.input`
  padding: 12px;
  width: 100%;
  outline-color: #827fc2; ;
`;
export const Btn = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #5c62ae, #4088a9);
  padding: 10px;
  margin: 20px 0;
  gap: 2px;
  color: white;
  cursor: pointer;
  border-radius: 1px;
  font-weigth: 700;
  font-size: 14px;
  &:hover {
    color: #343a40;
    transition: all 0.5s;
  }
`;