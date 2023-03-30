import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  margin: 50px 0;
`;
export const Title = styled.h3`
  font-size: 16px;
  color: #4a4b4c;
  margin-bottom: 15px;
`;
export const P = styled.p`
  margin: 20px 0;
  color: #8c9ea9;
  font-size: 13px;
`;
export const Span = styled.span`
  font-size: 11.375px;
  color: #33cdff;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
`;
export const FormWrapper = styled.form`
 
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1px;
`;
export const Input = styled.input`
  padding: 12px;
  flex: 1;
  outline-color: #d4d8e1;
  border: 1px solid #d4d8e1;
`;
export const InputTitle = styled.p`
  padding: 12px;
  font-size: 14px;
  color: #495057;
  background: #e9ecef;
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 12px;
  color: #fff;
  background-color: ${(prop) =>
    prop.type === "submit" ? " #5b63ae" : "#f64269"};
  cursor: pointer;
  border: none;
  border-radius: 2px;
  text-align: center;
  &:hover {
    color: #343a40;
    transition: all 0.5s;
  }
`;
export const ResetButton = styled.div`
  display: flex;
  gap: 50px;
  margin: 20px 50px;
`;
export const Select = styled.select`
  padding: 12px;
  flex: 1;
  outline-color: #d4d8e1;
  border: 1px solid #d4d8e1;
`;
export const Option = styled.option`
  padding: 12px;
  flex: 1;
  outline: none;
`;
export const TextArea = styled.textarea`
  padding: 12px;
  flex: 1;
  outline-color: #d4d8e1;
  border: 1px solid #d4d8e1;
`;
export const TextTitle = styled.p`
  padding: 20px;
  font-size: 14px;
  color: #495057;
  background: #e9ecef;
`;
