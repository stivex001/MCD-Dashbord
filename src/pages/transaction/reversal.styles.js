import { Link } from "react-router-dom";
import styled from "styled-components";
import { laptop } from "../../responsive";

export const Container = styled.div`
  margin: 70px 0;
  ${laptop({ marginLeft: "250px" })};
  background-color: #f4f4f4;
`;
export const Wrapper = styled.div`
  padding: 20px;
`;
export const FormWrapper = styled.form`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
export const Form = styled.div`
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
  outline-color: #d4d8e1;
  border: 1px solid #d4d8e1;
`;
export const Btn = styled.button`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #5c62ae, #4088a9);
  padding: 9px;
  margin: 20px 0;
  gap: 2px;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  font-weigth: 700;
  font-size: 14px;
  &:hover {
    color: #343a40;
    transition: all 0.5s;
  }
`;
export const Reverse = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(to right, #f96a5d, #f64369);
  padding: 12px;
  margin: 30px 0;
  gap: 10px;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  font-weigth: 700;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: #343a40;
    transition: all 0.5s;
  }
`;
