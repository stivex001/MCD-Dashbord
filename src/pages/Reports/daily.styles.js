import styled from "styled-components";
import { mobile } from "../../responsive";

export const ReportWrapper = styled.div`
  display: flex;
  gap: 30px;
  ${mobile({ flexDirection: "column" })};
`;
export const Left = styled.form`
  flex: 1.8;
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  height: 50%;
  width: 100%;
`;
export const Right = styled.div`
  flex: 3;
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
`;
export const Title = styled.h3`
  font-size: 16px;
  color: #4a4b4c;
  margin-bottom: 15px;
`;
export const Btn = styled.button`
  display: flex;
  align-items: center;
  margin: 10px 0 20px;
  padding: 6px 12px;
  color: white;
  background: linear-gradient(to right, #5c62ae, #4088a9);
  cursor: pointer;
  border: none;
  border-radius: 2px;
  &:hover {
    color: #343a40;
    transition: all 0.5s;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9ecef;
  width: 100%;
  border-radius: 1px;
  border: 1px solid #e9ecef;
`;

export const Input = styled.input`
  padding: 12px;
  width: 100%;
  outline-color: #d4d8e1;
  border: 1px solid #d4d8e1;
`;
