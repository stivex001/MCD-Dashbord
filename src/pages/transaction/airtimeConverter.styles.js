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
  margin-bottom: 40px;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
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
  white-space: nowrap;
  gap: 2px;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  font-size: 14px;
  text-align: center;
  &:hover {
    color: #343a40;
    transition: all 0.5s;
  }
`;

export const TableWrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
export const Details = styled.div`
  margin: 30px 0;
`;
export const Span = styled.span`
  color: #fff;
  padding: 2.6px 4.2px;
  font-size: 10.5px;
  border-radius: 5px;
`;
